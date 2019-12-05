import https from "https";

const options = {
  hostname: "ipinfo.io",
  port: 443,
  path: "/json",
  method: "GET",
};

const ipinfo = () => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      const { statusCode, headers } = res;
      if (statusCode === 200) {
        res.on("data", data => {
          const json = JSON.parse(data.toString());
          const { ip } = json;
          resolve({
            statusCode,
            headers,
            ip,
          });
        });
      } else {
        reject(statusCode);
      }
    });

    req.on("error", e => {
      reject(e);
    });
    req.end();
  });
};

export default ipinfo;
