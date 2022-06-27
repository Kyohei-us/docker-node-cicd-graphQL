import assert from "assert";
import { getCurrentTime, padWithLeadingZeros } from "../libs/utils.js";

describe("Get Time", function () {
  it("should return current time", function () {
    assert.equal(getCurrentTime("2013-02-08 09:30:26"), "093026");
  });
});

describe("Pad With Leading Zeros", function () {
  it("should return 07", function () {
    assert.equal(padWithLeadingZeros("7", 2), "07");
  });
});
