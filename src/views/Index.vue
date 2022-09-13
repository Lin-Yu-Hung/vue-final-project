<template>
  <Navbar></Navbar>
  <div class="background">
    <div class="context animate__animated animate__fadeInUp">
      <h1>釋放你的電競魂!!</h1>
      <button type="button" class="btn btn-success">
        <a href="">開始選購</a>
      </button>
    </div>
  </div>
  <section class="text" ref="sectionText">
    <h1>全台最多品項任你挑選</h1>
    <hr />
  </section>

  <section class="first animate__animated" ref="sectionFirst">
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '640': { slidesPerView: 2, spaceBetween: 20 },
        '768': {
          slidesPerView: 4,
          spaceBetween: 20
        },
        '2024': { slidesPerView: 5, spaceBetween: 50 }
      }"
      :modules="modules"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="card">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>

  <button @click="test()">test</button>
  <div class="test"></div>

  <!-- <div class="container"></div> -->
</template>
<style lang="scss">
@import '@/assets/index.scss';
</style>
<script>
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper'
import { useToast } from 'vue-toastification'
import toast from '../mixins/ToastMessage'

import Navbar from '../components/Navbar.vue'

export default {
  mixins: [toast],
  components: {
    Navbar
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
    test() {
      this.ToastMessage(2)
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        this.$refs.sectionFirst.classList.add('animate__fadeInUp')
      }
    })
  }
}
</script>
