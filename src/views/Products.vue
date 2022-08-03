<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-fluid">
    <div class="text-end">
      <br />
      <button type="button" class="btn btn-primary" @click="openModal">
        新增商品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in products"
          :key="item.id"
          :class="{ active: index == 0 }"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td>
            <span
              :class="{
                'text-success': item.is_enabled == true,
                'text-danger': item.is_enabled == false
              }"
              >{{ item.is_enabled ? '啟用' : '未啟用' }}
            </span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm">編輯</button>
              <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal
      ref="ProductModal"
      @update-product="updateProduct"
    ></ProductModal>
  </div>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {}
    }
  },
  components: {
    ProductModal
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api).then((res) => {
        console.log(res)
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    },
    openModal() {
      this.$refs.ProductModal.showModal()
    },
    updateProduct(item) {
      // this.tempProduct = item
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      this.$http.post(api, { data: item }).then((res) => {
        console.log(res.data.success)
        if (res.data.success) {
          console.log('資料新增成功！')
          this.$refs.ProductModal.hideModal()
          this.getProducts()
        }
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
