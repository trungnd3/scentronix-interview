import fetch from "node-fetch";

import type { Server } from "../utils/types";

export default function checkServer(server: Server) {
  return new Promise(async (resolve, reject) => {
    try {
      setTimeout(() => {
        reject(new Error(`Request timeout.`));
      }, 5000);

      const response = await fetch(server.url);
      if (response.status >= 200 || response.status <= 209) {
        resolve(server);
      } else {
        reject(new Error(`Server ${server.url} error.`));
      }
    } catch (error) {
      reject(error);
    }
  });
}
