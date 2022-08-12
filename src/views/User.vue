<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">用戶端</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body navbar-dark bg-dark">
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <router-link class="nav-link" to="/user/cart">購物車</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <ToastMessage></ToastMessage>
  <router-view />
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessage from '@/components/ToastMessage.vue'
export default {
  components: {
    ToastMessage
  },
  provide() {
    return {
      emitter
    }
  },
  created() {}
}
</script>
