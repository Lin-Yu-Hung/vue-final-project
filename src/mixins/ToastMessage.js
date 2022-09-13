import { useToast } from 'vue-toastification'
export default {
  setup() {
    const toast = useToast()
    return {
      toast
    }
  },
  methods: {
    ToastMessage(num) {
      if (num === 1) {
        this.toast.success('加入成功', {
          position: 'top-right',
          timeout: 2500,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 2,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: true,
          rtl: false
        })
      } else {
        this.toast.error('錯誤', {
          position: 'top-right',
          timeout: 2500,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 2,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: true,
          rtl: false
        })
      }
    }
  }
}
