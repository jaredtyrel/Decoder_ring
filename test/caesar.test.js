// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {

  it("should return false if shift variable is 0,", () => {
    const actual = caesar("thinkful", 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift isnt provided,", () => {
  const actual = caesar("thinkful");
  const expected = false;
  expect(actual).to.equal(expected);
  });

  it("should return jared,", () => {
  const actual = caesar("mduhg", 3, false);
  const expected = "jared";
  expect(actual).to.equal(expected);
  });

  it("should return hello world,", () => {
  const actual = caesar("khoor zruog", 3, false);
  const expected = "hello world";
  expect(actual).to.equal(expected);
  });
});
