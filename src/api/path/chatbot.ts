import { requestPost } from "../request";

const proxyUrl = "https://vercel-proxy-alpha-two.vercel.app/proxy";

const getMessageResponse = (data: any, config?: any): any =>
  requestPost(proxyUrl + "/api.chatanywhere.com.cn/v1/chat/completions", data, {
    ...config,
    headers: {
      Authorization:
        "Bearer sk-9u4ShMxmu5TtPlQ86Xfa8dbuxs6bu48dmqjaDoMRxLoYCQSL",
    },
  });

export const apiChatbot = { getMessageResponse };
