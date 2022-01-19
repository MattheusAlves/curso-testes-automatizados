const StringManipulation = require("./atividade1")

describe("StringManipulations class teste", () => {
    const defaultString = "initial string buzz fizz test initial buzz test"
    let stringManipulator

    beforeAll(() => {
        stringManipulator = new StringManipulation(defaultString)
    })

    describe("StringManipulations -> First/Last match", () => {
        it("should return the first matched substring for a given string", () => {
            const actual = stringManipulator.findFirstMatch("initial")

            expect(actual).toStrictEqual(expect.stringMatching("initial"))
        })

        it("should return the last matched substring for a given string", () => {
            const actual = stringManipulator.findFirstMatch("initial")
            const output = "initial"

            expect(actual).toStrictEqual(expect.stringMatching(output))
        })
    })
    
    describe("StringManipulations -> Substrings", () => {


        it("should return substring when a given string does not match", () => {
            const firstMatchedValue = stringManipulator.findFirstMatch("jest")
            const lastMatchedValue = stringManipulator.findFirstMatch("hello")
            const output = ["jest", "hello"]

            expect([firstMatchedValue, lastMatchedValue]).toEqual(output)
        })

        it("should return the first substring between two matches", () => {
            const actual = stringManipulator.substringBetweenMatches("initial", "test")
            const output = "string buzz fizz"

            expect(actual).toStrictEqual(output)
        })

        it("should return null when some substring is not found", () => {
            const actual = stringManipulator.substringBetweenMatches("jest", "jest2")
            const output = null

            expect(actual).toStrictEqual(output)
        })

        it("should return a string made of the first 2 and the last 2 chars of the original string", () => {
            const actual = stringManipulator.both_ends()
            const output = "inst"

            expect(actual).toBe(output)
        })

        it("should return a string where all occurences of its first char have been changed to '*', except do not change the first char itself", () => {
            const actual = stringManipulator.fix_start("bubble")
            const output = "bu**le"

            expect(actual).toStrictEqual(output)
        })
    })
})