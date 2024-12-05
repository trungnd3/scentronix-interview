import fetch from 'node-fetch';
import findServer from "./find-server";
import { oneValidServers, oneInvalidServers, multiValidServers } from '../tests/fixtures/serverFixture';

jest.mock('node-fetch', () => jest.fn());

const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('Test findServer function', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test('should find server successfully with oneValidServers', async () => {
    mockedFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
    } as any);

    const server = await findServer(oneValidServers);
    expect(fetch).toHaveBeenCalledWith(oneValidServers[0].url);
    expect(server).toEqual(oneValidServers[0]);
  });

  test('should return error message with invalidServers', async () => {
    mockedFetch.mockRejectedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ success: false }),
    } as any);

    await expect(findServer(oneInvalidServers)).rejects.toThrow('No server are online.');
    expect(fetch).toHaveBeenCalledWith(oneInvalidServers[0].url);
  });

  test('should return server online with lowest priority', async () => {
    mockedFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
    } as any);

    const server = await findServer(multiValidServers.data);
    expect(server).toEqual(multiValidServers.data[multiValidServers.lowestPriorityIndex]);
    expect(fetch).toHaveBeenCalledTimes(multiValidServers.data.length);
  });

});
