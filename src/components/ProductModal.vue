<template>
  <div
    ref="modal"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span ref="modalTitle">{{ title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  v-model="tempProduct.imageUrl"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadFile"
                />
              </div>
              <img
                class="img-fluid"
                :alt="tempProduct.title"
                :src="tempProduct.imageUrl"
                :title="tempProduct.title"
              />
              <!-- <div class="mb-3">
                <label for="customFile" class="form-label"
                  >上傳更多產品圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  multiple="multiple"
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileImages"
                  @change="uploadImages"
                />
              </div> -->

              <!-- <div>
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="addImage()"
                  :class="{ disabled: childLen == 15 }"
                >
                  {{ childLen == 15 ? '最多新增五筆' : '新增資料' }}
                </button>
              </div>

              <div class="mt-5" ref="images"></div> -->
            </div>

            <div class="col-sm-8">
              <Form v-slot="{ errors, values }" @submit="onSubmit">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                    rules="required"
                    name="標題"
                    :class="{
                      'is-invalid': errors['標題'],
                      'is-valid': !errors['標題'] && values['標題']
                    }"
                  ></Field>
                  <error-message
                    name="標題"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <Field
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                      rules="required"
                      name="分類"
                      :class="{
                        'is-invalid': errors['分類'],
                        'is-valid': !errors['分類'] && values['分類']
                      }"
                    ></Field>
                    <error-message
                      name="分類"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <Field
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                      rules="required"
                      name="單位"
                      :class="{
                        'is-invalid': errors['單位'],
                        'is-valid': !errors['單位'] && values['單位']
                      }"
                    ></Field>
                    <error-message
                      name="單位"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>
                <hr />
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click="$emit('updateProduct', tempProduct)"
                  >
                    <!-- 設定emit事件名為updateproduct並傳出參數為tempproduct -->
                    確認
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixinsModal from '@/mixins/modalMixins'
export default {
  mixins: [mixinsModal],
  inject: ['emitter'],

  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    },
    // eslint-disable-next-line vue/require-prop-type-constructor
    title: ''
  },
  watch: {
    product() {
      this.tempProduct = this.product
    }
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
      childLen: 0
    }
  },
  methods: {
    onSubmit(value, { resetForm }) {
      console.log(value)
    },
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0]
      console.dir(uploadedFile) // console.dir()可以顯示一個對象所有的屬性和方法。
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData).then((res) => {
        console.log(res.data)
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl
        }
      })
    },
    uploadImages() {
      const uploadedFile = this.$refs.fileImages.files
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http
        .post(api, formData)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // // addImage() {
    // //   this.$refs.images.innerHTML += `
    // //   <label for="images">請輸入連結 </label>
    // //   <br />
    // //   <div class="mb-3 input-group mt-3">
    // //   <input
    // //                 type="url"
    // //                 id="images"
    // //                 class="form-control form-control"
    // //                 placeholder="請輸入連結"
    // //               />
    // //               <button type="button" class="btn btn-outline-danger">
    // //                 移除
    // //               </button>
    // //             </div>

    // //   `
    // //   this.childLen = this.$refs.images.childElementCount
    // // }
  },
  mounted() {
    this.emitter.on('init', (data) => {})
  }
}
</script>
