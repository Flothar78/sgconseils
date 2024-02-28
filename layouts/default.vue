<template>
  <div class="navbar-container">
    <NuxtLink class="link-item" :to="`/`">
      <img
        src="~/assets/img/logo_sg_conseils.png"
        alt="logo sg conseils format png"
    /></NuxtLink>
    <button @click.stop="menuListSlide()" class="menu-button">MENU</button>
    <div class="menu-list" :class="{ active: isActive }">
      <NuxtLink class="link-item" :to="`/#accueil`">Accueil</NuxtLink>
      <NuxtLink class="link-item" :to="`/#metiers`">Nos Métiers</NuxtLink>
      <NuxtLink class="link-item" :to="`/contact`">Contact</NuxtLink>
    </div>
  </div>
  <slot />
</template>

<script lang="ts" setup>
const isActive = useState("isActive");
const menuListSlide = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.navbar-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #858384;
  height: 10vh;
  width: 100%;
  padding-left: 0.3rem;
  z-index: 30;
  img {
    width: 78px;
    height: 100%;
  }
  .menu-button {
    margin-right: 2rem;
    background: #b12434;
    border: 1px #858384 solid;
    color: white;
    font-size: 1rem;
    padding:.5rem;
  }
}
.menu-list {
  background-color: white;
  border: 3px solid #b12434;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.8rem;
  width: 9vw;
  height: 10vh;
  list-style: none;
  position: fixed;
  right: -12rem;
  margin-right: -1rem;
  margin-top: 25vh;
  padding: 0.7rem 0.3rem 0.7rem 0.6rem;
  display: flex;
  flex-direction: column;
  transition: right 0.5s ease;
  border-radius: 10% 0 0 10%;
  .link-item {
    text-decoration: none;
    color: #b12434;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    font-weight: 800;
  }
}
.active {
  right: 0vw;
}
</style>
