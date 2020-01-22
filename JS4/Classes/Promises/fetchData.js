const fetchData = (str) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}

const a = fetchData('https://c0d3.com/api/lessons').then( (data) => {
  console.log(data) // data is the lesson array
})
