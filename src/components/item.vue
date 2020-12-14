<template>
  <div class="list-item editingClass editing">
      <!-- item container -->
      <label class="checkbox">
          <input type="checkbox" v-model="item.checked">
          <span class="checkbox-custom"></span>
      </label>
      <!-- 绑定item.text -->
      <input type="text" v-model="item.text" 
      placeholder="write something..">
      <!-- delete icon -->
      <a class="delete-item">
          <span class="icon-trash"></span>
      </a>   
  </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style lang="less">
@import '../common/style/list-items.less';
</style>