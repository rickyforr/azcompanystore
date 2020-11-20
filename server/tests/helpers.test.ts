import { writeFile, readFile } from "../helpers/fs-helpers";
import fs from "fs";
jest.mock("fs");

describe("Helpers", () => {
  test("should write file", () => {
    const callback = jest.fn();

    writeFile({ test: "test" }, callback, "/path", "utf8");
    expect(fs.writeFile).toHaveBeenCalledWith("/path", { test: "test" }, "utf8", expect.any(Function));
  });

  test("should read file", () => {
    const callback = jest.fn();

    readFile(callback, "/path", "utf8");
    expect(fs.readFile).toHaveBeenCalledWith("/path", "utf8", expect.any(Function));
  });
});
