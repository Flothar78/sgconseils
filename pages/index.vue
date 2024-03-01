<template>
  <div class="hero" id="accueil" @scrollTo="scrollToTopOfCards">
    <div class="hero-img"></div>
    <div class="company-business"><CompanyTitle /><CompanyBusiness /></div>
    <img
      class="background-img"
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
$darkest-blue: #1c212f;
$base-red: #b12434;
.hero {
  padding-top: 10vh;
  position: relative;
  background-color: $base-blue;
  color: white;
  height: 90vh;
  .company-business {
    position: absolute;
    top: 20vh;
    left: 1vw;
  }
  .hero-img {
    position: absolute;
    right: 5vw;
    top: 20vh;
    object-fit: cover;
    width: 35vw;
    height: 50vh;
    background-image: url("assets/img/happyPeopleInFrontOfPC_business_suit.jpeg");
  }
  .background-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-top: -3vh;
    filter: contrast(22%);
    opacity: 0.1;
  }
}
.expertises-cards {
  background-color: white;
  height: 70vh;
  padding-top: 20vh;
  padding-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 80px;
  .nuxt-link {
    color: $darkest-blue;
     border: 6px solid $base-blue;
    background-color: $base-blue;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 14vh;
    border-radius: 2%;
    box-shadow: 8px 8px 10px $darkest-blue;
  }
  .nuxt-link:hover {
    box-shadow: 0 0;
    border: 6px solid $base-red;
  }
}
</style>
