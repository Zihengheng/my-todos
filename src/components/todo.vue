<template>
  <div class="container page lists-show">
      <nav><!-- nav-bar -->
      <div class="nav-group">
          <a class="nav-item">
              <span class="icon-list-unordered"></span>
          </a>
      </div>
      <h1 class="title-page">
          <span class="title-wrapper">{{todo.title}}</span>
          <!-- title -->
          <span class="count-list">{{todo.count}}</span>
          <!-- count -->
      </h1>
      <div class="nav-group right">
          <div class="options-web">
              <a class="nav-item"><!-- lock icon -->
              <span class="icon-lock" v-if="todo.locked"></span>
              <span class="icon-unlock" v-else></span>
              </a>
              <a class="nav-item"><!-- delete icon -->
              <span class="icon-trash"></span>
              </a>
          </div>
      </div>

      <!-- insert part -->
      <div class="form todo-new input-symbol">
          <!-- insert col for new todo -->
          <input type="text" v-model="text" placeholder="pls enter"
          @keyup.enter="onAdd" :disabled="todo.locked">
          <span class="icon-add"></span>
      </div>
      </nav>
      <!-- end of the navbar -->
      <!-- start of the content part -->
      <div class="content-scrollable list-items">
          <div v-for="item in items">
              <item :item="item"></item>
          </div>
      </div>
  </div>
</template>

<script>
import item from './item.vue';
export default {
  components: { item },
    data(){
        return{
            todo:{
                title:'Monday',
                count:12,
                locked:false
            },
            items:[
                {checked:false,text:'new day yeah',isDelete:false},
                {checked:false,text:'new day yeah',isDelete:false},
                {checked:false,text:'new day yeah',isDelete:false},
            ],
            text:'' //new
        };
    },
    methods:{
        onAdd(){
            this.items.push({
        checked: false, text: this.text, isDelete: false
      });
      this.text = ''; //default value
        }
    },
}
</script>

<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>