const compareTypes = require('../src/compare.js');

describe('Primitives', () => {
    const testPrimitives = [
        {title: 'Numbers 1 & 1', o1: 1, o2: 1, expectedRes: true},
        {title: 'Numbers 1 & 0', o1: 1, o2: 0, expectedRes: false},
        {title: 'Numbers Inf & -Inf', o1: -Infinity, o2: Infinity, expectedRes: false},
        //{title: 'Numbers -Inf & -Inf', o1: -Infinity, o2: -Infinity, expectedRes: true},
        {title: 'Numbers -9 & 185.2', o1: -9, o2: 185.2, expectedRes: false},
        {title: 'Numbers 185.2 & 185.2', o1: 185.2, o2: 185.2, expectedRes: true},
        {title: 'Strings "" & ""', o1: "", o2: "", expectedRes: true},
        {title: 'Strings "abc" & "abc"', o1: "abc", o2: "abc", expectedRes: true},
        {title: 'Strings "abc" & "ABC"', o1: "abc", o2: "ABC", expectedRes: false},
        {title: 'Strings "abc " & "abc"', o1: "abc ", o2: "abc", expectedRes: false},
        {title: 'Boolean true & true', o1: true, o2: true, expectedRes: true},
        {title: 'Boolean true & false', o1: true, o2: false, expectedRes: false},
        {title: 'NaN & NaN', o1: NaN, o2: NaN, expectedRes: false},
        {title: 'Null & Null', o1: null, o2: null, expectedRes: false},
        {title: 'Undefined & Undefined', o1: undefined, o2: undefined, expectedRes: false},
        {title: 'Number & String', o1: 1, o2: "1", expectedRes: false},
    ];

    testPrimitives.forEach((test) => {
        it(test.title, () => {
            expect(compareTypes(test.o1, test.o2)).toBe(test.expectedRes);
        });
    });

    let func1 = (a, b) => a + b;
    let func2 = func1;
    let func3 = (a, b) => a - b;

    let obj1 = {o1: true, o2: "1", o3: func2};
    let obj2 = {o1: true, o2: "1", o3: func2};
    let obj3 = {o1: true, o2: "2", o3: func2};
    let obj4 = {o1: true, o2: "2", o3: func3};

    const tests = [
        {title: 'Same functions', o1: func1, o2: func2, expectedRes: true},
        {title: 'Diff functions', o1: func1, o2: func3, expectedRes: false},
        {title: 'Same arrays [1, 2]', o1: [1, 2], o2: [1, 2], expectedRes: true},
        {title: 'Reversed arrays [1, 2] & [2, 1]', o1: [2, 1], o2: [1, 2], expectedRes: false},
        {title: 'Array [1, 2] & Number 2', o1: [1, 2], o2: 2, expectedRes: false},
        {title: 'Object with bool, string & functions', o1: obj1, o2: obj2, expectedRes: true},
        {title: 'Object with bool, diff strings & functions', o1: obj1, o2: obj3, expectedRes: false},
        // {title: 'Object with bool, diff strings & functio', o1: obj4, o2: obj3, expectedRes: false},

    ];

    tests.forEach((test) => {
        it(test.title, () => {
            expect(compareTypes(test.o1, test.o2)).toBe(test.expectedRes);
        });
    });
});






