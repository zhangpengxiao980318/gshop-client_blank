<template>
  <div>
    <h2>深入v-model</h2>

    <!-- <input type="text" v-model="msg"> -->
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <span>我喜欢的明星是 {{msg}}</span>
    <br>
    <br>
    <!-- <CustomInput :value="msg" @input="msg = $event"></CustomInput> -->
    <CustomInput v-model="msg"></CustomInput>
    <el-input v-model="msg"></el-input>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data(){
      return{
        msg:'赵丽颖'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
