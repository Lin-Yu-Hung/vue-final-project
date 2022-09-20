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
          <div class="price text-end fs-2">
            <small>原價{{ product.origin_price }}</small>
            優惠價${{ product.price }}
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <section class="Similar-products">
    <h1 class="text-center">您可能有興趣</h1>
    <hr />
    <swiper

      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        '640': { slidesPerView: 3, spaceBetween: 20 },
        '768': {
          slidesPerView: 4,
          spaceBetween: 20
        },
        '1900': { slidesPerView: 5, spaceBetween: 20 },
        '2024': { slidesPerView: 6, spaceBetween: 50 }
      }"
      :modules="modules"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide v-for="item in SimilarProducts" :key="item.id">
        <div class="card">
          <img
            :src="item.imageUrl"
            class="card-img-top"
            :alt="item.title"
            :title="item.title"
          />
          <div class="card-body d-grid gap-2">
            <h5
              class="card-title"
              style="min-height: 60px"
              :class="{
                'fs-6': item.title.length >= 40,
                'fs-5': item.title.length >= 35,
                'fs-4': item.title.length < 15
              }"
            >
              {{ item.title }}
            </h5>
            <div class="card-text">
              <small class="origin-price">原價{{ item.origin_price }}</small>
              <p class="price">優惠價${{ item.price }}</p>
            </div>
            <button
              class="btn btn-primary"
              @click.prevent="ProductDetail(item)"
            >
              前往選購
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <Footer></Footer>
</template>
<style lang="scss">
@import '@/assets/productDetail.scss';
</style>

<script>
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
import emitter from '@/methods/emitter'

export default {
  data() {
    return {
      product: {},
      isLoading: false,
      SimilarProducts: {},
      products: {}
    }
  },
  provide() {
    return { emitter }
  },
  setup() {
    // Get toast interface
    return {
      modules: [Autoplay, Pagination, Navigation, EffectCoverflow]
    }
  },
  inject: ['emitter'],
  components: { Breadcrumb, Footer },

  created() {
    this.isLoading = true
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.productId}`
    this.$http.get(api).then((res) => {
      if (res.data.success) {
        this.product = res.data.product
        console.log(this.product)
        this.getAllData()
        this.isLoading = false
      }
    })
  },
  methods: {
    getAllData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products // 取得資料
          this.SimilarProducts = this.products.filter((e) => {
            return (
              e.category === this.product.category &&
              e.title !== this.product.title
            )
          })
        }
      })
    },
    ProductDetail(item) {
      this.$router.push(`/user/product/${item.id}`)
      this.product = item
      this.SimilarProducts = this.products.filter((e) => {
        return (
          e.category === this.product.category && e.title !== this.product.title
        )
      })

      window.document.body.scrollTop = 0
      window.document.documentElement.scrollTop = 0
    }
  },
  mounted() {
  }
}
</script>
