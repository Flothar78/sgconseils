<template>
  <header class="navbar-container">
    <NuxtLink class="link-item" :to="`/`">
      <img
        src="~/assets/img/logo_sg_conseils.png"
        alt="logo sg conseils format png"
    /></NuxtLink>
    <button @click.stop="menuListSlide()" class="menu-button">MENU</button>
    <div
      @click.stop="menuListSlide()"
      class="menu-list"
      :class="{ active: isActive }"
    >
      <NuxtLink class="menu-item" href="#" :to="`/#accueil`">ACCUEIL</NuxtLink>

      <NuxtLink class="menu-item" href="#" :to="`/#metiers`"
        >EXPERTISES</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" :to="`/metiers/comptabilite`"
        >Comptabilité</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" :to="`/metiers/audit`"
        >Audit</NuxtLink
      ><NuxtLink class="metiers-item" href="#" :to="`/metiers/juridique`"
        >Juridique</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" :to="`/metiers/conseil`"
        >Conseil</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" :to="`/metiers/gestion`"
        >Gestion</NuxtLink
      ><NuxtLink class="metiers-item" href="#" :to="`/metiers/social`"
        >Social</NuxtLink
      >
      <NuxtLink class="metiers-item" href="#" :to="`/metiers/informatique`"
        >Informatique</NuxtLink
      >
      <NuxtLink class="menu-item" href="#" to="`#`">ÉQUIPE</NuxtLink>
      <NuxtLink class="menu-item" href="#" :to="`#`">MENTIONS LÉGALES</NuxtLink>
      <NuxtLink class="menu-item" href="#" :to="`/contact`">CONTACT</NuxtLink>
    </div>
  </header>
  <slot />
  <footer class="footer">
    <div class="footer-div">
      <NuxtLink class="footer-title" href="#">METIERS:</NuxtLink>
      <NuxtLink class="footer-infos" href="#" :to="`/metiers/comptabilite`"
        >Comptabilité</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" :to="`/metiers/audit`"
        >Audit</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" :to="`/metiers/juridique`"
        >Juridique</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" :to="`/metiers/conseil`"
        >Conseil</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" :to="`/metiers/gestion`"
        >Gestion</NuxtLink
      >
      <NuxtLink class="footer-infos" href="#" :to="`/metiers/social`"
        >Social / RH</NuxtLink
      >

      <NuxtLink class="footer-infos" href="#" :to="`/metiers/informatique`"
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
  z-index: 1001;
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
  font-family: Arial, sans-serif;
  background-color: $base-white;
  border: 5px solid $base-red;
  height: 38.6vh;
  font-size: 1rem;
  list-style: none;
  position: fixed;
  right: -80vw;
  top: 10vh;
  margin-right: -0.3rem;
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
    margin: 0.4rem 1.2rem;
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
@media screen and (max-width: 699px) {
  .menu-list {
    height: 30vh;
    right: -65vw;
    margin-right: -1rem;
    padding: 1rem 1rem 0 1rem;
    .menu-item {
      font-size: 1rem;
      margin: 0.2rem 0.5rem;
    }
    .metiers-item {
      font-size: 1rem;
    }
  }
  .active {
    right: 0vw;
  }
  .footer {
    font-size: 0.8rem;
    letter-spacing: 0.3px;
    padding-top: 1rem;
    color: white;
    .footer-div {
      border: 4px solid $base-black;
    }
  }
}
</style>
