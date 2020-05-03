import ipinfo from "./ipinfo";

const getIP = () => {
  return ipinfo().then((data) => data.ip);
};

export default getIP;
