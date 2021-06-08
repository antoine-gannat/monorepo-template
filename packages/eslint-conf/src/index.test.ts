import { configuration } from "./";

describe("eslint-conf", () => {
  test("should export an eslint config", () => {
    expect(configuration).toBeDefined();
  });
});
