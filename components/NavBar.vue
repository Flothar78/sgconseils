<template>
  <div class="navbar-container">
    <img
      src="~/assets/img/logo_sg_conseils.png"
      alt="logo sg conseils format png"
    />
    <div class="menu-title">MENU</div>
  </div>
</template>

<script setup></script>

<style scoped>
.navbar-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(0.25turn, #b12434, #858384);
  height: 10vh;
  width: 100%;
  z-index:30;
}
.menu-title {
  color: white;
  margin: 2rem 1.83rem 0 0;
  font-size: 1.3rem;
}
</style>
