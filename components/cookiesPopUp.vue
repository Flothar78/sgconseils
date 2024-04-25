<template>
  <div class="card">
    <div class="paragraph">
      Nous n'utilisons aucun cookie de suivi, ni de collecte de données
      personnelles. Seuls les cookies de Google Maps sont présents dans le
      navigateur et ne concernent pas la localisation de l'utilisateur du site.
    </div>
    <div class="paragraph">
      Le site utilise également le local storage du navigateur, pour empêcher la
      présente notification d'intervenir en permanence.
    </div>
    <div class="paragraph">
      Les données personnelles utilisées par SG Conseils sont celles transmises
      via le formulaire de contact. Vous pouvez consulter la page "Mentions
      légales" du site web.
    </div>
    <div class="buttonsDiv">
      <button @click="closeWindow" type="button" class="button">
        D'accord
      </button>
      <NuxtLink to="/mentions" @click="closeWindow" class="button"
        >Mentions légales</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  setTimeout(() => {
    localStorage.removeItem("popUp");
  }, 86400000);// 86400000 24 H
  if (!localStorage["popUp"]) {
    const displayPopup = async () => {
      await document.querySelector(".card").classList.add("visible");
      await localStorage.setItem("popUp", Date());
    };
    displayPopup();
  }
});

const closeWindow = () => {
  const card = document.querySelector(".card");
  card.classList.remove("visible");
  card.classList.add("hidden");
};
</script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$light-red: #d47472;
$base-white: #bec8da;
$base-black: #191c20;
$base-grey: #858384;
.card {
  visibility: hidden;
  width: 80vw;
  max-width: 900px;
  background: white;
  border: 3px solid black;
  position: absolute;
  bottom: 1vh;
  padding-top: 0.5rem;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1002;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 0.8rem;
  .paragraph {
    margin: 0.3rem 3rem;
  }
  .buttonsDiv {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 0.5vh;
    width: 100%;
    padding: 2rem 0;
    .button {
      background: $base-red;
      color: white;
      border-radius: 5px;
      padding: 0.5rem;
      font-family: Arial;
      text-decoration: none;
      font-size: 0.8rem;
      border: 1px solid black;
    }
  }
}
.hidden {
  visibility: hidden;
}
.visible {
  visibility: visible;
}
</style>
