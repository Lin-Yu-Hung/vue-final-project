<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/user/index">首頁</router-link>
      </li>
      <li class="breadcrumb-item" style="width: 105px">
        <router-link to="/user/productlist">商品列表</router-link>
      </li>
      <li class="breadcrumb-item" v-if="title">
        <a class="active">{{ title }}</a>
      </li>
    </ol>
  </nav>
</template>
<style lang="scss">
.active {
  color: black;
  &:hover {
    color: black;
  }
}
nav {
  ol {
    li {
      user-select: none;

      a {
        text-decoration: none;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
<script>
export default {
  props: ['title']
}
</script>
