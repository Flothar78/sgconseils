<template>
  <div class="hero" id="accueil" @scrollTo="scrollToTopOfCards">
    <CompanyTitle />
    <CompanyBusiness />
    <img
      src="assets/img/background-image-metier.jpeg"
      alt="desk picture in background"
    />
    <ScrollButton @scrollTo="scrollToTopOfCards" />
  </div>
  <div class="expertises-cards" id="metiers" ref="cardsDiv">
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/comptabilite`"
        >COMPTABILITE</NuxtLink
      >
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/juridique`"
        >JURIDIQUE</NuxtLink
      >
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/audit`">AUDIT</NuxtLink>
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/conseil`">CONSEIL</NuxtLink>
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/gestion`">GESTION</NuxtLink>
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/informatique`"
        >INFORMATIQUE</NuxtLink
      >
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/social`">SOCIAL</NuxtLink>
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
$dark-blue: #425b8a;
$base-red: #b12434;
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
    filter: contrast(22%);
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
  gap: 80px;
  .nuxt-link {
    color:black ;
    background-color: #d5ecd4;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    flex-shrink: 1;
    justify-content: center;
    align-items: center;
    border: 6px solid $dark-blue;
    width: 20vw;
    height: 14vh;
    border-radius: 2%;
    box-shadow: 8px 8px 10px black;
  }
  .nuxt-link:hover {
    box-shadow: 0 0;
  border: 6px solid $base-red;
    color: $base-red;
  }
}
</style>
