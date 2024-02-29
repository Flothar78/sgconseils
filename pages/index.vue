<template>
  <div class="hero" id="accueil" @scrollTo="scrollToTopOfCards">
    <img
      src="assets/img/background-image-metier.jpeg"
      alt="desk picture in background"
    />
    <ScrollButton @scrollTo="scrollToTopOfCards" />
  </div>
  <div class="expertises-cards" id="metiers" ref="cardsDiv">
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
$base-blue: #7d93b5;
.hero {
  padding-top: 10vh;
  position: relative;
  background-color: $base-blue;
  color: white;
  height: 95vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-top: -3vh;
    filter: grayscale(100%) contrast(25%);
    opacity: 0.2;
  }
}
.expertises-cards {
  background-color: $base-blue;
  height: 61.5vh;
  padding: 20.5vh 0 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 63px;
  .nuxt-link {
    color: black;
    background-color: #d5ecd4;
    text-decoration: none;
    font-weight: 900;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18vw;
    height: 20vh;
    border-radius: 10%;
    box-shadow: 6px 6px 8px black;
  }
  .nuxt-link:hover {
    box-shadow: 3px 3px 4px #858384;
  }
}
</style>
