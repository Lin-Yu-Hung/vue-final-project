<template>
  <Loading :active="isLoading"></Loading>
  <section class="productDetail">
    <div class="detail-breadcrumb">
      <Breadcrumb :title="product.title"></Breadcrumb>
    </div>

    <div class="detail">
      <div class="image">
        <img
          :src="product.imageUrl"
          :alt="product.title"
          :title="product.title"
        />
      </div>
      <div class="product-detail">
        <div class="text">
          <h2>
            {{ product.title }}
          </h2>
          <hr />
          <p>{{ product.description }}</p>
        </div>
        <div class="card-btn">
          <div class="price text-end fs-1">優惠價${{ product.price }}</div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<style lang="scss">
@import '@/assets/productDetail.scss';
</style>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
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
  components: { Breadcrumb, Footer }
}
</script>
