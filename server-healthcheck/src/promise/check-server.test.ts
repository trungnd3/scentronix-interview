import fetch from 'node-fetch';

import checkServer from './check-server';
import { oneValidServers, oneInvalidServers } from '../tests/fixtures/serverFixture';
import { Response } from 'node-fetch';

jest.mock('node-fetch', () => jest.fn());

const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

jest.useFakeTimers();

describe('Test checkServer function', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test('should return server with valid server', async () => {
    mockedFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
    } as any);

    const server = await checkServer(oneValidServers[0]);
    expect(fetch).toHaveBeenCalledWith(oneValidServers[0].url);
    expect(server).toEqual(oneValidServers[0]);
  });

  test('should throw error message with invalid server', async () => {
    mockedFetch.mockRejectedValueOnce('Server error.');

    await expect(checkServer(oneInvalidServers[0])).rejects.toEqual('Server error.');
    expect(fetch).toHaveBeenCalledWith(oneInvalidServers[0].url);
  });

  test('should timeout request after 5s', () => {
    mockedFetch.mockResolvedValueOnce(new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          status: 200,
          json: async () => ({ success: true }),
        } as any)
      }, 6000);
    }));

    jest.advanceTimersByTime(5000);

    expect(checkServer(oneValidServers[0])).rejects.toThrow('Request timeout.');
  });
});
