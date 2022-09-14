<template>
  <nav
    class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top"
    style="box-shadow: 0 8px 6px -6px rgb(42, 41, 41)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">UserNavbar</a>
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
                  <router-link class="nav-link" to="/">UserNavbar</router-link>
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
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user/productlist"
                >商品列表</router-link
              >
            </li>
          </ul>
          <!-- <a href="./cart_login.html"
            ><button
              style="margin-right: 1rem"
              type="button"
              class="btn btn-success btn-mr"
            >
              登入
            </button></a
          >
          <a href="./cart_reg.html"
            ><button type="button" class="btn btn-info btn-mr">註冊</button></a
          > -->
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
nav {
  z-index: 10;
  ul {
    li {
      font-size: 1.25rem;
    }
  }
  div.container-fluid {
    padding: 0rem 7.5rem;
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
@media screen and (max-width: 990px) {
  nav {
    div.container-fluid {
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
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
