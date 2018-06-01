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
			var userInput = this.userInput
			this.userArray = []
			var biggerNumber = null
			for (var i = 0; i < userInput.length; i++) {
				if (!isNaN(userInput.charAt(i)) && userInput.charAt(i) !== ' ' && (isNaN(userInput.charAt(i + 1)) || userInput.charAt(i + 1) === ' ' || userInput.charAt(i + 1) === userInput.charAt(userInput.length) )) {
					if (biggerNumber === null) {
						biggerNumber = userInput.charAt(i)
					} else {
						biggerNumber += userInput.charAt(i)
					}
					this.userArray.push(Number(biggerNumber))
					var biggerNumber = null
				} else if (!isNaN(userInput.charAt(i)) && userInput.charAt(i) !== ' ' && !isNaN(userInput.charAt(i + 1))) {
					if (biggerNumber === null) {
						biggerNumber = userInput.charAt(i)
					} else {
						biggerNumber += userInput.charAt(i)
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
			var biggestIndex = 0
			var secondBiggest = this.secondBiggest
			var lower = 0
			var higher = 0
			for (var i = 0; i < userArray.length; i++) {
				if(biggest < userArray[i]) {
					biggest = userArray[i]
					this.biggest = biggest
					biggestIndex = i
				}
			}
			for (var i = 0; i < userArray.length; i++) {
				if(secondBiggest < userArray[i] && biggestIndex !== i && biggestIndex !== i - 1 && biggestIndex !== i + 1) {
					secondBiggest = userArray[i]
					this.secondBiggest = secondBiggest
				} else if (biggestIndex === i - 1) {
					lower = userArray[i]
				} else if (biggestIndex === i + 1) {
					higher = userArray[i]
				}
			}
			this.sum = biggest + secondBiggest
			if (lower + higher > this.sum) {
				biggest = lower
				secondBiggest = higher
				this.biggest = biggest
				this.secondBiggest = secondBiggest
				this.sum = lower + higher
			}
		},
	},
});