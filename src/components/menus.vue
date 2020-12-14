<template>
  <div class="list-todos">  <!--菜单容器-->
      <a @clcik="goList(item.id)" class="list-todo activeListClass list"
      :class="{'active': item.id === todoId}" 
      v-for="item in items"> <!--单个菜单容器-->
        <span class="icon-lock" v-show="item.locked"></span>  
        <!--锁的图标-->
        <span class="count-list" v-show="item.count > 0">
            {{item.count}}</span><!--数字-->
        {{item.title}} <!--菜单内容-->
      </a><!--单个菜单容器-->
    <a class=" link-list-new" @click="addTodoList"> <!--新增菜单-->
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div><!--菜单容器-->
</template>
<script>
  import { getTodoList, addTodo } from '../api/api'; //
  export default {
      data(){
          return {
              items:[],
              todoId:'',
          };
      },
      created(){ // 调用请求菜单列表数据的接口
          getTodoList({}).then(res => {
          const TODOS = res.data.todos; 
          this.items = TODOS; 
          this.todoId = TODOS[0].id; 
        });
        },
      methods:{
        goList(id){//click menu
        this.todoId = id;
        },
         addTodoList() { //add to do list
          addTodo({}).then(data => {
          getTodoList({}).then(res => {
          const TODOS = res.data.todos;
          this.todoId = TODOS[TODOS.length - 1].id;
          this.items = TODOS;
        });
      });
    }
      }
  };
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>