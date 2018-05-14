var Vue

new Vue({
 el: '#app',
  data: {
    isRunning: false,
    player: {
      name: 'Thrajnor',
      currentHealth: 80,
      maxHealth: 125,
      weapon: 10
    },
    monster: {
      name: 'Goblin',
      currentHealth: 55,
      maxHealth: 100,
      damage: 10
    },
    log: {
      
    }
  },
  methods: {
  }
});