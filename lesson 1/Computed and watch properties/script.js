var Vue

new Vue({
	el: '#app',
  data: {
  	counter: 0,
  	counter2: 0
  },
//   COMPUTED WILL RUN ONLY WHEN IT NEEDS TO
  computed: {
      output: function () {
          return this.counter > 5 ? 'Greater than 5' : 'lower than 5'
      }
  },
//   THIS WILL WAIT UNTIL CHANGE IS MADE TO A VALUE
  watch: {
      counter: function (value) {
          var thiss = this
          setTimeout(function () {
              thiss.counter = 0
          }, 2000)
      }
  },
//   METHOD WILL RUN WITH EVERY CHANGE EVEN NOT RELATED
  methods: {
      result: function () {
          return this.counter > 5 ? 'Greater than 5' : 'lower than 5'
      }
  }
})