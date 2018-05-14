var Vue

new Vue({
 el: '#app',
  data: {
    alwaysTrue: true,
    isRunning: false,
    // PLAYER MODEL ==========================================
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
    // MONSTER MODEL ==========================================
    monster: {
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
    // PLAYER ATTACKS ==========================================
    attack: function(stun) {
      if (!stun) {
        var damage = this.player.weapon + Math.round(6 * (Math.random() / .99))
        this.monster.health -= damage
        // log push ================
        this.logs.push({
          turn: 'player',
          text: this.player.name + ' hits with ' + this.player.skills.skill1 + ' ' + this.monster.name + ' for ' + damage + ' damage',
        })
        // End log push ================
        return this.nextTurn('monster')
      } else {
        this.player.stun = false
        // log push ================
        this.logs.push({
          turn: 'player',
          text: this.player.name + ' is stunned !!!',
        })
        // End log push ================
        return this.nextTurn('monster')
      }
    },
    strongAttack: function(stun) {
      if (!stun) {
        var damage = (this.player.weapon * 1.5) + Math.round(10 * (Math.random() / .99))
        this.monster.health -= damage
        this.player.stun = true
        // log push ================
        this.logs.push({
          turn: 'player',
          text: this.player.name + ' hits with ' + this.player.skills.skill2 + ' ' + this.monster.name + ' for ' + damage + ' damage',
        })
        // End log push ================
        return this.nextTurn('monster')
      } else {
        this.player.stun = false
        // log push ================
        this.logs.push({
          turn: 'player',
          text: this.player.name + ' is stunned !!!',
        })
        // End log push ================
        return this.nextTurn('monster')
      }
    },
    heal: function(stun) {
      if (!stun) {
        var heal = 15 + Math.round(10 * (Math.random() / .99))
        this.player.health += heal
        // log push ================
        this.logs.push({
          turn: 'player',
          text: this.player.name + ' heals himself with ' + this.player.skills.skill3 + ' for ' + heal + ' hit points',
        })
        // End log push ================
        if (this.player.health > this.player.maxHealth) {
          this.player.health = this.player.maxHealth
          return this.nextTurn('monster')
        } else {
          return this.nextTurn('monster')
        }
      } else {
        this.player.stun = false
        // log push ================
        this.logs.push({
          turn: 'player',
          text: this.player.name + ' is stunned !!!',
        })
        // End log push ================
        return this.nextTurn('monster')
      }
    },
    // MONSTER ATTACKS ==========================================

    stab: function(stun) {
      if (!stun) {
        var damage = this.monster.weapon + Math.round(6 * (Math.random() / .99))
        this.player.health -= damage
        // log push ================
        this.logs.push({
          turn: 'monster',
          text: this.monster.name + ' hits with ' + this.monster.skills.skill1 + ' ' + this.player.name + ' for ' + damage + ' damage',
        })
        // End log push ================
        return this.nextTurn('player')
      } else {
        this.monster.stun = false
        // log push ================
        this.logs.push({
          turn: 'monster',
          text: this.monster.name + ' is stunned !!!',
        })
        // End log push ================
        return this.nextTurn('player')
      }
    },
    dirtyBlow: function(stun) {
      if (!stun) {
        var damage = (this.monster.weapon * 1.5) + Math.round(10 * (Math.random() / .99))
        this.player.health -= damage
        this.monster.stun = true
        // log push ================
        this.logs.push({
          turn: 'monster',
          text: this.monster.name + ' hits with ' + this.monster.skills.skill2 + ' ' + this.player.name + ' for ' + damage + ' damage',
        })
        // End log push ================
        return this.nextTurn('player')
      } else {
        this.monster.stun = false
        // log push ================
        this.logs.push({
          turn: 'monster',
          text: this.monster.name + ' is stunned !!!',
        })
        // End log push ================
        return this.nextTurn('player')
      }
    },
    potion: function(stun) {
      if (!stun) {
        var heal = 15 + Math.round(10 * (Math.random() / .99))
        this.monster.health += heal
        // log push ================
        this.logs.push({
          turn: 'monster',
          text: this.monster.name + ' heals himself with ' + this.monster.skills.skill3 + ' for ' + heal + ' hit points',
        })
        // End log push ================
        if (this.monster.health > this.monster.maxHealth) {
          this.monster.health = this.monster.maxHealth
          return this.nextTurn('player')
        } else {
          return this.nextTurn('player')
        }
      } else {
        this.monster.stun = false
        // log push ================
        this.logs.push({
          turn: 'monster',
          text: this.monster.name + ' is stunned !!!',
        })
        // End log push ================
        return this.nextTurn('player')
      }
    },
    nextTurn: function (turn) {
      if (turn === 'monster') {
        var whichAttack = Math.round(2 * (Math.random() / .99))
        if (whichAttack === 0) {
          this.stab(this.monster.stun)
        } else if (whichAttack === 1) {
          this.dirtyBlow(this.monster.stun)
        } else {
          this.potion(this.monster.stun)
        }
      }
    }
  }
});