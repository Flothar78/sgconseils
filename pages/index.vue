<template>
  <div class="hero" id="accueil" @scrollTo="scrollToTopOfCards">
 <div class="hero-img">
  <img src="assets/img/happyPeopleInFrontOfPC_business_suit.jpeg" alt="happy people working with PC and ledger"></img>
 </div>   
    <div class="company-features"><CompanyTitle /><CompanyBusiness /></div>
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
        >COMPTABILITÉ</NuxtLink
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
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
@media screen and (min-width: 700px) {
    // and (max-width:1199px)
    .hero {
      padding-top: 10vh;
      position: relative;
      background-color: $base-blue;
      color: white;
      height: 90vh;
      .company-features {
        position: absolute;
        top: 42.2vh;
        left: 2vw;
      }
      .hero-img {
        position: absolute;
        right: 0;
        margin-right: 1.6rem;
        top: 15.5vh;
        height: 36vh;
        overflow: hidden;
        z-index:10;
        img{ 
          width: 100%; 
          height: 100%;
          object-fit: contain;
          object-position: right;
          opacity: 0.9;
        }
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
  background-color: $base-blue;
  height: 70vh;
  padding-top: 20vh;
  padding-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 80px;
  font-family: Arial, sans-serif;
  .nuxt-link {
    color: $darkest-blue;
    border: 6px solid $base-red;
    background-color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: .8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 14vh;
    border-radius: 10%;
    box-shadow: 8px 8px 10px $darkest-blue;
  }
    .nuxt-link:hover {
      box-shadow: 0 0;
      border: 6px solid $base-red; 
      box-shadow: 2px 2px 4px $darkest-blue;
    }
  }
  }
@media screen and (max-width: 699px) {
.hero {
    padding-top: 14vh;
    position: relative;
    background-color: $base-blue;
    color: white;
    height:90vh;
    .company-features {
      border: 1px solid black;
        position: absolute;
        top: 53vh;
        left: 2vw;
      }
    .hero-img {
      position: absolute;
      right: -3vw;
      top: 10vh;
      height: 36vh;
      overflow: hidden;
      z-index:10;
      img{ 
        width: 85%; 
        height: 85%;
        object-fit: contain;
        object-position: left;
        opacity: 0.8;
      }
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
    background-color: $base-blue;
    padding: 20vh 0 10vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    font-family: Arial, sans-serif;
    .nuxt-link {
      color: $darkest-blue;
      border: 6px solid $base-red;
      background-color: white;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 42vw;
      height: 18vh;
      border-radius: 10%;
      box-shadow: 8px 8px 10px $darkest-blue;
    }
  }
}
</style>
