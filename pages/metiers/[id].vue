<template>
  <div class="metiers-container">
    <div class="global-metiers">
      <CompanyTitle class="company-title" :title="correctedId" />
      <Juridique v-if="id === 'juridique'" :childClasses="parentClasses" />
      <Gestion v-else-if="id === 'gestion'" :childClasses="parentClasses" />
      <Audit v-else-if="id === 'audit'" :childClasses="parentClasses" />
      <Comptabilite
        v-else-if="id === 'comptabilite'"
        :childClasses="parentClasses"
      />
      <Informatique
        v-else-if="id === 'informatique'"
        :childClasses="parentClasses"
      />
      <Conseil v-else-if="id === 'conseil'" :childClasses="parentClasses" />
      <Social v-else-if="id === 'social'" :childClasses="parentClasses" />
      <NuxtLink class="contact-button" to="/contact/#form-anchor"
        >Nous écrire</NuxtLink
      >

      <button class="method-button" @click="showDetails()">VOIR PLUS</button>
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
    padding-top: 7vh;
    position: relative;
    background-color: $base-white;
    color: $base-white;
    height: 93vh;
    .company-title {
      background: $dark-blue;
      width: 50%;
      height: 7vh;
      margin-top: 5rem;
      font-size: 1.2rem;
      color: white;
      padding: 0;
      box-shadow: 0 0;
      text-shadow: 2px 2px 5px $base-black;
      border-radius: 0 5px 5px 0;
    }
    .activity-description {
      position: relative;
      background: $dark-blue;
      top: 13vh;
      height: 35vh;
      width: 55vw;
      max-width: 750px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 10px;
      color: white;
      .activity-slogan {
        max-width: 70%;
        border: 1px solid $darkest-blue;
        margin-top: -1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $base-white;
        color: black;
        font-weight: 500;
        font-size: 1.1rem;
        letter-spacing: 0px;
        text-align: center;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        border-radius: 5px;
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
      top: 28vh;
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
      border: transparent solid 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 600;
      width: 10rem;
      height: 5vh;
      position: absolute;
      bottom: 7vh;
      right: 50%;
      transform: translate(50%);
      border-radius: 5px;
      background: $base-red;
      color: white;
      padding: 0.5rem;
      box-shadow: 2px 2px 3px $darkest-blue;
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
      top: 30vh;
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
      height: 93vh;
      .company-title {
        width: 100%;
        font-size: 1.1rem;
        text-shadow: 2px 2px 1px $base-black;
        border-radius: 0;
        background: $dark-blue;
        height: 7vh;
        margin-top: 7vh;
        font-size: 1.2rem;
        color: white;
        padding: 0;
        box-shadow: 0 0;
        text-shadow: 2px 2px 5px $base-black;
      }
      .activity-description {
        top: 16.5vh;
        font-size: 1rem;
        width: 60vw;
        height: 40vh;
        justify-content: space-around;
        padding: 1rem 1rem 1.5rem 1rem;
        .activity-slogan {
          margin-top: 0;
          margin-bottom: 2rem;
          text-align: center;
          color: black;
          font-size: 1rem;
          padding: 0.5rem;
          border-radius: 7px;
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
        font-size: 1rem;
        border-radius: 0;
        position: absolute;
        z-index: 20;
        top: 13vh;
        left: 0%;
        transform: translateX(0%);
        justify-content: flex-end;
        color: $base-black;
        border: $darkest-blue 0 solid;
        background: $base-white;
        width: 100%;
        height: 87vh;
        padding: 2rem 0.7rem 2rem 1rem;
        .title {
          margin-bottom: 0.3rem;
          margin-right: 3rem;
          font-size: 1rem;
        }
        .paragraph {
          margin-right: 3rem;
          margin-bottom: 1.5rem;
        }
      }
      .method-button {
        position: absolute;
        top: 81vh;
        font-size: 0.8rem;
        font-weight: 600;
        height: 2.2rem;
        width: 7rem;
        box-shadow: 2px 2px 3px $darkest-blue;
      }
      .close-details-button {
        z-index: 20;
        top: 3.5rem;
        right: 0.4rem;
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .metiers-container {
    .global-metiers {
      .contact-button:hover {
        opacity: 1;
      }
      .method-details {
        width: 70%;
        height: 54vh;
        padding: 0 5rem;
      }
      .close-details-button {
        border: 4px solid black;
        border-radius: 3px;
        color: black;
        background: transparent;
        font-weight: 700;
        position: absolute;
        top: 30vh;
        right: 145px;
      }
    }
  }
}
</style>
