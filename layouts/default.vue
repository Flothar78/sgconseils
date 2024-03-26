<template>
  <header class="navbar-container">
    <NuxtLink class="link-item" href="#" to="/">
      <img
        src="~/assets/img/logo_sg_conseils.png"
        alt="logo sg conseils format png"
    /></NuxtLink>
    <button @click.stop="menuListSlide()" class="menu-button">MENU</button>
    <div class="menu-list" :class="{ active: isActive }">
      <button @click.stop="menuListSlide()" class="inner-menu-closing">
        X
      </button>
      <NuxtLink class="menu-item" to="/#accueil">ACCUEIL</NuxtLink>
      <NuxtLink class="menu-item" href="#" to="/#metiers">EXPERTISES</NuxtLink>
      <NuxtLink class="metiers-item" href="#" to="/metiers/comptabilite"
        >Comptabilité</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" to="/metiers/audit"
        >Audit</NuxtLink
      ><NuxtLink class="metiers-item" href="#" to="/metiers/juridique"
        >Juridique</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" to="/metiers/conseil"
        >Conseil</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" to="/metiers/gestion"
        >Gestion</NuxtLink
      ><NuxtLink class="metiers-item" href="#" to="/metiers/social"
        >Social</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" to="/metiers/informatique"
        >Informatique</NuxtLink
      >
      <NuxtLink class="menu-item" href="#" to="/equipe">ÉQUIPE</NuxtLink>
      <NuxtLink class="menu-item" href="#" to="/mentions"
        >MENTIONS LÉGALES</NuxtLink
      >
      <NuxtLink class="menu-item" href="#" to="/contact/#form-anchor"
        >CONTACT</NuxtLink
      >
    </div>
  </header>
  <slot />
  <footer class="footer">
    <div class="footer-div">
      <NuxtLink class="footer-title" href="#">METIERS:</NuxtLink>
      <NuxtLink class="footer-infos" href="#" to="/metiers/comptabilite"
        >Comptabilité</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" to="/metiers/audit"
        >Audit</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" to="/metiers/juridique"
        >Juridique</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" to="/metiers/conseil"
        >Conseil</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" to="/metiers/gestion"
        >Gestion</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" to="/metiers/social"
        >Social / RH</NuxtLink
      >

      <NuxtLink class="footer-infos" href="#" to="/metiers/informatique"
        >Informatique</NuxtLink
      ><NuxtLink class="footer-infos" href="#" to="/mentions"
        >MENTIONS LÉGALES</NuxtLink
      >
    </div>
    <div class="footer-div">
      <div class="footer-title">NOUS CONTACTER:</div>
      <div class="footer-infos">contact@sgconseils.com</div>
      <div class="footer-infos">09 73 61 17 22</div>
    </div>
    <div class="footer-div">
      <div class="footer-title">NOS ADRESSES:</div>
      <div class="footer-infos">
        6 chemin de Limayrac <br />
        31500 Toulouse <br /><br />
      </div>
      <div class="footer-infos">
        79 Rue République <br />
        31290 Villefranche-de-Lauragais
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
$base-red: #fc440f;
$light-red: #ff8811;
$base-white: #bec8da;
$base-black: #191c20;
$base-grey: #858384;
.navbar-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $base-black;
  height: 7vh;
  width: 100%;
  padding-left: 0.3rem;
  z-index: 1001;
  img {
    width: 38px;
  }
  .menu-button {
    height: 3.5vh;
    margin-right: 2rem;
    background: $base-red;
    border: 1px transparent solid;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 2px 2px 5px $base-white;
    border-radius: 53x;
  }
  .menu-button:hover {
    box-shadow: 0 0 0;
    font-weight: 500;
    transform: translate(2px, 2px);
  }
  .inner-menu-closing {
    border: 2px solid $base-red;
    border-radius: 3px;
    color: $base-red;
    background: transparent;
    position: absolute;
    right: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
  }
}
.menu-list {
  font-family: Arial, sans-serif;
  background-color: $base-white;
  border: 7px solid $darkest-blue;
  height: 50vh;
  font-size: 1rem;
  list-style: none;
  position: fixed;
  right: -82vw;
  top: 27vh;
  margin-right: -0.5rem;
  display: flex;
  flex-direction: column;
  transition: right 0.5s ease;
  padding-top: 1rem;
  border-radius: 10% 0 0 10%;
  .menu-item {
    text-decoration: none;
    color: $base-black;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 1.2rem;
  }
  .menu-item:hover {
    text-shadow: 1px 1px $base-black;
  }
  .metiers-item {
    text-decoration: none;
    color: $base-black;
    font-size: 1.1rem;
    padding-left: 1.6rem;
  }
  .metiers-item:hover {
    font-weight: 900;
  }
}
.active {
  right: 0vw;
}
.footer {
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  line-height: 1.3;
  min-height: 25vh;
  padding-top: 2rem;
  background: $base-black;
  color: $base-white;
  display: flex;
  justify-content: space-around;
  .footer-div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 2rem;
    .footer-title {
      margin: 1rem 0 1rem 0;
      text-decoration: none;
      color: white;
    }
    .footer-infos {
      text-decoration: none;
      color: white;
    }
  }
}
@media screen and (max-width: 767px) {
  .navbar-container {
    .inner-menu-closing {
      background: transparent;
      position: absolute;
      top: 1.5rem;
      right: 1rem;
      font-weight: 700;
    }
  }
  .menu-list {
    top: 28vh;
    height: 50vh;
    width: 35vw;
    right: -65vw;
    margin-right: -1rem;
    padding: 0 1rem;
    justify-content: center;
    .menu-item {
      font-size: 1rem;
      margin: 0.5rem 0.5rem;
    }
    .metiers-item {
      margin-top: 0.2rem;
      font-size: 1rem;
    }
  }
  .active {
    right: 0vw;
  }
  .footer {
    font-size: 0.8rem;
    letter-spacing: 0px;
    padding-top: 1rem;
    color: white;
    justify-content: space-around;

    .footer-div {
      border: 4px solid $base-black;
    }
  }
}
</style>
