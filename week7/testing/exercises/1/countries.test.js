const countries = require('./countries');

test("find returns empty Array when passed empty String", () => {
    const result = countries.find("");
    expect(result).toEqual([]);
});

test("find returns an Array with 4 matches", () => {
    const result = countries.find();
    expect(result).toEqual([].slice(0, 4));
});

test("find returns search result  toLowerCase & startsWith", () => {
    const result = countries.find("grEECE");
    expect(result).toEqual(["Greece"]);
});

test("find returns empty Array when no matching countries", () => {
    const result = countries.find("whatever");
    expect(result).toEqual([]);
});