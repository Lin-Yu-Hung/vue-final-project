<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Offcanvas navbar</a>
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
          <ul class="navbar-nav justify-content-end flex-grow-1">
            <li class="nav-item">
              <button type="button" class="btn btn-success me-3">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#"
                  @click.prevent=""
                  >Home</a
                >
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-danger">
                <a class="nav-link" href="#" @click.prevent="logout">登出</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
nav {
  div.container-fluid {
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
