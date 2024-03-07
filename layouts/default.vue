<template>
  <header class="navbar-container">
    <NuxtLink class="link-item" :to="`/`">
      <img
        src="~/assets/img/logo_sg_conseils.png"
        alt="logo sg conseils format png"
    /></NuxtLink>
    <button @click.stop="menuListSlide()" class="menu-button">MENU</button>
    <div class="menu-list" :class="{ active: isActive }">
      <NuxtLink class="link-item" :to="`/#accueil`">ACCUEIL</NuxtLink>
      <NuxtLink class="link-item" id="link-item-metiers" :to="`/#metiers`"
        >EXPERTISES</NuxtLink
      >
      <NuxtLink class="sublink-item" :to="`/metiers/comptabilite`"
        >Comptabilité</NuxtLink
      >
      <NuxtLink class="sublink-item" :to="`/metiers/audit`">Audit</NuxtLink
      ><NuxtLink class="sublink-item" :to="`/metiers/juridique`"
        >Juridique</NuxtLink
      >
      <NuxtLink class="sublink-item" :to="`/metiers/conseil`">Conseil</NuxtLink>
      <NuxtLink class="sublink-item" :to="`/metiers/gestion`">Gestion</NuxtLink
      ><NuxtLink class="sublink-item" :to="`/metiers/social`">Social</NuxtLink>
      <NuxtLink class="sublink-item" :to="`/metiers/informatique`"
        >Informatique</NuxtLink
      >
      <NuxtLink class="link-item" :to="`/contact`">CONTACT</NuxtLink>
    </div>
  </header>
  <slot />
  <footer class="footer">
    <div class="footer-div">
      <NuxtLink class="footer-title">NOS COMPETENCES:</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/comptabilite`"
        >Comptabilité</NuxtLink
      >
      <NuxtLink class="footer-infos" :to="`/metiers/audit`">Audit</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/juridique`"
        >Juridique</NuxtLink
      >
      <NuxtLink class="footer-infos" :to="`/metiers/conseil`">Conseil</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/gestion`">Gestion</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/social`"
        >Social / RH</NuxtLink
      >

      <NuxtLink class="footer-infos" :to="`/metiers/informatique`"
        >Informatique</NuxtLink
      >
    </div>
    <div class="footer-div">
      <div class="footer-title">NOUS CONTACTER:</div>
      <div class="footer-infos">contact@sgconseils.com</div>
      <div class="footer-infos">09 73 61 17 22</div>
    </div>
    <div class="footer-div">
      <div class="footer-title">NOS ADRESSES:</div>
      <div class="footer-infos">6 chemin de Limayrac 31500 Toulouse</div>
      <div class="footer-infos">
        79 Rue République 31290 Villefranche-de-Lauragais
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const isActive = useState("isActive");
const menuListSlide = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
$base-grey: #858384;
.navbar-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(145deg, $base-red, $base-grey);
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
    background: $base-red;
    border: 1px transparent solid;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
    box-shadow: 4px 4px 5px $base-black;
  }
  .menu-button:hover {
    box-shadow: 1px 1px 2px $base-black;
  }
}
.menu-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 2px solid $base-black;
  font-size: 1rem;
  width: 12vw;
  height: 30vh;
  list-style: none;
  position: fixed;
  right: -12rem;
  margin-right: -1rem;
  margin-top: 54vh;
  padding: 0.7rem 1rem;
  display: flex;
  flex-direction: column;
  transition: right 0.5s ease;
  border-radius: 10% 0 0 10%;
  #link-item-metiers {
    display: flex;
    flex-direction: column;
    padding-bottom: 0.4rem;
  }
  .link-item {
    text-decoration: none;
    color: $base-black;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    font-weight: 800;
    padding: 0.5rem 0;
  }
  .sublink-item {
    text-decoration: none;
    color: $base-black;
    font-size: 0.8rem;
    padding: 0.2rem 0 0 0.4rem;
  }
}
.active {
  right: 0vw;
}
.footer {
  height: 25vh;
  padding-top: 2rem;
  background: #1d2024;
  color: white;
  display: flex;
  justify-content: space-around;
  .footer-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
    .footer-title {
      margin: 1rem 0 1rem 0;
    }
    .footer-infos {
      padding-left: 1rem;
      text-decoration: none;
      color: white;
    }
  }
}
</style>
