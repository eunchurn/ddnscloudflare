const data = {
  statusCode: 200,
  headers: {
    date: "Wed, 04 Dec 2019 22:54:33 GMT",
    "content-type": "application/json; charset=utf-8",
    "content-length": "242",
    vary: "Accept-Encoding",
    "x-cloud-trace-context":
      "73d8b44611e0fa3ce858445ae8e20fcc/2841078834614900638",
    "access-control-allow-origin": "*",
    "x-frame-options": "DENY",
    "x-xss-protection": "1; mode=block",
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    via: "1.1 google",
    connection: "close",
  },
  ip: "220.86.118.90",
};

const ipinfo = () => {
  return new Promise(resolve => {
    process.nextTick(() => resolve(data));
  });
};

export default ipinfo;
