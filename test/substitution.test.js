// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {

    it("should encode the message including spaces", () => {
        const actual = substitution("Hello World and all who are here", "CDEFGHIJKLMNOPQRSTUVWXYZAB");
        const expected = "jgnnq yqtnf cpf cnn yjq ctg jgtg";
        expect(actual).to.equal(expected);
    });

    it("should return false if the alphabet is not 26 characters", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return false is the alphabet has duplicate characters", () => {
        const actual = substitution("thinkful", "aaadefghijklmnopqrstuvwzzz");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    
})
