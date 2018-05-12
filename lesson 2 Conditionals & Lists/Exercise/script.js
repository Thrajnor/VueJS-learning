var Vue

new Vue({
  el: '#exercise',
  data: {
    deleteMe: false,
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: {
         text: 'Lord of the Rings',
         img: ''
        },
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  }
});
