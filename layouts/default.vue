<template>
  <div class="layout-container">
    <header class="navbar-container">
      <NuxtLink class="link-item" to="/">
        <img src="~/assets/img/logo_sg_conseils.png" alt="logo sg conseils format png"
      /></NuxtLink>
      <div class="menu">
        <NuxtLink class="menu-item" to="/#accueil">ACCUEIL</NuxtLink>
        <NuxtLink class="menu-item metiers-hover" to="/#metiers">MÉTIERS</NuxtLink>

        <div @click.stop="" class="metiers-submenu">
          <NuxtLink class="metiers-item" to="/metiers/comptabilite"
            >Comptabilité</NuxtLink
          >
          <NuxtLink class="metiers-item" to="/metiers/audit">Audit</NuxtLink
          ><NuxtLink class="metiers-item" to="/metiers/juridique">Juridique</NuxtLink>
          <NuxtLink class="metiers-item" to="/metiers/conseil">Conseil</NuxtLink>
          <NuxtLink class="metiers-item" to="/metiers/gestion">Gestion</NuxtLink
          ><NuxtLink class="metiers-item" to="/metiers/social">Social</NuxtLink>
          <NuxtLink class="metiers-item" to="/metiers/informatique"
            >Informatique</NuxtLink
          >
        </div>

     <!-- <NuxtLink class="menu-item"  to="/equipe">ÉQUIPE</NuxtLink>  -->
        <NuxtLink class="menu-item" to="/contact/#form-anchor">CONTACT</NuxtLink>
      </div>
    </header>
    <slot />
    <footer class="footer">
      <div class="footer-div">
        <NuxtLink class="footer-title">METIERS:</NuxtLink>
        <NuxtLink class="footer-infos" to="/metiers/comptabilite">Comptabilité</NuxtLink>
        <NuxtLink class="footer-infos" to="/metiers/audit">Audit</NuxtLink>
        <NuxtLink class="footer-infos" to="/metiers/juridique">Juridique</NuxtLink>
        <NuxtLink class="footer-infos" to="/metiers/conseil">Conseil</NuxtLink>
        <NuxtLink class="footer-infos" to="/metiers/gestion">Gestion</NuxtLink>
        <NuxtLink class="footer-infos" to="/metiers/social">Social / RH</NuxtLink>

        <NuxtLink class="footer-infos" to="/metiers/informatique">Informatique</NuxtLink
        ><NuxtLink class="footer-infos" to="/mentions">Mentions légales</NuxtLink>
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
$base-red: #b12434;
$light-red: #d47472;
$base-white: #bec8da;
$base-black: #191c20;
$base-grey: #858384;
.layout-container {
  background: $base-black;
  .navbar-container {
    max-width: 1440px;
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $base-black;
    padding-left: 1rem;
    padding-right: 0.5rem;
    height: 7vh;
    z-index: 1001;
    img {
      margin-top: .2rem;
      margin-left: .2rem;
      width: 35px;
    }
    .menu {
      width: 80%;
      padding: 0 1rem;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 0;
      .menu-item {
        display: flex;
        align-items: center;
        font-family: Arial;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        margin-right: 1rem;
        height: 7vh;
      }
      .menu-item:hover {
        text-shadow: 1px 1px;
      }
      .metiers-hover:hover + .metiers-submenu {
        visibility: visible;
      }
      .metiers-submenu:hover {
        visibility: visible;
      }
      .metiers-submenu {
        visibility: hidden;
        position: fixed;
        top: 7vh;
        right: 10px; //80px
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-shadow: 0 0;
        border-radius: 0 0 7px 7px;
        background: $base-black;
        height: 41vh;
        padding: 1rem 1rem 1rem 0;
        width: 200px;
        font-size: 1rem;
        .metiers-item {
          letter-spacing: 1.5px;
          border: 10px solid transparent;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0;
          width: 100%;
          height: 15%;
          text-decoration: none;
          color: white;
          font-weight: 500;
        }
        .metiers-item:hover {
          text-shadow: 1px 1px 2px $base-red;
          font-weight: 300;
        }
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
      padding-right: 0rem;
      img{
        margin-left: 0rem;
      }
      .menu {
        min-width: 70%;
        padding: 0 3rem 0 0;
        left: 30%;
        transform: translate(-12%);
        .menu-item {
          font-size: 0.8rem;
          font-weight: 300;
          margin-right: 0.6rem;
        }
        .metiers-hover:hover + .metiers-submenu {
          visibility: hidden;
        }
      }
    }
    .footer {
      font-size: 0.75rem;
      justify-content: space-between;
      padding: 2rem 0.5rem;
      .footer-div {
        height: 100%;
        justify-content: space-between;
        margin-right: 0;
        .footer-title {
          margin-right: 0.1rem;
        }

        .footer-infos {
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .layout-container {
    .navbar-container {
      .menu {
        padding: 0 0.3rem 0 0;
        left: 30%;
        transform: translate(-12%);
      }
    }
  }
}
</style>
