<template>
  <UserNavbar></UserNavbar>
  <ToastMessage></ToastMessage>
  <router-view />
  <Emitter></Emitter>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessage from '@/components/ToastMessage.vue'
import UserNavbar from '@/components/UserNavbar.vue'
import Emitter from '@/components/Emitter.vue'
export default {
  components: {
    ToastMessage,
    UserNavbar,
    Emitter
  },
  provide() {
    return {
      emitter
    }
  },
  created() {}
}
</script>
