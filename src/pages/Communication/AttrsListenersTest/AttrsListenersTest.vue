<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <HintButton type="success" icon="el-icon-plus" size="mini"  title="添加" @click="add"></HintButton>
    <HintButton type="warning" icon="el-icon-edit" size="mini"  title="修改" @click="edit"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from '@/pages/Communication/AttrsListenersTest/HintButton'
  export default {
    name: 'AttrsListenersTest',
    components:{
      HintButton
    },
    methods: {
      add(){
        console.log('增加');
      },
      edit(){
        console.log('修改');
      }
    },
  }
</script>
