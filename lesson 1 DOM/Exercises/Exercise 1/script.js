var Vue

new Vue({
	el: '#exercise',
  data: {
  	name: 'Marcin Zaborowski',
  	age: '22',
  	randomImg: 'https://i.pinimg.com/236x/f2/40/5b/f2405b90a294c9d70ddaa58b3d762c20--new-business-ideas-starting-a-business.jpg'
  },
  methods: {
  	randomNum: function() {
  	    return Math.round(Math.random() * 100)
    }
  }
})