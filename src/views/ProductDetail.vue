<template>
  <Loading :active="isLoading"></Loading>
  <section class="product">
    <div class="image">
      <Breadcrumb></Breadcrumb>
      <img
        :src="product.imageUrl"
        :alt="product.title"
        :title="product.title"
      />
    </div>
    <div class="product-detail">
      <div class="text">
        <h2>{{ product.title }}</h2>
        <hr />
        <p>{{ product.description }}</p>
      </div>
      <div class="card-btn">
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">加入購物車</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
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
  },
  components: { Breadcrumb }
}
</script>
<style lang="scss">
* {
  white-space: pre-line;
}

section.product {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  height: min-content;
  .image {
    flex: 1 1 300px;
    border-right: 3px solid black;
    padding-right: 3rem;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .product-detail {
    flex: 2 1 300px;
    padding: 0rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
      font-size: 1.25rem;
    }
    .card-btn{
      padding: 1rem 0rem;
      button{
        padding: 1rem;
        font-size: 1.15rem;
        font-weight: bolder;
      }
    }
  }
}
</style>
