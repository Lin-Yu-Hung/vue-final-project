<template>
  <nav
    class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top"
    style="box-shadow: 0 8px 6px -6px rgb(42, 41, 41)"
    ref="navbar"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/logo3.png"
          alt=""
          class="d-inline-block align-text-top"
        />
      </a>
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
        <div class="offcanvas-header navbar-dark bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-11">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  <a class="navbar-brand" href="#">
                    <img
                      src="@/assets/logo3.png"
                      alt=""
                      class="d-inline-block align-text-top"
                    />
                  </a>
                </h5>
              </div>
              <div class="col-1">
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div class="offcanvas-body navbar-dark bg-dark">
          <ul class="navbar-nav flex-grow-1 justify-content-end">
            <li class="nav-item">
              <router-link class="nav-link" to="/user/index">首頁</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                ref="dropdown"
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click.prevent="toggle()"
                :class="{ active: $route.path == '/user/productlist' }"
              >
                商品列表
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdownMenuLink"
                data-bs-auto-close="true"
              >
                <li
                  class="dropdown-item"
                  :class="{
                    active3:
                      '所有商品' == nowChoose &&
                      $route.path == '/user/productlist'
                  }"
                  @click.prevent="categoryPage('所有商品')"
                >
                  <a href="#">所有商品</a>
                </li>

                <li
                  v-for="item in category"
                  :key="item"
                  class="dropdown-item"
                  :class="{
                    active3:
                      item == nowChoose && $route.path == '/user/productlist'
                  }"
                  @click.prevent="categoryPage(item)"
                >
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/products/"
                >後台管理</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"
                >登入</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="hidden" ref="hidden"></div>
</template>
<style lang="scss">
a {
  user-select: none;
}

nav {
  z-index: 10;
  li.dropdown-item {
    cursor: pointer;
    &:active {
      background-color: rgb(82 87 92);
    }

    a {
      color: white;
      &:hover {
        color: white;
      }

      text-decoration: none;
    }
  }
  ul {
    li {
      padding-top: 0.5rem;
      font-size: 1.5rem;
    }
  }
  div.container-fluid {
    padding: 0rem 10rem;
    a {
      img {
        width: 11.5vw;
        height: 4.25vw;
      }
    }

    button {
      padding: 0.3rem 1rem;
      &:hover {
        a {
          color: white;
        }
      }
    }
  }
}
@media screen and (max-width: 1660px) {
}
@media screen and (max-width: 990px) {
  nav {
    div.container-fluid {
      padding: 0 3rem;
      a {
        margin-left: 30px;
      }
      button.btn {
        margin-top: 0.5rem;
      }
      .offcanvas-header {
        color: white;
        justify-content: center;
        border-bottom: 3px solid white;
        .col-1 {
          padding: 0;

          display: flex;
          align-items: center;
        }
        .col-11 {
          padding: 0;
          display: flex;
          justify-content: center;
          h5 {
            font-size: 1.75rem;
          }
        }
      }
    }
  }
}
</style>
<script>
import emitter from '@/methods/emitter'
import Dropdown from 'bootstrap/js/dist/dropdown'
export default {
  data() {
    return {
      showProducts: {},
      category: [],
      nowChoose: '',
      dropdown: {}
    }
  },
  provide() {
    return { emitter }
  },
  inject: ['emitter'],
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    },
    categoryPage(item) {
      this.nowChoose = item
      this.$router.push(`/user/productlist?query=${item}`)
      this.emitter.emit('push-category', item)
      this.dropdown.hide()
    },
    toggle() {
      this.dropdown.toggle()
    },

    getData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.showProducts = res.data.products
          this.category = this.showProducts.map((e) => {
            return e.category
          })
          this.category = this.category.filter((e, index, array) => {
            return array.indexOf(e) === index
          })
        }
      })
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    this.emitter.on('now-category', (data) => {
      this.nowChoose = data
    })
    this.dropdown = new Dropdown(this.$refs.dropdown)
    this.$refs.hidden.style.height = `${this.$refs.navbar.offsetHeight - 1}px`
    window.onresize = () => {
      this.$refs.hidden.style.height = `${this.$refs.navbar.offsetHeight - 1}px`
    }
  }
}
</script>
