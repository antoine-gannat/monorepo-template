import { sayHello } from ".";

describe("example", () => {
  test("should export a function", () => {
    expect(sayHello).toBeDefined();
  });
});
