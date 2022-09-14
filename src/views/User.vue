<template>
  <UserNavbar></UserNavbar>
  <ToastMessage></ToastMessage>
  <router-view />
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessage from '@/components/ToastMessage.vue'
import UserNavbar from '@/components/UserNavbar.vue'
export default {
  components: {
    ToastMessage,
    UserNavbar
  },
  provide() {
    return {
      emitter
    }
  },
  created() {}
}
</script>
