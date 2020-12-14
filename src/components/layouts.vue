<template>
  <section class="container" > <!--最外层容器-->
    <section class="menu"> <!--左边的容器-->
     <menus></menus> <!-- 引用menu组件-->
    </section>
    <section class="content-container"><!--右边的容器-->
    </section>
  </section>
</template>
<script>
    import menus from './menus';
    export  default {
        components:{
            menus
        }
    };
</script>
<style>
.body{
    position: absolute;
}
.container {
    display: flex;
    margin-top: 0;
    margin-bottom:0;
    background-color:#315481;
    height:700px;
}
.menu {
    width:30%;
    background-color:#99CCCC;
    opacity:0.5;
    margin-bottom:0;
    height:100%;
}
.content-container{
    width:70%;
    margin-bottom: 0;
    background-color:white;
}
</style>
