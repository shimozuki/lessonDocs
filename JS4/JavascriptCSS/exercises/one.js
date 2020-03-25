const videoElement = document.querySelector('.vPlayer')
const videoCaption = document.querySelector('.videoCaption')

videoElement.addEventListener('timeupdate', (evt) => {
  const curMS = videoElement.currentTime * 1000
  const captionsAfterCurrent = captions.filter((e) => {
    return e.start <= curMS
  })

  const validCaptions = captionsAfterCurrent.filter((e) => {
    return e.end > curMS
  })

  let captionText = ''
  if (validCaptions.length) {
    captionText = validCaptions[0].txt
  }

  videoCaption.innerText = captionText
})

let captions = [{
  txt: "A beautiful Typewriter",
  start: 0,
  end: 3000
}, {
  txt: "On to a big piece of paper",
  start: 3000,
  end: 7000
}, {
  txt: "Transitioning to Video!",
  start: 7000,
  end: 8000
}, {
  txt: "Video of horse, then magazine",
  start: 8000,
  end: 1300
}]

const captionList = document.querySelector('.captionList')

const render = () => {
  captionList.innerHTML = captions.reduce((acc, e) => {
    return acc + `
    <div class="caption">
    <h5>${e.txt}</h5>
    <p class="control startAt">${e.start}</p>
    <p class="control endAt">${e.end}</p>
    </div>
    `
  }, '')

  const captionElementList = captionList.querySelectorAll('.caption')
  captionElementList.forEach((e, i) => {
    e.addEventListener('click', () => {
      if (confirm(`Remove caption: ${captions[i].txt}?`)) {
        captions.splice(i, 1)
        render()
      }
    })
  })
}

render()

