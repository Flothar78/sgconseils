<template>
  <div class="metiers-container">
    <div class="global-metiers">
      <CompanyTitle class="company-title" :title="correctedId" />
      <Juridique v-if="id === 'juridique'" :childClasses="parentClasses" />
      <Gestion v-else-if="id === 'gestion'" :childClasses="parentClasses" />
      <Audit v-else-if="id === 'audit'" :childClasses="parentClasses" />
      <Comptabilite v-else-if="id === 'comptabilite'" :childClasses="parentClasses" />
      <Informatique v-else-if="id === 'informatique'" :childClasses="parentClasses" />
      <Conseil v-else-if="id === 'conseil'" :childClasses="parentClasses" />
      <Social v-else-if="id === 'social'" :childClasses="parentClasses" />
      <!-- <NuxtLink class="contact-button" href="#" to="/contact/#form-anchor"
        >Nous écrire</NuxtLink
      > -->
      <button class="method-button" @click="showDetails()">NOS MÉTHODES</button>
      <button class="close-details-button" @click="showDetails()">X</button>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "SGConseils experts-comptable à Toulouse",
  description:
    "Page qui présente en détail une des expertises de SGConseils, le juridique, la comptabilité, le conseil, l'informatique, le social, la gestion et l'audit.",
});
const id = useRoute().params.id;
const correctedId =
  id === "comptabilite"
    ? id
        .toUpperCase()
        .split("")
        .map((x) => (x === "E" ? (x = "É") : x))
        .join("")
    : id.toUpperCase();

const parentClasses = ref([
  "svg-icon",
  "activity-slogan",
  "activity-description",
  "method-details",
]);
const showDetails = async () => {
  const showDetails = parentClasses.value;
  const closeDetailsButton = document.querySelector(".close-details-button");
  (await showDetails[showDetails.length - 1]) !== "visible"
    ? showDetails.push("visible")
    : showDetails.pop();
  await closeDetailsButton.classList.toggle("visible");
};
</script>

<style lang="scss">
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$light-red: #ff8811;
$base-white: #bec8da;
$base-black: #191c20;
.metiers-container {
  background-color: $base-white;
  .global-metiers {
    max-width: 1440px;
    margin: auto;
    padding-top: 10vh;
    position: relative;
    background-color: $base-white;
    color: $base-white;
    height: 90vh;
    .company-title {
      background: $dark-blue;
      max-width: 590px;
      margin-top: 4rem;
      margin-left: -0.8rem;
      font-size: 1.4rem;
      color: white;
      padding: 0;
      box-shadow: 2px 2px 5px $base-black;
      text-shadow: 0 0;
      border-radius: 0 5px 5px 0;
    }
    .svg-icon {
      margin: -3.2rem 0 0 1vw;
      color: white;
    }
    .activity-description {
      position: absolute;
      background: $dark-blue;
      top: 38vh;
      height: 45vh;
      width: 75vw;
      max-width: 950px;
      right: 50%;
      transform: translateX(50%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      padding: 0 2rem;
      font-size: 1.2rem;
      border-radius: 10px;
      color: white;
      .activity-slogan {
        margin-left: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $base-white;
        color: black;
        font-weight: 500;
        font-size: 1.25rem;
        letter-spacing: 0px;
        width: 90%;
        padding: 1rem;
        border-radius: 10px;
      }
    }
    .contact-button {
      text-decoration: none;
      position: absolute;
      bottom: 0;
      right: -0.2rem;
      font-size: 0.8rem;
      background: $base-red;
      color: white;
      padding: 0.5rem;
      border-radius: 5px 0 0 5px;
      opacity: 0.8;
    }
    .contact-button:hover {
      opacity: 1;
      background: $base-red;
    }
    .method-details {
      font-size: 1.2rem;
      visibility: hidden;
      position: absolute;
      top: 32vh;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      color: $base-black;
      border: $darkest-blue 10px solid;
      background: $base-white;
      width: 80vw;
      height: 50vh;
      border-radius: 20px;
      padding: 1rem 3rem;
      .title {
        color: $darkest-blue;
        font-weight: 900;
      }
    }
    .method-button {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 600;
      width: 10rem;
      height: 3rem;
      position: absolute;
      bottom: 2.3vh;
      right: 50%;
      transform: translate(50%);
      border-radius: 5px;
      background: $base-red;
      color: white;
      padding: 0.5rem;
      box-shadow: 3px 3px 4px $darkest-blue;
    }
    .method-button:hover {
      box-shadow: 0 0;
      //text-shadow: 330px -70px 3px $base-red;
    }
    .close-details-button {
      visibility: hidden;
      border: 4px solid black;
      border-radius: 3px;
      color: black;
      background: transparent;
      font-weight: 700;
      position: absolute;
      top: 34vh;
      right: 7vw;
    }
    .visible {
      visibility: visible;
    }
  }
}
@media screen and (max-width: 767px) {
  .metiers-container {
    .global-metiers {
      .company-title {
        width: 90vw;
        margin: auto;
        font-size: 1.1rem;
        text-shadow: 2px 2px 3px $base-blue;
        box-shadow: 0 0;
      }
      .svg-icon {
        color: transparent;
      }
      .activity-description {
        font-size: 1.2rem;
        height: 50vh;
        width: 65vw;
        top: 30vh;
        justify-content: space-around;
        align-items: center;
        .activity-slogan {
          text-align: center;
          color: black;
          font-size: 1.2rem;
          width: 100%;
          margin: 0;
          padding: 0.7rem;
        }
      }
      .contact-button {
        font-size: 0.8rem;
        bottom: 0;
        padding: 0.3rem;
        background: $base-red;
        color: white;
        opacity: 0.7;
      }
      .method-details {
        font-size: 1.1rem;
        border-radius: 10px;
        position: absolute;
        z-index: 20;
        top: 7vh;
        left: 0%;
        transform: translateX(0%);
        display: flex;
        flex-direction: space-evenly;
        color: $base-black;
        border: $darkest-blue 0 solid;
        background: $base-white;
        width: 100%;
        height: 88vh;
        padding: 0 0.7rem 0 0.5rem;
        .title {
          margin-bottom: 1rem;
        }
        .paragraph {
          margin-right: 3rem;
        }
      }
      .method-button {
        font-size: 0.8rem;
        font-weight: 600;
        height: 2.3rem;
        bottom: 7vh;
        box-shadow: 3px 3px 4px $darkest-blue;
      }
      .close-details-button {
        z-index: 20;
        top: 7.5vh;
        right: 1.5vw;
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .metiers-container {
    .global-metiers {
      .company-title {
        height: 9vh;
      }
      .activity-slogan {
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        top: 31vh;
      }
      .activity-description {
        font-size: 1.4rem;
      }
      .contact-button:hover {
        opacity: 1;
      }
      .method-details {
        top: 31vh;
        font-size: 1.3rem;
        width: 70%;
        height: 55vh;
        padding: 0 5rem;
      }
      .close-details-button {
        border: 4px solid black;
        border-radius: 3px;
        color: black;
        background: transparent;
        font-weight: 700;
        position: absolute;
        top: 33vh;
        right: 145px;
      }
    }
  }
}
</style>
