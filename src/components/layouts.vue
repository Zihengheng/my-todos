<template>
  <section class="container" > 
    <section class="menu"> 
    <!-- 组件menus -->
    <menus></menus>   
    </section>
    <section class="content-container">
        <!-- todo part -->
        <todo></todo>
    </section>
  </section>
</template>
<script>  
  import menus from './menus'; //导入组件
  import todo from './todo'; //import todo
  export  default {
      components:{
          menus,
          todo
      }
  };
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>
