<template>
  <div>
    <header class="my-header" v-bind:class="{ 'add-h-background' : isActive }">
      <div class="sm-header">
        <h2>BarberShop</h2>
        <button class="erebtn" @click="menuBtn">&#9776;</button>
      </div>
      <nav class="nav-menu" ref="navMenu">
        <ul>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Book Appointment</a>
          </li>
          <li>
            <a href="#">Plan and Pricing</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    activate() {
      this.isActive = false;
    },
    menuBtn() {
      const navMenu = this.$refs.navMenu;
      if (!navMenu.classList.contains("showNav")) {
        navMenu.style.height = `${navMenu.scrollHeight}px`;
      } else {
        navMenu.style.height = "0px";
      }
      navMenu.classList.toggle("showNav");
    },

    handleScroll: _.debounce((e) => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        e.isActive = true;
      } else {
        e.isActive = false;
      }
    }, 200),

    scrollHandler() {
      const self = this;
      this.handleScroll(self);
    },
  },
  mounted() {
    this.activate();
  },
  created() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style lang="scss" scoped>
$primary: white;
$secondary: black;
.my-header {
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  /* position: sticky;
    position: -webkit-sticky; */
  position: fixed;
  top: 0;
  z-index: 99;
  transition: all 0.5s;
  overflow: hidden;
  color: $primary;
  .sm-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    h2 {
      font-family: fontA;
      font-style: normal;
      font-weight: bold;
      font-size: 1.8rem;
    }
    .erebtn {
      border: none;
      background: none;
      font-size: 2rem;
      display: block;
      outline: none;
      color: $primary;
    }
  }
  .nav-menu {
    /*  background: #E5E5E5; */
    height: 0px;
    transform: translateY(-30%);
    transition: all 0.5s;
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      li {
        padding: 15px 20px;
        a {
          text-decoration: none;
          padding: 10px;
          border-radius: 5px;
          color: $primary;
          cursor: pointer;
          font-family: fontB;
          font-style: normal;
          font-weight: normal;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
      }
    }
  }
  .showNav {
    transform: translateY(0%);
    animation: showNav 0.5s ease-in-out;
  }

  @keyframes showNav {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
}
.add-h-background {
  background: white !important;
  color: $secondary !important;
  .sm-header {
    .erebtn {
      color: $secondary;
    }
  }
  a {
    color: $secondary !important;
  }
}
// Small tablets and large smartphones (landscape view)
$screen-sm-min: 576px;

// Small tablets (portrait view)
$screen-md-min: 768px;

// Tablets and small desktops
$screen-lg-min: 992px;

// Large tablets and desktops
$screen-xl-min: 1200px;

@media screen and (min-width: $screen-md-min) {
  //do Smth
  .my-header {
    grid-template-columns: 30% 70%;
    .sm-header {
      justify-content: center;
      .erebtn {
        display: none;
      }
    }
    .nav-menu {
      height: initial;
      transform: translateY(0%);
      display: flex;
      align-items: center;
      ul {
        width: 100%;
        padding: 0px;
        margin: 0px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        li {
          padding: 0px;
        }
      }
    }
  }
}
</style>