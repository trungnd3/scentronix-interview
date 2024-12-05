import { fork } from "child_process";

import type { Server } from "../utils/types";

export default async function findServer(servers: Server[]) {
  return new Promise((resolve, reject) => {
    let priority: boolean | number = false;
    let returnServer: Server;
    const childProcesses = {};

    servers.forEach(server => {
      const childProcess = fork('./dist/child-process/check-server.js');
      if (childProcess.pid) {
        childProcesses[childProcess.pid] = 1;
      }
      childProcess.send({ server });
      childProcess.on("message", (message: Server) => {
        if (priority === false || priority as number > message.priority) {
          priority = message.priority;
          returnServer = message;
        }
      }).on('exit', (code) => {
        if (childProcesses[childProcess.pid]) {
          delete childProcesses[childProcess.pid];
        }

        if (!Object.keys(childProcesses).length) {
          returnServer ? resolve(returnServer) : reject('No server online.');
        }
      });
    });
  });
}
