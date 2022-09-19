// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {

    it("should encode the given string with spaces included", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.equal(expected);
    });

    it("should decode the given string with the (i/j)", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
    });

    it("should return false if when an odd numbered string is given", () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
})