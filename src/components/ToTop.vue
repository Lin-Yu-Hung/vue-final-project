<template>
  <img
    src="@/assets/up-arrow.png"
    alt=""
    @click="toTop"
    class="toTop"
    ref="toTop"
  />
</template>
<script>
export default {
  methods: {
    toTop() {
      console.log(window.document.documentElement.scrollTop)
      window.document.documentElement.scrollTop = 0
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        this.$refs.toTop.style.display = 'inline'
      } else {
        this.$refs.toTop.style.display = 'none'
      }
    })
  }
}
</script>
