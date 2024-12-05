export const oneValidServers = [
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
];

export const oneInvalidServers = [
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 3
  },
];

export const multiValidServers = {
  data: [
    {
      "url": "http://app.scnt.me",
      "priority": 3
    },
    {
      "url": "https://does-not-work.perfume.new",
      "priority": 3
    },
    {
      "url": "https://github.com",
      "priority": 1
    },
    {
      "url": "https://gitlab.com",
      "priority": 4
    }
  ],
  lowestPriorityIndex: 2
};
