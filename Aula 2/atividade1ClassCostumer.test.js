const AdressMatcher = require("./atividade1ClassConsumer");
const StringManipulations = require("./atividade1");

/* fixtures */
const findFirstMatchOutput = "R. test jest"
const fixStartOutput = "Tes* jes* buzz fizz, 213"

jest.mock('./atividade1', () => {
    return jest.fn().mockImplementation(() => {
        return {
            findFirstMatch: () => findFirstMatchOutput,
            fix_start: () => fixStartOutput
        }
    });
});

describe("AdressMatcher class test", () => {
    beforeEach(() => {
        StringManipulations.mockClear();
    })

    it("should instantiate StringManipulations in the constructor of AddressMatcher class", () => {
        new AdressMatcher();

        expect(StringManipulations).toHaveBeenCalledTimes(1)
    })

    it("should assert returned value by findStreetName method", () => {
        const actual = new AdressMatcher("R. test jest buzz fizz, 213").findStreetName("R. test jest");

        expect(actual).toStrictEqual(findFirstMatchOutput)

    })

    it("should assert returned value by hideStreetName method", () => {
        const actual = new AdressMatcher().hideStreetName("Test jest buzz fizz, 213");

        expect(actual).toBe(fixStartOutput)

    })
})