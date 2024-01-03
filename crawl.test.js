const { normalizedURL } = require("./crawl.js")
const { test, expect } = require("@jest/globals")

test("normalizeURL strip protocol", () => {
    const input = "https://learn.yolit.co.za/"
    const actual = normalizedURL(input)
    const expected = "learn.yolit.co.za"
    expect(actual).toEqual(expected)
})

test("normalizeURL strip trailing space", () => {
    const input = "https://learn.yolit.co.za/"
    const actual = normalizedURL(input)
    const expected = "learn.yolit.co.za"
    expect(actual).toEqual(expected)
})

test("normalizeURL capitals", () => {
    const input = "https://LEARN.yolit.co.za/"
    const actual = normalizedURL(input)
    const expected = "learn.yolit.co.za"
    expect(actual).toEqual(expected)
})

test("normalizeURL strip http", () => {
    const input = "http://learn.yolit.co.za/"
    const actual = normalizedURL(input)
    const expected = "learn.yolit.co.za"
    expect(actual).toEqual(expected)
})