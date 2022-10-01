<template>
  <Loading :active="isLoading"></Loading>
  <div class="background">
    <div class="context animate__animated animate__fadeInUp">
      <h1>釋放你的電競魂!!</h1>
      <router-link to="/user/productlist"
        ><button type="button" class="btn btn-primary">開始選購</button>
      </router-link>
    </div>
  </div>
  <section class="text" ref="sectionText">
    <h1>熱門商品</h1>
    <hr />
  </section>

  <section class="first animate__animated" ref="sectionFirst">
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
      <swiper-slide v-for="item in showProducts" :key="item.id">
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
              :class="{
                'fs-6': item.title.length >= 34,
                'fs-5': item.title.length >= 25,
                'fs-4': item.title.length < 15
              }"
              style="color: black"
            >
              {{ item.title }}
            </h5>
            <div class="card-text">
              <small class="origin-price">原價{{ item.origin_price }}</small>
              <p class="price">優惠價${{ item.price }}</p>
            </div>
            <button
              class="btn btn-primary"
              @click.prevent="ProductDetail(item.id)"
            >
              前往選購
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>

  <button @click="test()">test</button>
  <section class="second">
    <div class="text">
      <h1>提供服務</h1>
    </div>
    <hr />
    <br />
    <div class="content">
      <div class="image3"></div>
      <div class="illustrate">
        <h2>客製化組裝服務</h2>
        <hr />
        <p>
          根據您的需求為您規劃最適合您的電腦<br />
          讓您不用再為了組裝而煩惱!
        </p>
      </div>
    </div>
    <div class="content flex-row-reverse">
      <div class="image2"></div>
      <div class="illustrate">
        <h2>專業維修服務</h2>
        <hr />
        <p>
          我們重視每一位顧客的售後服務<br />
          凡是於本店購買的商品我們都將提供專業的維修服務。
        </p>
      </div>
    </div>
    <div class="content">
      <div class="image"></div>
      <div class="illustrate">
        <h2>配送服務</h2>
        <hr />
        <p>
          提供最快速且方便的配送服務<br />
          讓您不再需要為了買東西而出遠門<br />
          在家就能輕鬆購物
        </p>
      </div>
    </div>
  </section>

  <Footer></Footer>
  <div class="test"></div>
</template>
<style lang="scss">
@import '@/assets/index.scss';
</style>
<script>
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper'
import { useToast } from 'vue-toastification'
import toast from '../mixins/ToastMessage'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      showProducts: {},
      isLoading: false,
      category: []
    }
  },
  mixins: [toast],
  components: {
    Footer
  },
  setup() {
    // Get toast interface
    const toast = useToast()
    return {
      modules: [Autoplay, Pagination, Navigation, EffectCoverflow],
      toast
    }
  },
  methods: {
    go(item) {
      this.$router.push(`/user/productlist?query=${item}`)
    },
    test() {
      this.ToastMessage(1, '加入成功')
    },
    ProductDetail(id) {
      this.$router.push(`/user/product/${id}`)
    },
    getData() {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          // this.showProducts = res.data.products.slice(0, 10)
          this.showProducts = res.data.products
          this.category = this.showProducts.map((e) => {
            return e.category
          })
          this.category = this.category.filter((e, index, array) => {
            return array.indexOf(e) === index
          })
        }
      })
    }
  },
  mounted() {
    if (window.pageYOffset < 50) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
          this.$refs.sectionFirst.classList.add('animate__fadeInUp')
        }
      })
    }
  },

  created() {
    this.getData()
  }
}
</script>
