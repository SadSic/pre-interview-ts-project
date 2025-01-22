import merge from "./merge";

describe('testMergeFunction', () => {
    it("Must be in a correct order", () => {
        let col1 = [1, 4, 7];
        let col2 = [2, 5, 8];
        let col3 = [3, 6, 9];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [
                1,          2,          3,
                4,          5,          6,
                7,          8,          9
            ]
        );
    })
    
    it("Must be in a correct order", () => {
        let col1 = [];
        let col2 = [];
        let col3 = [];
        expect(merge(col1, col2, col3)).toStrictEqual(
            []
        );
    })
    
    it("Must be in a correct order", () => {
        let col1 = [];
        let col2 = [0, 50, 100];
        let col3 = [-25, -75];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [
                -75,        -25,        0,
                50,         100
            ]
        );
    })

    it("Must be in a correct order", () => {
        let col1 = [56774];
        let col2 = [110];
        let col3 = [120, 109, 108, 108, 81, 48, 40, 32];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [
                32,         40,         48,
                81,         108,        108,
                109,        110,        120,
                56774
            ]
        );
    })

    it("Must be in a correct order", () => {
        let col1 = [-56774];
        let col2 = [-901];
        let col3 = [-32, -40, -48, -81, -108, -108, -109, -111];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [
                -56774,     -901,       -111,
                -109,       -108,       -108,
                -81,        -48,        -40,
                -32
            ]
        );
    })

    it("Must be in a correct order", () => {
        let col1 = [-20, 18];
        let col2 = [-4, 37];
        let col3 = [37, 16, 0, -10, -41];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [
                -41,        -20,        -10,
                -4,         0,          16,
                18,         37,         37
            ]
        );
    })
})