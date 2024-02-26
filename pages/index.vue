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
      <NuxtLink class="nuxt-link" :to="`/metiers/juridique`"
        >Juridique</NuxtLink
      >
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/audit`">Audit</NuxtLink>
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/comptabilite`"
        >Comptabilité</NuxtLink
      >
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/conseil`">Conseil</NuxtLink>
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/gestion`">Gestion</NuxtLink>
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/informatique`"
        >Informatique</NuxtLink
      >
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/social`">Social</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cardsDiv = ref(null);
const scrollToTopOfCards = () => {
  const div = cardsDiv.value;
  div.scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 10vh;
  position: relative;
  background-color: #425b8a;
  color: white;
  height: 95vh;
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
  background-color: #425b8a;
  height: 61.5vh;
  padding: 20.5vh 0 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 63px;
  .nuxt-link {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d5ecd4;
    width: 18vw;
    height: 20vh;
    border-radius: 10%;
    box-shadow: 6px 6px 20px black;
  }
  .nuxt-link:hover {
    box-shadow: 6px 6px black;
  }
}
</style>
