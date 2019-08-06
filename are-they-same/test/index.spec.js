import { comp } from "../index";
import { expect } from "chai";


describe("Codewars: Are they the same?", () => {
    describe("comp function", () => {
        it("should return true on empty arrays", () => {
            expect(comp([],[])).to.equal(true);
        });

        const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        it('should return true if a2 elements are equal to a1 squared elements', function () {
            expect(comp(a1, a2)).to.equal(true);
        });


        const a3 = [121];
        const a4 = [11*12];
        it('should return false if a2 elements are different to a1 squared elements', function () {
            expect(comp(a3, a4)).to.equal(false);
        });
    });
})


