<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="text-end">
      <br />
      <button type="button" class="btn btn-primary" @click="openModal(true)">
        新增商品
      </button>
    </div>
    <div class="table-responsive">
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
            <td class="text-right">
              {{ $filters.currency(item.origin_price) }}
            </td>
            <td class="text-right">{{ $filters.currency(item.price) }}</td>
            <td>
              <span v-if="item.is_enabled == true" class="text-success"
                >啟用
              </span>
              <span v-else class="text-danger">未啟用 </span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, item)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelProduct(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ProductModal
      ref="ProductModal"
      @update-product="updateProduct"
      :product="tempProduct"
      :title="modalTitle"
    ></ProductModal>
    <DelProductModal
      ref="DelProductModal"
      :product="tempProduct"
      @delproduct="DelProduct"
    ></DelProductModal>
    <Success ref="Success"></Success>
    <Pagination
      :pages="pagination.total_pages"
      :nowpage="nowPage"
      @changepage="getProducts"
    ></Pagination>

    <!-- 上方程式碼的用意為如果需要修改產品就會透過props的方式將資料傳給modal將資料直接帶入表單中 -->
  </div>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
import DelProductModal from '../components/DelModal.vue'
import Success from '../components/Success.vue'
import Pagination from '../components/Pagination.vue'
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false, // 用於判斷目前點擊的按鈕是不是新增按鈕
      modalTitle: '',
      isLoading: false,
      nowPage: 1
    }
  },
  components: {
    ProductModal,
    DelProductModal,
    Success,
    Pagination
  },
  methods: {
    getProducts(page = 1) {
      this.nowPage = page
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res)
          this.isLoading = false
          this.products = res.data.products
          this.pagination = res.data.pagination
        } else {
          this.isLoading = false
        }
      })
    },
    openModal(isNew, item) {
      this.isNew = isNew
      if (isNew) {
        this.modalTitle = '新增資料'
        this.tempProduct = {}
        this.emitter.emit('init', 0)
      } else {
        this.modalTitle = '編輯資料'
        this.tempProduct = { ...item }
        this.emitter.emit('init', 0)
      }
      this.$refs.ProductModal.showModal()
    },
    updateProduct(item) {
      // this.tempProduct = item
      this.isLoading = true
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 如果現在是編輯狀態的話
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: item }).then((res) => {
        console.log(res.data.success)
        if (res.data.success) {
          this.$refs.ProductModal.hideModal()
          this.getProducts()
          // this.$refs.Success.showModal()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '操作成功！'
          })
        } else {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '操作失敗！',
            content: res.data.message.join(' ')
          })
        }
      })
    },
    openDelProduct(item) {
      this.tempProduct = {}
      this.tempProduct = item
      this.$refs.DelProductModal.showDelModal()
    },
    DelProduct(item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$refs.DelProductModal.hideDelModal()
          this.getProducts()
          // this.$refs.Success.showModal()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '刪除成功！'
          })
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '刪除失敗！'
          })
        }
      })
    }
  },
  inject: ['emitter'],
  created() {
    this.getProducts()
  }
}
</script>
