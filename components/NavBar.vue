<template>
  <div class="navbar-container">
    <img
      src="~/assets/img/logo_sg_conseils.png"
      alt="logo sg conseils format png"
    />
    <button @click="menuListSlideIn()" class="menu-button">MENU</button>
    <ul class="menu-list" :class="{ active: isActive }">
      <li>Accueil</li>
      <li>Nos Métiers</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isActive = ref(false);
const menuListSlideIn = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.navbar-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0.25turn, #b12434, #858384);
  height: 10vh;
  width: 100%;
  z-index: 30;
  img {
    width: 78px;
    height: 100%;
  }
  button {
    background: transparent;
  }
}
.menu-button {
  color: white;
  font-size: 1.3rem;
}
.menu-list {
  height: 10vh;
  list-style: none;
  position: fixed;
  right: -12rem;
  margin-top: 25vh;
  padding: 1.5rem 0.3rem 0 0.6rem;
  background-color: #b3f2dd;
  display: flex;
  flex-direction: column;
}
.active {
  right: 0vw;
}
</style>
