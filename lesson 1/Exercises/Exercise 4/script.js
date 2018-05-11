var Vue
var myClassInterval
var myProgressInterval

new Vue({
  el: '#app',
  data: {
    state: '',
    toggle1: 'Start',
    toggle2: 'Start',
    red: 'red',
    green: 'green',
    height: 'height',
    classOf2Box: 'red',
    classOf3Box: 'height',
    booleanOf3Box: true,
    styleOf4Box: 'red',
    progress: 0
  },
  methods: {
    startEffect: function() {
      this.toggle1 === 'Start' ? this.toggle1 = 'Stop': this.toggle1 = 'Start'
      var thiss = this
      if (this.toggle1 === 'Stop') {
        var toggle = false
        myClassInterval = setInterval(function () {
          toggle = !toggle
          if (toggle === false) {
            thiss.state = 'highlight'
          } else {
            thiss.state = 'shrink'
          }
        }, 1000)
      } else {
        clearInterval(myClassInterval)
      }
    },
    startProgress: function () {
      this.toggle2 === 'Start' ? this.toggle2 = 'Stop': this.toggle2 = 'Start'
      var thiss = this
      if (this.toggle2 === 'Stop') {
        this.progress = 0
        var toggle = false
        myProgressInterval = setInterval(function () {
          if (thiss.progress >= 100) {
            thiss.toggle2 = 'Start'
            return clearInterval(myProgressInterval)
          } else {
            return thiss.progress += 1
          }
        }, 50)
      } else {
        clearInterval(myProgressInterval)
      }
    }
  }
});
