<template>
  <div>
    <section
      class="container-fluid vh-100 brand"
      style="background: url('img/barbershop-d.jpg') no-repeat top center; background-size: cover;"
    >
      <!-- <b-img src="img/barbershop-f.jpg" fluid alt="Responsive image">
      </b-img>-->
    </section>
  </div>
</template>

<script>
export default {
  name: "Brand",
};
</script>

<style lang="scss" scoped>
.brand {
  /* &:before {
    content: "";
    position: absolute;
    bottom: -90px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #000 5%, transparent);
    transition: 0.5s;
    z-index: 1;
  } */
  &:after {
    content: "";
    position: absolute;
    top: -90px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #000 1%, transparent);
    transition: 0.5s;
    z-index: 1;
  }
}
</style>