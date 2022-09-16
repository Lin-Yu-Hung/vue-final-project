<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          :class="{ disabled: nowpage == 1 }"
          @click.prevent="updatePage(nowpage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="item in pages"
        :key="item"
        @click.prevent="updatePage(item)"
        :class="{ active: item == nowpage }"
      >
        <a class="page-link" href="#">{{ item }}</a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="{ disabled: nowpage == pages }"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(nowpage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages', 'nowpage', 'isCategory'],
  methods: {
    updatePage(page) {
      this.$emit('changepage', page)
    }
  }
}
</script>
