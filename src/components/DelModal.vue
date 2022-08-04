<template>
  <div class="modal" tabindex="-1" ref="delModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title">是否刪除 | {{ tempProduct.title }}</h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>商品ID：{{ tempProduct.id }}</p>
          <p>分類：{{ tempProduct.category }}</p>
          <p>價格：{{ tempProduct.price }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('delproduct', tempProduct)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
h5 {
  color: white;
}
</style>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    product() {
      this.tempProduct = this.product
    }
  },
  data() {
    return {
      modal: {},
      tempProduct: {}
    }
  },
  methods: {
    showDelModal() {
      this.modal.show()
    },
    hideDelModal() {
      this.modal.hide()
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.delModal)
  }
}
</script>
