<template>
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
    <NuxtLink class="contact-button" href="#" to="/contact"
      >Nous écrire</NuxtLink
    >
    <button class="method-button" @click="showDetails()">
      Voir nos méthodes
    </button>
    <button class="close-details-button" @click="showDetails()">X</button>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Site des experts-comptable SGConseils à Toulouse",
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
$light-red: #d94556;
$base-white: #bec8da;
$base-black: #191c20;
.global-metiers {
  padding-top: 10vh;
  position: relative;
  background-color: $base-blue;
  color: $base-white;
  height: 90vh;
  .company-title {
    background: $dark-blue;
    width: 45vw;
    margin-top: 3.2rem;
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
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    width: 70vw;
    position: absolute;
    top: 30vh;
    right: 50%;
    transform: translateX(50%);
    margin-top: 2.5rem;
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
    justify-content: center;
    padding: 0 2rem;
    font-size: 1.2rem;
  }
  .contact-button {
    text-decoration: none;
    position: absolute;
    bottom: 0;
    right: 0;
    background: $light-red;
    color: white;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 5px;
  }
  .contact-button:hover {
    opacity: 1;
  }
  .method-details {
    font-size: 1rem;
    visibility: hidden;
    position: absolute;
    top: 30vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: $base-black;
    border: $darkest-blue 10px solid;
    background: $base-white;
    width: 80vw;
    height: 50vh;
    border-radius: 5px;
    padding: 0 0 1rem 1rem;
    .title {
      color: $darkest-blue;
      font-weight: 900;
    }
  }
  .method-button {
    text-decoration: none;
    position: absolute;
    bottom: 0;
    border-radius: 5px;
    background: $base-red;
    color: white;
    padding: 0.5rem;
    color: white;
    font-size: 1rem;
    background: $base-red;
    margin: 0.5rem;
    border-radius: 5px;
    box-shadow: 2px 2px 4px;
  }
  .close-details-button {
    visibility: hidden;
    border: 2px solid $base-red;
    border-radius: 3px;
    color: $base-red;
    background: transparent;
    font-weight: 700;
    position: absolute;
    top: 32vh;
    right: 10vw;
  }
  .visible {
    visibility: visible;
  }
}

@media screen and (max-width: 767px) {
  .global-metiers {
    .company-title {
      position: absolute;
      left: 0;
      min-width: 60vw;
      margin: 4.5rem 0 0 0;
      font-size: 1.2rem;
      text-shadow: 2px 2px 3px $base-black;
    }
    .svg-icon {
      color: transparent;
    }
    .activity-slogan {
      top: 35vh;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.2px;
    }
    .activity-description {
      height: 30vh;
      top: 58vh;
      justify-content: space-around;
      font-size: 1rem;
    }
    .contact-button {
      opacity: 0.5;
    }
    .method-details {
      font-size: 1rem;
      height: 60vh;
      border-radius: 10px;
      padding: 0 0.5rem;
      .paragraph {
        margin: 0 0;
      }
    }
  }
}
//@media screen and (min-width: 1180px) {
//  .global-metiers {
//    .method-details {
//      font-size: 1.7rem;
//      height: 60vh;
//      border-radius: 10px;
//      padding: 0 1rem;
//      .paragraph {
//        margin: 0 0;
//      }
//    }
//  }
//}
</style>
