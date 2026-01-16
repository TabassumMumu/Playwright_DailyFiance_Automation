import { request } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

async function fetchID(){
    const api = await request.newContext({
        baseURL : "https://gmail.googleapis.com",
        extraHTTPHeaders: {
            "Authorization": `Bearer ${process.env.Gmail_access_token}`,
            "Accept": "application/json",
        }
    });

    const response = await api.get("/gmail/v1/users/me/messages");  
    const responseBody = await response.json();  
    console.log(responseBody);
    const messageId = responseBody.messages[0].id;
    return messageId;   
}

export async function readLatestEmail(){
    const messageId = await fetchID();
    const api = await request.newContext({
        baseURL : "https://gmail.googleapis.com",
        extraHTTPHeaders: {
            "Accept": "*/*",
            "Authorization": `Bearer ${process.env.Gmail_access_token}`,
            "content-type" : "application/json",
        }
    });
    const response = await api.get(`/gmail/v1/users/me/messages/${messageId}`);

    const responseBody =  await response.json();
    const snippet = responseBody.snippet;
    return snippet;

}
    

    

