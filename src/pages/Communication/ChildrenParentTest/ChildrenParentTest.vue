<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowMoneyFromXM(100)">找小明借钱100</button><br>
    <button @click="borrowMoneyFromXH(150)">找小红借钱150</button><br>
    <button @click="borrowMoneyFromAll(200)">找所有孩子借钱200</button><br>
    
    <br>
    <Son ref="son"/>

    <br>
    <Daughter ref="daughter"/>
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrowMoneyFromXM(money){
      this.$refs.son.money -= money
      this.money += money
    },
    borrowMoneyFromXH(money){
      this.$refs.daughter.money -= money
      this.money += money
    },
    borrowMoneyFromAll(money){
      /* this.$refs.son.money -= money
      this.$refs.daughter.money -= money
      this.money += money * 2 */
      this.$children.forEach(item => item.money -= money)
      this.money += money * 2
    }
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
