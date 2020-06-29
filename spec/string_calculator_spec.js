const { add } = require("../src/string_calculator");

describe("adds", function() {
    it("should return 0 if string is empty", function() {
        expect(add(``)).toEqual(0);
    });
    it("should add 1, and return 1", function() {
        expect(add(`1`)).toEqual(1);
    });
    it("should add 2 numbers", function() {
        expect(add(`1,1`)).toEqual(2);
    });
    it("should add 4 numbers", function() {
        expect(add("1,2,3,4")).toEqual(10);
    });
    it("should handle delimiter and add numbers", function() {
        expect(add("1\n2,3")).toEqual(6);
    });
    it("should handle delimiter and add numbers", function() {
        expect(add("//;\n1;2")).toEqual(3);
    });
    it("should handle delimiter and add numbers", function() {
        expect(add("//4\n142")).toEqual(3);
    });
    it("should throw error if there is a negative number", function() {
        expect(function() { add("-1,-2,3,4") }).toThrow(new Error(`negatives not allowed -1,-2`));
    });
    it("should ignore numbers greater than 999 and add remainig numbers", function() {
        expect(add("//;\n1000;1;2")).toEqual(3);
    });
    it("should add numbers", function() {
        expect(add("//***\n1***2***3")).toEqual(6);
    });
    it("should add numbers", function() {
        expect(add("//[:D][%]\n1:D2%3")).toEqual(6);
    });
    it("should add numbers", function() {
        expect(add("//[***][%%%]\n1***2%%%3")).toEqual(6);
    });
    it("should add numbers", function() {
        expect(add("//[(-_-')][%]\n1(-_-')2%3")).toEqual(6);
    });
    it("should add numbers", function() {
        expect(add("//[abc][777][:(]\n1abc27773:(1")).toEqual(7);
    });
    it("should throw error if it is wrong format", function() {
        expect(function() { add("//;\n1000;1;2;") }).toThrow(new Error(`invalid input`));
    });
    it("should throw error if it is wrong format", function() {
        expect(function() { add("   //;\n1000,1;2") }).toThrow(new Error(`invalid input`));
    });
    it("should throw error if it is wrong format", function() {
        expect(function() { add("1,2,3//;\n1000,1;2") }).toThrow(new Error(`invalid input`));
    });
});