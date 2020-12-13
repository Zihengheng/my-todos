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
html * {margin:0; padding:0;}
.body{
    position: absolute;
    margin:0px 0px 0px 0px;
}
.container {
    display: flex;
    margin-top: 0px 0px 0px 0px;
    background-color:#315481;
}
.menu {
    width:30%;
    margin-top:0px;
    background-color: ;
}
.content-container{
    flex:1;
    width:70%;
    background-color: aliceblue;
}
</style>
