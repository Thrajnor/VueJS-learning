var Vue

new Vue({
 el: '#app',
  data: {
    isRunning: false,
    player: {
      name: 'Thrajnor',
      health: 125,
      maxHealth: 125,
      weapon: 10,
      stun: false,
      skills: {
        skill1: 'Attack',
        skill2: 'Strong Attack',
        skill3: 'Heal'
      }
    },
    monster: {
      name: 'Goblin',
      health: 100,
      maxHealth: 100,
      damage: 10,
      stun: false,
      skills: {
        skill1: 'Stab',
        skill2: 'Swith Blow',
        skill3: 'Potion',
      }
    },
    log: {
      
    }
  },
  methods: {
    attack: function(wait) {
      if (!wait) {
        var damage = this.player.weapon + Math.round(6 * ((Math.random() * 1000) / 999.99))
        this.monster.health -= damage
        return this.nextTurn('monster')
      } else {
        return this.nextTurn('monster')
      }
    },
    strongAttack: function(wait) {
      
    },
    heal: function(wait) {
      
    },
    nextTurn: function (round) {
      
    }
  }
});