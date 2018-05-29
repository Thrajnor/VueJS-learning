var Vue

var app = new Vue({
 el: '#app',
  data: {
    alwaysTrue: true,
    isRunning: false,
    loseCounter: 0,
    winCounter: 0,
    // PLAYER MODEL ==========================================
    player: {
      type: 'player',
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
    // MONSTER MODEL ==========================================
    monster: {
      type: 'monster',
      name: 'Goblin',
      health: 100,
      maxHealth: 100,
      weapon: 12,
      stun: false,
      skills: {
        skill1: 'Stab',
        skill2: 'Dirty Blow',
        skill3: 'Potion'
      }
    },
    logs: []
  },
  methods: {
    calculateMinMax: function(min, max) {
      return Math.max(Math.round(Math.random() * max) + 1, min)
    },
    log: function (did, char, enemy, howMuch) {
      if(did === 'stun') {
        return this.logs.push({
          turn: char.type,
          text: char.name + ' is stunned !!!',
        })
      } else if (did === 'heal') {
        return this.logs.push({
          turn: char.type,
          text: char.name + ' heals himself with ' + char.skills.skill3 + ' for ' + howMuch + ' hit points',
        })
      } else if (did === 'attack') {
        return this.logs.push({
          turn: char.type,
          text: char.name + ' hits with ' + char.skills.skill1 + ' ' + enemy.name + ' for ' + howMuch + ' damage',
        })
      }
    },
    // PLAYER ATTACKS ==========================================
    attack: function(stun) {
      if (!stun) {
        // calculate damage ========
        var damage = this.calculateMinMax(5, 11)
        this.monster.health -= damage
        // log push ================ 
        this.log('attack', this.player, this.monster, damage)
        return this.nextTurn('monster')
      } else {
        this.player.stun = false
        // log push ================ 
        this.log('stun', this.player)
        return this.nextTurn('monster')
      }
    },
    strongAttack: function(stun) {
      if (!stun) {
        // calculate damage ========
        var damage = this.calculateMinMax(10, 15)
        this.monster.health -= damage
        this.player.stun = true
        // log push ================ 
        this.log('attack', this.player, this.monster, damage)
        return this.nextTurn('monster')
      } else {
        this.player.stun = false
        // log push ================ 
        this.log('stun', this.player)
        return this.nextTurn('monster')
      }
    },
    heal: function(stun) {
      if (!stun) {
        var heal = this.calculateMinMax(15, 20)
        this.player.health += heal
        if (this.player.health > this.player.maxHealth) {
          this.player.health = this.player.maxHealth
          return this.nextTurn('monster')
        } else {
          this.nextTurn('monster')
        }
        // log push ================ 
        this.log('heal', this.player, this.monster, heal)
      } else {
        this.player.stun = false
        // log push ================ 
        this.log('stun', this.player)
        return this.nextTurn('monster')
      }
    },
    // MONSTER ATTACKS ==========================================

    stab: function(stun) {
      if (!stun) {
        // calculate damage ========
        var damage = this.calculateMinMax(7, 17)
        this.player.health -= damage
        // log push ================ 
        this.log('attack', this.monster, this.player, damage)
        return this.nextTurn('player')
      } else {
        this.monster.stun = false
        // log push ================ 
        this.log('stun', this.monster)
        return this.nextTurn('player')
      }
    },
    dirtyBlow: function(stun) {
      if (!stun) {
        // calculate damage ========
        var damage = this.calculateMinMax(10, 20)
        this.player.health -= damage
        this.monster.stun = true
        // log push ================ 
        this.log('attack', this.monster, this.player, damage)
        return this.nextTurn('player')
      } else {
        this.monster.stun = false
        // log push ================ 
        this.log('stun', this.monster)
        return this.nextTurn('player')
      }
    },
    potion: function(stun) {
      if (!stun) {
        var heal = this.calculateMinMax(15, 25)
        this.monster.health += heal
        if (this.monster.health > this.monster.maxHealth) {
          this.monster.health = this.monster.maxHealth
          return this.nextTurn('player')
        } else {
          this.nextTurn('player')
        }
        // log push ================ 
        this.log('heal', this.monster, this.player, heal)
      } else {
        this.monster.stun = false
        // log push ================ 
        this.log('stun', this.monster)
        return this.nextTurn('player')
      }
    },
    nextTurn: function (turn) {
      if (this.checkWin()) {
        return
      }
      if (turn === 'monster') {
        var whichAttack = Math.round(2 * (Math.random() / .99))
        if (whichAttack === 0) {
          this.stab(this.monster.stun)
        } else if (whichAttack === 1) {
          this.dirtyBlow(this.monster.stun)
        } else {
          this.potion(this.monster.stun)
        }
        this.checkWin()
      }
    },
    giveUp: function () {
      this.isRunning = false
      this.loseCounter += 1
    },
    startGame: function () {
      this.isRunning = true
      this.player.health = this.player.maxHealth
      this.monster.health = this.monster.maxHealth
      this.player.stun = false
      this.monster.stun = false
      this.logs = []
    },
    checkWin: function () {
      if (this.monster.health <= 0) {
        this.winCounter += 1
        if (confirm('Good Game you win! start anew?')) {
          this.startGame()
        } else {
          this.isRunning = false
        }
        return true
      } else if (this.player.health <= 0) {
        this.loseCounter += 1
        if (confirm('Sadly you lose! Want a rematch?')) {
          this.startGame()
        } else {
          this.isRunning = false
        }
        return true
      }
      return false
    }
  },
});