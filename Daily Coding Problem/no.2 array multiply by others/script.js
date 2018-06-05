var Vue

var app = new Vue({
 el: '#app',
	data: {
	userInput: '',
	userArray: [],
	outputArray: []
	},
	methods: {
		toArray: function () {
			this.userArray = []
			var biggerNumber = ''
			// push to array if there is ' ' || END || i + 1 === NaN
			for (var i = 0; i < this.userInput.length; i++) {
				if (!isNaN(this.userInput.charAt(i))
					&& this.userInput.charAt(i) !== ' ' 
					&& (isNaN(this.userInput.charAt(i + 1)) 
					|| this.userInput.charAt(i + 1) === ' ' 
					|| this.userInput.charAt(i + 1) === this.userInput.charAt(this.userInput.length) )) {
					if (biggerNumber === '') {
						biggerNumber = this.userInput.charAt(i)
					} else {
						biggerNumber += this.userInput.charAt(i)
					}
					if (biggerNumber !== '-') {
						this.userArray.push(Number(biggerNumber))
						biggerNumber = ''
					}
					// add to bigger chunk if there is another number next
				} else if ((!isNaN(this.userInput.charAt(i)) || this.userInput.charAt(i) === '-') 
						&& this.userInput.charAt(i) !== ' '
						&& !isNaN(this.userInput.charAt(i + 1))) {
					if (biggerNumber === '') {
						biggerNumber = this.userInput.charAt(i)
					} else {
						biggerNumber += this.userInput.charAt(i)
					}
				}
			}
		},
		multiplyOthers: function () {
			this.toArray()
			this.outputArray = []
			console.log(2 * 2)
			for (var i = 0; i < this.userArray.length; i++) {
				var number = 1
				for (var index = 0; index < this.userArray.length; index++) {
					if (index > i) {
						if (index === i + 1) {
							number = this.userArray[index]
						} else {
							number = number * this.userArray[index]
						}
					}
				}
				for (var index = 0; index < this.userArray.length; index++) {
					if(index < i) {
						number = number * this.userArray[index]
					}
				}
				this.outputArray.push(number)
			}
		},
	},
});