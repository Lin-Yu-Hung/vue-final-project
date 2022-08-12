<template>
  <carousel>
    <slide> Slide 1 Content </slide>
    <slide> Slide 2 Content </slide>
  </carousel>

  <Loading :active="isLoading"></Loading>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">商品圖片</th>
          <th>商品分類</th>
          <th>商品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="200">加入購物車</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            <img
              style="height: 100px"
              :src="`${item.imageUrl}`"
              :alt="`${item.title}`"
              :title="`${item.title}`"
            />
          </td>

          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-right">{{ $filters.currency(item.price) }}</td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="getDetails(item.id)"
              >
                查看更多
              </button>
              <button class="btn btn-outline-danger btn-sm">加入購物車</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      products: {},
      isLoading: false
    }
  },
  methods: {
    getProduct() {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          console.log(res)
          this.products = res.data.products
          console.log(this.products)
        }
      })
    },
    getDetails(id) {
      this.$router.push(`/user/product/${id}`)
    }
  },
  created() {
    this.getProduct()
  }
}
</script>
