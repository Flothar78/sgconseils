<template>
  <div class="hero" @scrollTo="scrollToTopOfCards">
    <img
      src="assets/img/background-image-metier.jpeg"
      alt="desk picture in background"
    />
    <ScrollButton @scrollTo="scrollToTopOfCards" />
  </div>
  <div class="expertises-cards" id="cards" ref="cardsDiv">
    <div>
      <NuxtLink :to="`/metiers/juridique`">Page juridique</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/audit`">Page audit</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/comptabilite`">Page comptabilité</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/conseil`">Page conseil</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/gestion`">Page gestion</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/informatique`">Page informatique</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/social`">Page social</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cardsDiv = ref(null);
const scrollToTopOfCards = () => {
  const div = cardsDiv.value;
  console.log(div);
  div.scrollIntoView({ behavior: "smooth" });
  // return navigateTo("/#cards");
};
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 12vh;
  position: relative;
  background-color: #425b8a;
  color: white;
  height: 92vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-top: -3vh;
    filter: grayscale(70%) contrast(25%);
    opacity: 0.3;
  }
}
.expertises-cards {
  border: black 1px solid;
  background-color: #425b8a;
  height: 100vh;
  padding-top: 10vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    width: 22vw;
  }
}
</style>
