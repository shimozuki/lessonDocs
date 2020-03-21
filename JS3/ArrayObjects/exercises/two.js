const allFuns = {}

const a = ['Edna', 'Optimus', 'Minion'];

Array.prototype.setMaxSize = function(max) {
  this.oldPush = this.push
  this.push = (newElement) => {
    if (this.length < max) {
      return this.oldPush(newElement)
    }
    return this.length
  }
}

module.exports = allFuns
