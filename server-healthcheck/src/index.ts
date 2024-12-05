import findServer from "./worker/find-server.js";
// import findServer from "./promise/find-server.js";
// import findServer from "./child-process/find-server.js";
import SERVERS from './data/servers.json'

(async () => {
  const start = Date.now();
  try {
    const results = await findServer(SERVERS);
    console.log(`${Date.now() - start}ms`);
    console.log('Server found:', results);
  } catch (error) {
    console.error(error)
  }
})();
