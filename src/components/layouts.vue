<template>
  <section class="container" > <!--最外层容器-->
    <section class="menu"> <!--左边的容器-->
    <h2>Hello menu</h2>
    </section>
    <section class="content-container"><!--右边的容器-->
    </section>
  </section>
</template>
<script>
  export  default {};
</script>
<style>
.body{
    position: absolute;
    margin-top:0;
    padding:0;
    margin-bottom:0;
}
.container {
    display: flex;
    margin-top: 0px 0px 0px 0px;
    background-color:#315481;
}
.menu {
    width:30%;
    margin-top:0px;
    margin-bottom:0;
    margin-left:0;
    background-color:#99CCCC;
    opacity:0.5;
}
.content-container{
    flex:1;
    width:70%;
    margin-bottom: 0;
    background-color:white;
}
</style>
