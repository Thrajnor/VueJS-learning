var Vue

new Vue({
  el: '#exercise',
  data: {
    value: 0,
    timer: 5
  },
  computed: {
    result: function () {
      var temp
      if (this.value < 37) {
        temp = 'Not There yet!'
      } else if (this.value > 37) {
        temp = 'Too high !!!'
      } else {
        temp = 'Done!'
      }
      return temp
    }
  },
  watch : {
    value: function () {
      var thiss = this
      if (thiss.value === 37) {
        setTimeout(function () {
          thiss.value = 0
        }, thiss.timer * 1000)
      }
    }
  }
});