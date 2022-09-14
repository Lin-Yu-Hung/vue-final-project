<!-- eslint-disable vue/no-parsing-error -->
<template>
  <Loading :active="isLoading"></Loading>
  <ToastMessage></ToastMessage>
  <router-view />

  <section class="header">
    <div class="header">
      <swiper
        :spaceBetween="30"
        :modules="modules"
        class="mySwiper"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
      >
        <swiper-slide
          ><img
            src="https://dlcdnwebimgs.asus.com/gain/F3ADB159-24F6-4C9C-941A-BB998C7F5682/fwebp"
            alt=""
        /></swiper-slide>

        <swiper-slide>
          <a href="https://www.asus.com/tw/events/infoM/3472/"
            ><img
              src="https://www.asus.com/events/eventes/epic/3472_1900.jpg"
              alt="" /></a
        ></swiper-slide>

        <swiper-slide
          ><img
            src="https://dlcdnwebimgs.asus.com/gain/FA0E1264-D4F9-40F6-9861-CD60D40C24CF/fwebp"
            alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="product">
    <div class="list">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
      <div class="card" style="width: 100%">
        <div class="card-header">Featured</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
    <div class="productList">
      <div
        class="card"
        style="width: 17rem"
        v-for="item in Products"
        :key="item.id"
      >
        <img :src="item.imageUrl" class="card-img-top" alt="..." />
        <div class="card-body">
          <marquee>{{ item.content }}</marquee>
          <h5 class="card-title">{{ item.title }}</h5>
          <div class="card-text">
            <small class="origin-price">原價{{ item.origin_price }}</small>
            <p class="price">優惠價${{ item.price }}</p>
          </div>
          <div class="footer-button">
            <div class="detail">
              <button class="btn btn-secondary" @click="ProductDetail(item.id)">
                詳細資訊
              </button>
            </div>
            <div class="add-cart">
              <button class="btn btn-primary">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<style lang="scss">
@import '@/assets/productList.scss';
</style>
<script>
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper'
import emitter from '@/methods/emitter'
import ToastMessage from '@/components/ToastMessage.vue'
import Footer from '@/components/Footer.vue'
export default {
  data() {
    return {
      Products: {},
      isLoading: false
    }
  },
  setup() {
    return { modules: [Autoplay, Pagination, Navigation, EffectCoverflow] }
  },
  components: {
    ToastMessage,
    Footer
  },
  provide() {
    return {
      emitter
    }
  },
  methods: {
    getData() {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.Products = res.data.products
          this.isLoading = false
          console.log(this.Products)
        }
      })
    },
    ProductDetail(id) {
      this.$router.push(`/user/product/${id}`)
    }
  },
  created() {
    this.getData()
  }
}
</script>
