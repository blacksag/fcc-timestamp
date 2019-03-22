# fcc-timestamp

## About
It is a microservice project as required by freecodecamp. This is built using the boilerplate from [this repo](https://github.com/freeCodeCamp/boilerplate-project-timestamp).

## API Project: Timestamp Microservice

### About Microservice :

1. The API endpoint is `GET bold-recess.glitch.me/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**.
3. If the date string is **empty** it lead to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what we get from the date manipulation functions used above.

#### Example usage:
* https://bold-recess.glitch.me/api/timestamp/2015-12-15
* https://bold-recess.glitch.me/api/timestamp/1450137600000

#### Example output:
* { "unix": 1450137600000, "natural": "December 15, 2015" }
