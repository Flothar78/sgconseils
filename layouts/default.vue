<template>
  <div class="layout-container">
    <header class="navbar-container">
      <NuxtLink class="link-item" href="#" to="/">
        <img
          src="~/assets/img/logo_sg_conseils.png"
          alt="logo sg conseils format png"
      /></NuxtLink>
      <div class="menu">
        <NuxtLink class="menu-item" to="/#accueil">ACCUEIL</NuxtLink>
        <NuxtLink class="menu-item" href="#" to="/#metiers">MÉTIERS</NuxtLink>
        <NuxtLink class="menu-item" href="#" to="/equipe">ÉQUIPE</NuxtLink>
        <NuxtLink class="menu-item" href="#" to="/contact/#form-anchor"
          >CONTACT</NuxtLink
        >
      </div>
      <!-- <NuxtLink class="metiers-item" href="#" to="/metiers/comptabilite"
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
        > -->
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
          >Mentions légales</NuxtLink
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
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #fc440f;
$light-red: #ff8811;
$base-white: #bec8da;
$base-black: #191c20;
$base-grey: #858384;
.layout-container {
  background: $base-black;
  .navbar-container {
    max-width: 1440px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $base-black;
    padding-left: 1rem;
    height: 7vh;
    width: 100%;
    z-index: 100;
    img {
      width: 38px;
    }
    .menu {
      width: 80%;
      padding: 0 1rem;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 0;
      .menu-item {
        font-family: Arial;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        margin-right: 1rem;
      }
      .menu-item:hover {
        text-shadow: 1px 1px $base-black;
      }
      .metiers-item {
        text-decoration: none;
        color: $base-black;
        font-size: 1rem;
        padding-left: 0rem;
      }
      .metiers-item:hover {
        font-weight: 900;
      }
    }
  }
  .footer {
    max-width: 1440px;
    margin: auto;
    font-family: Arial, sans-serif;
    line-height: 1.3;
    min-height: 25vh;
    padding: 2rem 0.5rem;
    background: $base-black;
    color: $base-white;
    display: flex;
    justify-content: space-between;
    .footer-div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: 1rem;
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
}
@media screen and (max-width: 767px) {
  .layout-container {
    .navbar-container {
      .menu {
        min-width: 70%;
        padding: 0;
        left: 30%;
        transform: translate(-12%);
        .menu-item {
          font-size: 0.72rem;
          font-weight: 300;
        }
      }
    }
    .footer {
      font-size: 0.75rem;
    }
  }
}
</style>
