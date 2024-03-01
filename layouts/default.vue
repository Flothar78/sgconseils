<template>
  <header class="navbar-container">
    <NuxtLink class="link-item" :to="`/`">
      <img
        src="~/assets/img/logo_sg_conseils.png"
        alt="logo sg conseils format png"
    /></NuxtLink>
    <button @click.stop="menuListSlide()" class="menu-button">MENU</button>
    <div class="menu-list" :class="{ active: isActive }">
      <NuxtLink class="link-item" :to="`/#accueil`">Accueil</NuxtLink>
      <NuxtLink class="link-item" :to="`/#metiers`">Nos Métiers</NuxtLink>
      <NuxtLink class="link-item" :to="`/contact`">Contact</NuxtLink>
    </div>
  </header>
  <slot />
  <footer class="footer">
    <div class="footer-div">
      <NuxtLink class="footer-title" >NOS COMPETENCES:</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/comptabilite`" >Comptabilité</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/juridique`" >Juridique</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/audit`" >Audit</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/gestion`" >Gestion</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/social`" >Social / RH</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/conseil`" >Conseil</NuxtLink>
      <NuxtLink class="footer-infos" :to="`/metiers/informatique`" >Informatique</NuxtLink>
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
$base-blue: #9fb1d1;
.navbar-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(145deg, #b12434, #858384);
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
    background: #b12434;
    border: 1px transparent solid;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
    box-shadow: 4px 4px 5px #57000a;
  }
  .menu-button:hover {
    box-shadow: 1px 1px 2px #57000a;
  }
}
.menu-list {
  background-color: white;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.8rem;
  width: 9vw;
  height: 10vh;
  list-style: none;
  position: fixed;
  right: -12rem;
  margin-right: -1rem;
  margin-top: 25vh;
  padding: 0.7rem 1rem 0.7rem 0.6rem;
  display: flex;
  flex-direction: column;
  transition: right 0.5s ease;
  border-radius: 10% 0 0 10%;
  .link-item {
    text-decoration: none;
    color: #b12434;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    font-weight: 800;
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
