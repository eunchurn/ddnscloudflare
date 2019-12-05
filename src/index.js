import https from "https";
import "dotenv/config";
import getIP from "libs/getIP";

const options = {
  hostname: "api.cloudflare.com",
  path: `/client/v4/zones/${process.env.ZONE}/dns_records`,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Key": process.env.AUTH_KEY,
    "X-Auth-Email": process.env.AUTH_EMAIL,
  },
};
const writeOptions = {
  hostname: "api.cloudflare.com",
  path: `/client/v4/zones/${process.env.ZONE}/dns_records/${process.env.DNS_RECORDS}`,
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Key": process.env.AUTH_KEY,
    "X-Auth-Email": process.env.AUTH_EMAIL,
  },
};

const req = https.get(options, res => {
  if (res.statusCode === 200) {
    let body = [];
    res.on("data", d => {
      body.push(d);
    });
    res.on("end", () => {
      body = JSON.parse(Buffer.concat(body).toString());
      getIP().then(curIP => {
        if (curIP === body.result[1].content) {
          console.log("No Changed IP Address");
        } else {
          console.log("New IP Adddress updated");
          const putData = {
            type: process.env.TYPE,
            name: process.env.NAME,
            content: curIP,
          };
          console.log(JSON.stringify(putData));
          const reqPut = https.request(writeOptions, resPut => {
            resPut.setEncoding("utf8");
            resPut.on("data", chunk => {
              console.log(chunk);
            });
          });
          reqPut.write(JSON.stringify(putData));
          reqPut.end();
        }
      });
    });
  }
});

req.on("error", e => {
  console.error(e);
});
req.end();
