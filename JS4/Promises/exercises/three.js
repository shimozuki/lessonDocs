const url = "https://c0d3.com/api/lessons"
const fetch = require("node-fetch")

const fetchData = (str) => {
  return fetch(str).then((res) => {
    return res.json()
  })
}

fetchData(url).then((data) => {
  console.log(data)
})

fetch(url).then((r) => {
  return r.json()
}).then((data) => {
  console.log(data)
})
