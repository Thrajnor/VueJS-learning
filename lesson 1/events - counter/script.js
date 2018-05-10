var Vue

new Vue({
	el: '#app',
  data: {
  	counter: 0,
  	x: 0,
  	y: 0,
  	add: 1
  },
  methods: {
  	increase: function(add) {
  	    this.counter += Number(add)
    },
    updateCoordinates: function (event) {
        this.x = event.clientX
        this.y = event.clientY
    },
    alertMe: function (event) {
        alert(event.target.value)
    }
  }
})