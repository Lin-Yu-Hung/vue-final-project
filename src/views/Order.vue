<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="table-responsive">
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">訂單日期</th>
            <th>Email</th>
            <th width="200">購買款項</th>
            <th width="120">應付金額</th>
            <th width="120">是否付款</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022/08/08</td>
            <td>zxcv96197@gmail.com</td>
            <td>...</td>
            <td>{{ $filters.currency(2000) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  value=""
                  v-model="checkPay"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckChecked"
                  :class="{
                    'text-success': checkPay,
                    'text-danger': !checkPay
                  }"
                  >{{ checkPay ? '已付款' : '未付款' }}</label
                >
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal()"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="DelModal()"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
          <!-- <tr v-for="item in orders" :key="item.id">
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
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
  <OrderModal ref="orderModal"></OrderModal>
  <DelOrderModal ref="DelOrderModal"></DelOrderModal>
</template>
<script>
import OrderModal from '../components/OrderModal.vue'
import DelOrderModal from '../components/DelModal.vue'
export default {
  data() {
    return {
      orders: '',
      isLoading: false,
      checkPay: false
    }
  },
  components: {
    OrderModal,
    DelOrderModal
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          console.log(res)
          this.order = res.data.orders
        }
      })
    },
    openModal() {
      this.$refs.orderModal.showModal()
    },
    DelModal() {
      this.$refs.DelOrderModal.showDelModal()
    }
  },
  created() {
    // this.getOrder()
  }
}
</script>
