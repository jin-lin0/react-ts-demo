import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.less";
import api from "../../api";
import { Modal, Input, Form, Button } from "antd";
const DemoChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<String>();
  const [response, setResponse] = useState("Hi,I'm your assistant.");

  useEffect(() => {
    const authorization = Cookies.get("Authorization");
    console.log(authorization);
    if (!authorization) {
      setIsModalOpen(true);
    }
  }, []);

  const handleInputChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleApikeySubmit = (values: any) => {
    console.log(values);
    for (const key in values) {
      if (values.hasOwnProperty(key) && /^[\x00-\xFF]+$/.test(values[key])) {
        Cookies.set(key, values[key], { expires: 1 });
        setIsModalOpen(false);
      } else {
        setResponse("Invalid input.");
      }
    }
  };

  const handleSubmit = async () => {
    setMessage("");
    setResponse("Thinking...");
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
    };
    try {
      const authorization = Cookies.get("Authorization");
      const config = {
        headers: {
          Authorization: authorization,
        },
      };
      const res = await api.getMessageResponse(data, config);
      setResponse(res.data.choices[0].message.content);
      return res;
    } catch (e: any) {
      setResponse("Authorization Error.");
      Cookies.remove("Authorization");
      setIsModalOpen(true);
    }
  };
  return (
    <div className="DemoChatPage">
      <div className="chat-container">
        <div className="chat-list">
          <div className="chat-item">
            <img
              src="https://i.im.ge/2023/10/20/tSK4R9.BXMVI42RnG-small.jpg"
              alt="ChatBox"
            />
          </div>
        </div>
        <div className="chat-content">
          <div className="message">
            <img
              src="https://i.im.ge/2023/10/20/tSK4R9.BXMVI42RnG-small.jpg"
              alt="User 1"
            />
            <p>{response}</p>
          </div>
        </div>
      </div>
      <div className="chat-message">
        <input
          className="chat-message-input"
          type="text"
          onChange={handleInputChange}
        />
        <div className="chat-message-submit" onClick={handleSubmit}>
          send
        </div>
      </div>
      <Modal title="Input your APIKEY" open={isModalOpen} footer={null}>
        <Form onFinish={handleApikeySubmit}>
          <Form.Item name="Authorization">
            <Input placeholder="input your apikey" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default DemoChatPage;
