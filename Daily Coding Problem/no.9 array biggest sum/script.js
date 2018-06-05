var Vue

var app = new Vue({
 el: '#app',
	data: {
	userInput: '',
	userArray: [],
	sum: 0,
	biggest: 0,
	secondBiggest: 0,
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
		checkBiggest: function () {
			this.toArray()
			this.sum = 0
			this.biggest = 0
			this.secondBiggest = 0
			var userArray = this.userArray
			var biggest = this.biggest
			var biggestIndex = -1
			var secondBiggestIndex = -1
			var secondBiggest = this.secondBiggest
			var lower = 0
			var higher = 0
			for (var i = 0; i < userArray.length; i++) {
				if(biggest < userArray[i] || userArray[0] === userArray[i]) {
					biggest = userArray[i]
					this.biggest = biggest
					biggestIndex = i
				}
			}
			for (var i = 0; i < userArray.length; i++) {
				if((secondBiggest < userArray[i] || userArray[0] === userArray[i] || userArray[biggestIndex + 2] === userArray[i]) 
				&& biggestIndex !== i 
				&& biggestIndex !== i - 1 
				&& biggestIndex !== i + 1) {
					secondBiggest = userArray[i]
					this.secondBiggest = secondBiggest
				} else if (biggestIndex === i - 1) {
					lower = userArray[i]
				} else if (biggestIndex === i + 1) {
					higher = userArray[i]
				}
			}
			if (lower + higher > this.sum && secondBiggestIndex !== -1) {
				biggest = lower
				secondBiggest = higher
				this.biggest = biggest
				this.secondBiggest = secondBiggest
			}
			if (userArray.length === 3) { 
				biggest = userArray[0]
				secondBiggest = userArray[2]
				this.biggest = biggest
				this.secondBiggest = secondBiggest
			}
			this.sum = biggest + secondBiggest
			if(userArray.length < 3) {
				this.biggest = 0
				this.secondBiggest = 0
				this.sum = 'Please enter 3 or more digits'
			}
		},
	},
});