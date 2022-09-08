<template>
  <div class="container">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :autoplay="{ delay: 1500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="https://cs-f.ecimg.tw/items/DRAL2AA900A5PLF/000001_1629281555.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
<style lang="scss">
.container {
  height: 50vh;
  img {
    width: 500px;
    height: 400px;
    object-fit: cover;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>
