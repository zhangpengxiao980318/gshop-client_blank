<template>
  <div>
    小明的爸爸现在有{{money}}元
    
    <h2>不使用sync修改符</h2>
    <Child :money="money" @update:money="money = $event"></Child>
    <h2>使用sync修改符</h2>
    <Child :money.sync="money"></Child>
    <h2>使用v-model修改符</h2>
    <Child2 v-model="money"></Child2>
    <hr>
    <el-button type="primary" icon="el-icon-edit" size="mini" @click="test">单击</el-button>
    <el-button type="primary" icon="el-icon-edit" size="mini" @dblclick.native="test">双击</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    data(){
      return{
        money:1000
      }
    },
    components: {
      Child,
      Child2
    },
    methods:{
      test(){
        console.log('测试');
      }
    }
  }
</script>
