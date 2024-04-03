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
      <NuxtLink class="contact-button" href="#" to="/contact/#form-anchor"
        >Nous écrire</NuxtLink
      >
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
$base-red: #fc440f;
$light-red: #ff8811;
$base-white: #bec8da;
$base-black: #191c20;
.metiers-container {
  background-color: $base-blue;
  .global-metiers {
    max-width: 1440px;
    margin: auto;
    padding-top: 10vh;
    position: relative;
    background-color: $base-blue;
    color: $base-white;
    height: 90vh;
    .company-title {
      background: $dark-blue;
      width: 45vw;
      margin-top: 1.9rem;
      font-size: 1.5rem;
      text-shadow: 3px 3px 2px $base-black;
      padding: 0;
      box-shadow: 6px 6px 4px;
    }
    .svg-icon {
      margin: -3.2rem 0 0 2rem;
      color: white;
    }
    .activity-slogan {
      background: linear-gradient(0.25turn, $base-white, $base-white, $base-blue);
      color: $base-black;
      font-weight: 500;
      font-size: 1.3rem;
      letter-spacing: 0.1px;
      width: 70vw;
      position: absolute;
      top: 38vh;
      right: 44.8%;
      transform: translateX(50%);
      // margin-top: 2.5rem;
      padding: 1rem 2rem;
    }
    .activity-description {
      color: $base-black;
      position: absolute;
      background: $base-white;
      top: 50vh;
      height: 25vh;
      width: 60vw;
      right: 50%;
      transform: translateX(50%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 2rem;
      font-size: 1.2rem;
    }
    .contact-button {
      font-family: Arial;
      text-decoration: none;
      position: absolute;
      bottom: 2vh;
      right: 0;
      font-size: 0.8rem;
      background: $base-red;
      color: white;
      padding: 0.5rem;
      border-radius: 5px;
    }
    .contact-button:hover {
      opacity: 1;
      background: $base-red;
    }
    .method-details {
      font-size: 1.2rem;
      visibility: hidden;
      position: absolute;
      top: 27vh;
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
      border-radius: 5px;
      padding: 2rem 2rem;
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
    }
    .close-details-button {
      visibility: hidden;
      border: 4px solid black;
      border-radius: 3px;
      color: black;
      background: transparent;
      font-weight: 700;
      position: absolute;
      top: 29vh;
      right: 8vw;
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
        position: absolute;
        left: 0;
        min-width: 60vw;
        margin: 2.2rem 0 0 0;
        font-size: 1.2rem;
        text-shadow: 2px 2px 3px $base-black;
      }
      .svg-icon {
        color: transparent;
      }
      .activity-slogan {
        background: transparent;
        width: 0;
        height: 0;
        font-size: 0;
      }
      .activity-description {
        font-size: 1.2rem;
        height: 50vh;
        width: 65vw;
        top: 35vh;
        justify-content: space-around;
      }
      .contact-button {
        font-size: 0.8rem;
        bottom: 77vh;
        padding: 0.3rem;
      }
      .method-details {
        font-size: 1.2rem;
        height: 60vh;
        border-radius: 10px;
        position: absolute;
        z-index: 20;
        top: 7vh;
        left: 0%;
        transform: translateX(0%);
        display: flex;
        flex-direction: space-between;
        color: $base-black;
        border: $darkest-blue 0 solid;
        background: $base-white;
        width: 100vw;
        height: 93vh;
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
        bottom: 5vh;
        box-shadow: 3px 3px 4px $darkest-blue;
      }
      .close-details-button {
        z-index: 20;
        top: 7.5vh;
        right: 1vw;
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
        font-size: 1.5rem;
        letter-spacing: 1px;
        top: 31vh;
      }
      .activity-description {
        top: 55vh;
        height: 28vh;
        font-size: 1.4rem;
      }
      .contact-button:hover {
        opacity: 1;
      }
      .method-details {
        top: 29vh;
        font-size: 1.3rem;
        width: 60%;
        height: 55vh;

        padding: 0 15rem 0 15rem;
      }
      .close-details-button {
        border: 4px solid black;
        border-radius: 3px;
        color: black;
        background: transparent;
        font-weight: 700;
        position: absolute;
        top: 31vh;
        right: 4%;
      }
    }
  }
}
</style>
