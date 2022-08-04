<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-success">
          <h5 class="modal-title">訊息</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>操作成功！</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixinsModal from '@/mixins/modalMixins'
export default {
  mixins: [mixinsModal]
}
</script>
