import { Worker } from "worker_threads";

import type { Server } from "../utils/types";

function runWorker(workerData: {server: Server}) {
  return new Promise((resolve, reject) => {
    //first argument is filename of the worker
    const worker = new Worker("./dist/worker/check-server", {
      workerData,
    })
    worker.on("message", (data) => {
      resolve(data.server)
    }) //This promise is gonna resolve when messages comes back from the worker thread
    worker.on("error", reject)
    worker.on("exit", code => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`))
      }
    })
  })
}

export default async function findServer(servers: Server[]) {
  try {
    const workers = [];
    let priority: boolean | number = false;
    let returnServer: Server;
    servers.forEach(server => workers.push(runWorker({ server })));
    const results = await Promise.allSettled(workers);
    // console.log(results)
    results.forEach(r => {
      if (r.status === 'fulfilled') {
        if (priority === false || priority > r.value.priority) {
          priority = r.value.priority;
          returnServer = r.value;
        }
      }
    });
    return returnServer;
  } catch (error) {
      throw error;
  }
}
