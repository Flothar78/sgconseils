<template>
  <div class="navbar-container">
    <NuxtLink class="link-item" :to="`/`">
      <img
        src="~/assets/img/logo_sg_conseils.png"
        alt="logo sg conseils format png"
    /></NuxtLink>
    <button @click="menuListSlideIn()" class="menu-button">MENU</button>
    <div class="menu-list" :class="{ active: isActive }">
      <NuxtLink class="link-item" :to="`/`">Accueil</NuxtLink>
      <NuxtLink class="link-item" :to="`/#cards`">Nos Métiers</NuxtLink>
      <NuxtLink class="link-item" :to="`/contact`">Contact</NuxtLink>
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.8rem;
  width: 9vw;
  height: 10vh;
  list-style: none;
  position: fixed;
  right: -12rem;
  margin-top: 25vh;
  padding: 0.7rem 0.3rem 0.7rem 0.6rem;
  background-color: #b3f2dd;
  display: flex;
  flex-direction: column;
  transition: right 0.5s ease;
  border-radius: 10% 0 0 10%;
  .link-item {
    text-decoration: none;
  }
}
.active {
  right: 0vw;
}
</style>
