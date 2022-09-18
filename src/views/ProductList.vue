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
  {{ EmitData }}
  <section class="product">
    <div class="list">
      <Breadcrumb></Breadcrumb>
      <div class="card bg-dark text-white" style="width: 100%">
        <div class="card-header">商品分類</div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            @click.prevent="categoryData('所有商品')"
            :class="{ active2: '所有商品' === nowChoose }"
          >
            所有商品
          </li>

          <li
            class="list-group-item"
            v-for="item in category"
            :key="item"
            @click.prevent="categoryData(item)"
            :class="{ active2: item === nowChoose }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="products">
      <div class="productList">
        <div
          class="card"
          style="width: 17rem"
          v-for="item in showProducts"
          :key="item.id"
        >
          <img
            :src="item.imageUrl"
            class="card-img-top"
            :alt="item.title"
            :title="item.title"
          />
          <div class="card-body">
            <marquee>{{ item.content }}</marquee>
            <h5
              class="card-title"
              :class="{
                'fs-6': item.title.length >= 60,
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
            <div class="footer-button">
              <div class="detail">
                <button
                  class="btn btn-secondary"
                  @click="ProductDetail(item.id)"
                >
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
      <div class="pagination">
        <Pagination2
          :pages="totalPage"
          :nowpage="nowPage"
          :isCategory="isCategory"
          @changepage="updateData"
        ></Pagination2>
      </div>
    </div>
  </section>
  <ToTop></ToTop>
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
import Pagination2 from '@/components/Pagination.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ToTop from '@/components/ToTop.vue'
export default {
  data() {
    return {
      Products: {},
      isLoading: false,
      nowPage: 1,
      maxProductLen: 12,
      showProducts: {},
      totalPage: 1,
      category: [],
      isCategory: false,
      nowChoose: '所有商品',
      EmitData: ''
    }
  },
  props: ['query'],
  setup() {
    return { modules: [Autoplay, Pagination, Navigation, EffectCoverflow] }
  },
  components: {
    ToastMessage,
    Footer,
    Pagination2,
    Breadcrumb,
    ToTop
  },
  provide() {
    return {
      emitter
    }
  },
  methods: {
    getData(page = 1) {
      this.nowPage = page
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.Products = res.data.products // 取得資料
          const StartData =
            this.nowPage * this.maxProductLen - this.maxProductLen + 1

          this.showProducts = this.Products.slice(
            // 取得目前頁面的12筆資料
            StartData - 1,
            this.maxProductLen * this.nowPage
          )
          this.category = this.Products.map((e) => {
            return e.category
          })
          this.category = this.category.filter((e, index, array) => {
            return array.indexOf(e) === index
          })
          this.totalPage = Math.trunc(this.Products.length / 12 + 1)
          this.isLoading = false
        }
      })
    },
    categoryGetData(item, page = 1) {
      this.nowPage = page
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.Products = res.data.products // 取得資料
          const StartData =
            this.nowPage * this.maxProductLen - this.maxProductLen + 1
          this.showProducts = this.Products.slice(
            // 取得目前頁面的12筆資料
            StartData - 1,
            this.maxProductLen * this.nowPage
          )
          this.category = this.Products.map((e) => {
            return e.category
          })
          this.category = this.category.filter((e, index, array) => {
            return array.indexOf(e) === index
          })
          this.totalPage = Math.trunc(this.Products.length / 12 + 1)
          this.categoryData(item)
          this.isLoading = false
        }
      })
    },
    updateData(page) {
      if (!this.isCategory) {
        this.nowPage = page
        const StartData =
          this.nowPage * this.maxProductLen - this.maxProductLen + 1
        this.showProducts = this.Products.slice(
          // 取得目前頁面的12筆資料
          StartData - 1,
          this.maxProductLen * this.nowPage
        )
        this.totalPage = Math.trunc(this.Products.length / 12 + 1)
      } else {
        this.categoryUpdate(page)
      }
    },
    ProductDetail(id) {
      this.$router.push(`/user/product/${id}`)
    },
    categoryData(item) {
      if (item === '所有商品') {
        this.emitter.emit('now-category', item)
        this.cFalse()
        this.updateData(1)
      } else {
        this.emitter.emit('now-category', item)
        this.isCategory = true
        this.nowChoose = item
        this.showProducts = this.Products.filter((e) => {
          return e.category === item
        })
        this.totalPage = Math.trunc(this.showProducts.length / 12 + 1)
      }
    },
    categoryUpdate(page) {
      this.nowPage = page
      const StartData =
        this.nowPage * this.maxProductLen - this.maxProductLen + 1
      this.showProducts = this.showProducts.slice(
        // 取得目前頁面的12筆資料
        StartData - 1,
        this.maxProductLen * this.nowPage
      )
    },
    cFalse() {
      this.nowChoose = '所有商品'
      this.isCategory = false
    }
  },
  inject: ['emitter'],
  created() {
    if (this.query) {
      this.categoryGetData(this.query)
    } else {
      this.getData()
    }
  },
  mounted() {
    this.emitter.on('push-category', (data) => {
      this.categoryData(data)
    })
  }
}
</script>
