const { normalizedURL, getURLsFromHTML } = require("./crawl.js")
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

test("getURLsFromHTML absolute", () => {
    const inputHTML = `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Basic HTML Page</title>
            </head>

            <body>

                <h1>Welcome to My Web Page</h1>

                <p>This is a basic HTML page with a link.</p>

                <a href="http://learn.yolit.co.za/path/" target="_blank">Visit Learn Yolit</a>

            </body>

            </html>
            `
    const inputBaseURL = "http://learn.yolit.co.za"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["http://learn.yolit.co.za/path/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML relative", () => {
    const inputHTML = `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Basic HTML Page</title>
            </head>

            <body>

                <h1>Welcome to My Web Page</h1>

                <p>This is a basic HTML page with a link.</p>

                <a href="/path/" target="_blank">Visit Learn Yolit</a>

            </body>

            </html>
            `
    const inputBaseURL = "http://learn.yolit.co.za"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["http://learn.yolit.co.za/path/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML both", () => {
    const inputHTML = `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Basic HTML Page</title>
            </head>

            <body>

                <h1>Welcome to My Web Page</h1>

                <p>This is a basic HTML page with a link.</p>

                <a href="/path1/" target="_blank">Visit Learn Yolit 1</a>
                <a href="http://learn.yolit.co.za/path2/" target="_blank">Visit Learn Yolit 2</a>
            </body>

            </html>
            `
    const inputBaseURL = "http://learn.yolit.co.za"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["http://learn.yolit.co.za/path1/", "http://learn.yolit.co.za/path2/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML bad", () => {
    const inputHTML = `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Basic HTML Page</title>
            </head>

            <body>

                <h1>Welcome to My Web Page</h1>

                <p>This is a basic HTML page with a link.</p>

                <a href="bad" target="_blank">bad</a>

            </body>

            </html>
            `
    const inputBaseURL = "http://learn.yolit.co.za"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})