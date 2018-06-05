var Vue

var app = new Vue({
 el: '#app',
	data: {
	userInput: '',
	userArray: [],
	isPossible: false,
	firstNumber: 0,
	secondNumber: 0,
	k: 0,
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
						console.log(biggerNumber)
						biggerNumber += this.userInput.charAt(i)
						console.log(biggerNumber)
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
		checkSum: function () {
			this.toArray()
			this.firstNumber = 0
			this.secondNumber = 0
			this.k = Number(this.k)
			for (var i = 0; i < this.userArray.length; i++) {
				this.firstNumber = this.userArray[i]
				for (var index = i + 1; index < this.userArray.length; index++) {
					this.secondNumber = this.userArray[index]
					if (this.firstNumber + this.secondNumber === this.k) {
						return this.isPossible = true
					}
				}
			}
			this.firstNumber = 0
			this.secondNumber = 0
			return this.isPossible = false
		},
	},
});