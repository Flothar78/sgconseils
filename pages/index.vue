<template>
  <div class="hero" id="accueil" @scrollTo="scrollToTopOfCards">
    <div class="hero-img">
      <NuxtImg
        format="webp"
        src="/happyPeople.jpeg"
        alt="employés de bureaux devant un PC"
      ></NuxtImg>
    </div>
    <div class="company-features"><CompanyTitle /><CompanyBusiness /></div>
    <NuxtImg
      class="background-img"
      src="/background-image.jpeg"
      alt="Image de bureau en arrière fond, en tant que décor et peu visible."
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
      <NuxtLink class="nuxt-link" :to="`/metiers/informatique`" 916494
        >INFORMATIQUE</NuxtLink
      >
    </div>
    <div>
      <NuxtLink class="nuxt-link" :to="`/metiers/social`">SOCIAL</NuxtLink>
    </div>
  </div>
</template>

<script setup>
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
// and (max-width:1199px)
.hero {
  padding-top: 10vh;
  position: relative;
  background-color: $base-blue;
  color: $base-white;
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
    z-index: 10;
    img {
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
    border: 6px solid transparent;
    color: $darkest-blue;
    background-color: $base-white;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.8px;
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

@media screen and (max-width: 699px) {
  .hero {
    padding-top: 10vh;
    height: 94vh;
    .company-features {
      top: 60vh;
      left: 50%;
      transform: translateX(-50%);
      width: 70vw;
    }
    .hero-img {
      top: 13.2vh;
      left: 3vw;
      img {
        object-position: center;
        opacity: 0.8;
      }
    }
  }
  .expertises-cards {
    padding: 20vh 0 10vh 0;
    flex-direction: column;
    row-gap: 50px;
    height: 100%;
    .nuxt-link {
      width: 37vw;
      height: 13vh;
      border-radius: 10%;
    }
  }
}
</style>
