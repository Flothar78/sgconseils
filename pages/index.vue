<template>
  <div class="hero-container">
    <div class="hero" id="accueil" @scrollTo="scrollToTopOfCards">
      <div class="hero-img">
        <NuxtImg
          defer
          quality="60"
          format="webp"
          src="/happyPeople.jpeg"
          alt="employés de bureaux devant un PC"
          sizes="200px"
        ></NuxtImg>
      </div>
      <div class="company-features"><CompanyTitle /><CompanyBusiness /></div>
      <NuxtImg
        defer
        quality="10"
        class="background-img"
        src="/background-image.jpeg"
        alt="Image de bureau en arrière fond, en tant que décor et peu visible."
      />
      <ScrollButton @scrollTo="scrollToTopOfCards" />
    </div>
  </div>
  <div class="cards-container">
    <div class="expertises-cards" id="metiers" ref="cardsDiv">
      <div>
        <NuxtLink class="nuxt-link" href="#" to="/metiers/comptabilite"
          >COMPTABILITÉ
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path
                d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
              ></path>
              <path
                d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
              ></path>
            </g></svg
        ></NuxtLink>
      </div>
      <div>
        <NuxtLink class="nuxt-link" href="#" to="/metiers/juridique"
          >JURIDIQUE<svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 14 16"
          >
            <path
              fill-rule="evenodd"
              d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3l-1.5 3h3z"
              fill="currentColor"
            />
          </svg>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink class="nuxt-link" href="#" to="/metiers/audit"
          >AUDIT

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 48 48"
          >
            <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
              <path
                d="m8 36l.005-7.957a1 1 0 0 1 1-1h10.002c.922 0 .917-.818.917-2.764c0-1.946-4.902-3.585-4.902-10.426S20.1 5 24.32 5s8.817 2.012 8.817 8.853c0 6.841-4.876 7.929-4.876 10.426s0 2.764.78 2.764h9.96a1 1 0 0 1 1 1V36z"
              />
              <path stroke-linecap="round" d="M8 42h32" />
            </g>
          </svg>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink class="nuxt-link" href="#" to="/metiers/conseil"
          >CONSEIL<svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 63 64"
          >
            <path
              fill="currentColor"
              d="M32.82 3.582c11.119 0 20.031 9.165 20.031 20.284c0 4.391-.85 7.214-3.395 10.78c-3.373 4.688-6.62 7.468-6.62 13.239v4.414c0 5.474-4.711 9.676-10.184 9.676c-5.539 0-10.185-4.391-10.185-9.93c0-1.316.975-2.463 2.292-2.463c1.994 0 1.909 2.568 2.631 4.415c.891 2.249 2.736 3.564 5.177 3.564c3.119 0 5.856-2.312 5.856-5.432v-4.923c0-9.952 10.185-13.473 10.185-23.425c0-8.806-7.152-15.956-15.957-15.956c-5.454 0-9.294 1.782-12.563 6.111c-1.931 2.568-2.801 4.456-3.225 7.638c-.255 1.973-.295 4.584-2.291 4.584c-1.316 0-2.292-1.146-2.292-2.462c-.001-11.202 9.335-20.114 20.539-20.114z"
            />
            <path
              fill="currentColor"
              d="M32.225 9.692c7.894 0 14.683 6.027 14.683 13.92c0 1.018-.679 2.036-1.697 2.036c-1.104 0-1.358-1.294-1.528-2.376c-.382-2.376-.574-3.904-1.868-5.94c-2.121-3.332-5.197-4.414-9.165-4.414c-3.756 0-6.429 1.252-8.658 4.243c-1.21 1.614-1.965 3.771-2.346 5.766c-.297 1.634.035 2.892-1.641 2.892c-1.04 0-1.613-1.082-1.613-2.123c.002-7.681 6.155-14.004 13.835-14.004zM7.946 41.01l7.345 7.345l-1.834 1.834l-7.345-7.345zm3.695-3.694l7.346 7.346l-1.835 1.835l-7.346-7.346zm3.819-3.866l7.345 7.347l-1.834 1.834l-7.345-7.347zm4.437-4.312l7.345 7.347l-1.835 1.834l-7.345-7.347z"
            />
            <path
              fill="currentColor"
              d="m24.011 25.259l7.345 7.345l-1.834 1.834l-7.345-7.345zm4.181-4.572l7.345 7.347l-1.835 1.834l-7.345-7.347zM48.855 4.494l2.982 2.982l-1.927 1.927l-2.982-2.982zM52.733.59l2.981 2.982l-1.928 1.927l-2.981-2.982z"
            /></svg
        ></NuxtLink>
      </div>
      <div>
        <NuxtLink class="nuxt-link" href="#" to="/metiers/gestion"
          >GESTION<svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M19 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"
            />
            <path
              fill="currentColor"
              d="M17 24H4V10h24v5h2v-5a2.002 2.002 0 0 0-2-2h-6V4a2.002 2.002 0 0 0-2-2h-8a2.002 2.002 0 0 0-2 2v4H4a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h13ZM12 4h8v4h-8Z"
            /></svg
        ></NuxtLink>
      </div>
      <div>
        <NuxtLink class="nuxt-link" href="#" to="/metiers/informatique"
          >INFORMATIQUE<svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 15 15"
          >
            <path
              fill="none"
              stroke="currentColor"
              d="M9.5 14.5h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm0 0H4m2.5-3v3m2-9h6m-4.5 6h3m-11.5-8h7v8h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"
            /></svg
        ></NuxtLink>
      </div>
      <div>
        <NuxtLink class="nuxt-link" href="#" to="/metiers/social"
          >SOCIAL RH<svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 32 32"
          >
            <g fill="currentColor">
              <path d="M17 18v-2h-2v2H3v6h2v-4h10v4h2v-4h10v4h2v-6z" />
              <path
                d="M4 32a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 4a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 4a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M23 8V6h-2.1a5 5 0 0 0-.73-1.75l1.49-1.49l-1.42-1.42l-1.49 1.49A5 5 0 0 0 17 2.1V0h-2v2.1a5 5 0 0 0-1.75.73l-1.49-1.49l-1.42 1.42l1.49 1.49A5 5 0 0 0 11.1 6H9v2h2.1a5 5 0 0 0 .73 1.75l-1.49 1.49l1.41 1.41l1.49-1.49a5 5 0 0 0 1.76.74V14h2v-2.1a5 5 0 0 0 1.75-.73l1.49 1.49l1.41-1.41l-1.48-1.5A5 5 0 0 0 20.9 8zm-7 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                class="ouiIcon__fillSecondary"
              />
              <path
                d="M16 8a1 1 0 0 1-1-1a1.39 1.39 0 0 1 0-.2a.65.65 0 0 1 .06-.18a.74.74 0 0 1 .09-.18a1.61 1.61 0 0 1 .12-.15a.93.93 0 0 1 .33-.21a1 1 0 0 1 1.09.21l.12.15a.78.78 0 0 1 .09.18a.62.62 0 0 1 .1.18a1.27 1.27 0 0 1 0 .2a1 1 0 0 1-1 1"
              />
            </g></svg
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "SGConseils experts-comptable à Toulouse",
  description:
    "Site qui présente les services de la société SGConseils, le juridique, la comptabilité, le conseil, l'informatique, le social, la gestion et l'audit.",
});
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
$light-red: #ff8811;
$base-white: #bec8da;
$base-black: #191c20;
.hero-container {
  background-color: $base-blue;
  .hero {
    max-width: 1440px;
    padding-top: 7vh;
    position: relative;
    margin: auto;
    height: 93vh;
    .company-features {
      position: absolute;
      top: 42.2vh;
      transform: translate(1%);
    }
    .hero-img {
      position: absolute;
      width: 250px;
      right: 0;
      margin-right: 1.6rem;
      padding-top: 0rem;
      top: 21vh;
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
}
.cards-container {
  background-color: $base-white;
  .expertises-cards {
    background-color: $base-white;
    max-width: 1440px;
    margin: auto;
    height: 70vh;
    padding: 20vh 2vw 10vh 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 80px;
    row-gap: 35px;
    font-family: Arial, sans-serif;
    .nuxt-link {
      border: 9px solid $darkest-blue;
      color: $darkest-blue;
      background-color: $base-white;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.1rem;
      letter-spacing: 0.8px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      flex-shrink: 0;
      max-width: 210px;
      height: 15vh;
      width: 17vw;
      border-radius: 10%;
      box-shadow: 6px 6px 7px $base-black;
      padding: 0 1rem;
    }
    .nuxt-link:hover {
      box-shadow: 4px 4px 6px $base-red;
    }
  }
}

@media screen and (max-width: 767px) {
  .hero-container {
    .hero {
      .hero-img {
        top: 13.2vh;
        width: 200px;
        left: 50%;
        transform: translate(-50%);
        img {
          object-position: center;
        }
      }
      .company-features {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        height: 20vh;
        width: 100%;
        top: 57vh;
        transform: translate(0);
      }
    }
  }
  .cards-container {
    .expertises-cards {
      align-items: center;
      justify-content: center;
      height: 90vh;
      padding: 9vh 0;
      column-gap: 35px;
      row-gap: 0px;

      .nuxt-link {
        color: $darkest-blue;
        width: 30vw;
        height: 15vh;
        border-radius: 10px;
        font-size: 0.9rem;
        justify-content: space-evenly;
        border: 2px solid $darkest-blue;
        box-shadow: 4px 4px 6px $base-red;
      }
      .nuxt-link:hover {
        box-shadow: 1px 1px 2px $base-red;
      }
    }
  }
}
</style>
