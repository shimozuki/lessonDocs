const upperContainer = document.querySelector('.upperContainer');
const captionInput = document.querySelector('.captionInput');
const start = document.querySelector('.start');

const last = document.querySelector('.last');
const lowerContainer = document.querySelector('.captionInput');
const save = document.querySelector('.save');

const end = document.querySelector('.end');
const currentCaption = document.querySelector('.currentCaptions');
const canvas = document.querySelector('.canvas');

const context = canvas.getContext('2d');

context.font = '30px Comic Sans MS';
context.fillStyle = 'black';
context.fillText("Hello World", 10, 50)

const delayPicture = () => {
  setTimeout(() => {
    console.log(last, 'last')
    canvas.width = last.videoWidth 
    canvas.height = last.videoHeight
    context.fillText('Hello WOrld', 10, 50)
    console.log(canvas, 'canvas')
  }, 1000)
}

delayPicture()
