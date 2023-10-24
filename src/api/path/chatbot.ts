import { requestPost } from "../request";

const proxyUrl = "https://vercel-proxy-alpha-two.vercel.app/proxy";

const getMessageResponse = (data: any, config?: any): any =>
  requestPost(
    proxyUrl + "/api.chatanywhere.com.cn/v1/chat/completions",
    data,
    config
  );

export const apiChatbot = { getMessageResponse };
