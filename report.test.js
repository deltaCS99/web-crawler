const { sortPages } = require("./report.js")
const { test, expect } = require("@jest/globals")

test("sortPages", () => {
    const input = {
        "http://learn.yolit.co.za/": 1,
        "http://learn.yolit.co.za/life": 3,

    }

    const actual = sortPages(input)
    const expected = [
        ["http://learn.yolit.co.za/life", 3],
        ["http://learn.yolit.co.za/", 1]
    ]
    expect(actual).toEqual(expected)
})