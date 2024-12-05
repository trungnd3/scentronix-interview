import { workerData, parentPort } from "worker_threads";

import type { Server } from "../utils/types";

//workerData will be the second argument of the Worker constructor in multiThreadServer.js

const server = workerData.server;

fetch(server.url)
  .then(response => {
    if (response.status >= 200 || response.status <= 209) {
      parentPort.postMessage({
        server
      })
    }
  });
// setTimeout(() => {
// }, 5000);
