<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">首頁</router-link>
      </li>
      <li class="breadcrumb-item" style="width: 150px">
        <router-link class="nav-link" to="/user/productlist"
          >商品列表</router-link
        >
      </li>
    </ol>
  </nav>
</template>
<style lang="scss">
    nav{
        ol{
            li{
                a{
                    text-decoration: none;
                }
            }
        }
    }
</style>
<script>
export default {}
</script>
