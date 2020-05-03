import getIP from "./getIP";

jest.mock("./getIP");

getIP.mockResolvedValue("220.86.118.90");

it("getIP with promises", () => {
  return getIP().then((data) =>
    expect(data).toEqual("220.86.118.90"),
  );
});
