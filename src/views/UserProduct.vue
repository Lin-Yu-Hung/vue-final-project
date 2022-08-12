<template>
  <br />
  <Loading :active="isLoading"></Loading>

  <div class="container">
    <div class="content">
      <router-link class="btn btn-secondary btn-lg" to="/user/cart"
        >回首頁</router-link
      >
      <div class="detail">
        <h1>{{ product.title }}</h1>
        <p style="white-space: pre-wrap">{{ product.content }}</p>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-text">
        <h5>{{ product.unit }}</h5>
        <img :src="`${product.imageUrl}`" class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">{{ product.title }}</h5>
        <p class="card-text" style="white-space: pre-wrap">
          {{ product.description }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false
    }
  },
  created() {
    this.isLoading = true
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.productId}`
    this.$http.get(api).then((res) => {
      if (res.data.success) {
        this.product = res.data.product
        console.log(this.product)
        this.isLoading = false
      }
    })
  }
}
</script>
<style lang="scss">
img {
  object-fit: cover;
}
div.container {
  display: flex;
  justify-content: space-between;
  div.content {
    border: 1px solid black;
    flex: 3 1 300px;
    padding: 1rem;
    div.detail {
      margin-top: 0.5rem;
    }
  }
  div.card {
    flex: 1 1 100px;
    div.card-text {
      position: relative;
      h5 {
        z-index: 10;
        position: absolute;
        right: 0;
        background-color: bisque;
        padding: 1rem;
        border-radius: 2rem;
      }
    }
  }
}
</style>
