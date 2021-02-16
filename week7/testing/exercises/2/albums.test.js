const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: "Midnight at the Lost and Found (1983)",
                },
                { name: "Dead Ringer (1981)" },
                { name: "Bat Out of Hell (1977)" },
            ],
        },
    });

    return getAlbumNames("meat loaf").then((albumNames) => {
        console.log(albumNames)
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
