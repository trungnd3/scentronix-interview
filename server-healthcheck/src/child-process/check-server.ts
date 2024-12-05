import fetch from "node-fetch";

import type { Server } from "../utils/types";

process.on("message", async (message: {server: Server}) => {
  try {
    const result = await checkServer(message.server);
    process.send(result);
    process.exit(0);
  } catch (error) {
    // console.error(error)
    process.exit(1);
  }
})

export default function checkServer(server: Server) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(server.url);
      if (response.status >= 200 || response.status <= 209) {
        resolve(server);
      } else {
        reject(new Error(`Cannot connect to ${server.url}`));
      }
    } catch (error) {
      reject(error);
    }
    // setTimeout(async () => {
    // }, 5000);
  });
}
