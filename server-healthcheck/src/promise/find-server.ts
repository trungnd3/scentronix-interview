import type { Server } from "../utils/types";
import checkServer from "./check-server";

export default async function findServer(servers: Server[]) {
  try {
    const checkPromises = [];
    let priority: boolean | number = false;
    let returnServer: Server;
    servers.forEach(server => checkPromises.push(checkServer(server)));
    const results = await Promise.allSettled(checkPromises);

    results.forEach(r => {
      if (r.status === 'fulfilled') {
        if (priority === false || priority > r.value.priority) {
          priority = r.value.priority;
          returnServer = r.value;
        }
      }
    });

    if (!returnServer) {
      throw new Error("No server are online.");
    }

    return returnServer;
  } catch (error) {
    throw error;
  }
}
