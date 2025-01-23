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
        let col2 = [-2317];
        let col3 = [];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [   -2317   ]
        );
    })

    it("Must be in a correct order", () => {
        let col1 = [-1233, 1234];
        let col2 = [-2344, 2345];
        let col3 = [3456, -3455];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [
                -3455,      -2344,      -1233,
                1234,       2345,       3456
            ]
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

    it("Must be in a correct order", () => {
        let col1 = [-76244, -49545, -33279, -12865, 24248, 60767];
        let col2 = [-99890, -97871, 21431, 46302, 69745];
        let col3 = [92367, 22734, -5570, -26512, -26695, -41734, -44363, -60491, -92920];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [   
                -99890,      -97871,        -92920,
                -76244,      -60491,        -49545,
                -44363,      -41734,        -33279,
                -26695,      -26512,        -12865,
                -5570,       21431,         22734,
                24248,       46302,         60767,
                69745,       92367
            ]
        );
    })

    it("Must be in a correct order", () => {
        let col1 = [-42942, -42740, -26376, -8814, -5502, 9217, 10321, 13334, 47319, 48875];
        let col2 = [-36172, -18129, 13051];
        let col3 = [47789, 47224, 36428, 29027, 22566, 20250, 16430, -12202, -33955, -37990];
        expect(merge(col1, col2, col3)).toStrictEqual(
            [   
                -42942,         -42740,         -37990,
                -36172,         -33955,         -26376, 
                -18129,         -12202,         -8814,
                -5502,          9217,           10321,
                13051,          13334,          16430,
                20250,          22566,          29027,
                36428,          47224,          47319,
                47789,          48875
            ]
        );
    })
})