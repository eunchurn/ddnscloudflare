import getIP from "./getIP";

jest.mock("ipinfo");

it("getIP with promises", () => {
  // expect.assertions(1);
  return getIP().then(data => expect(data).toEqual("220.86.118.35"));
});
