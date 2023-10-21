import { useState } from "react";
import "./index.less";
import api from "../../api";
const DemoChatPage = () => {
  const [message, setMessage] = useState<String>();
  const [response, setResponse] = useState("Hi");

  const handleInputChange = (e: any) => {
    setMessage(e.target.value);
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
    const res = await api.getMessageResponse(data);
    setResponse(res.data.choices[0].message.content);
    return res;
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
    </div>
  );
};
export default DemoChatPage;
