var Vue

new Vue({
	el: '#app',
  data: {
    attachClass: false,
    color: 'green',
    color2: 'red',
    width: 100
  },
  computed: {
    classChange: function () {
      return {
        red: this.attachClass,
        blue: !this.attachClass
      }
    },
    myStyle: function () {
      return {
        width: this.width + 'px'
      }
    }
  }
})