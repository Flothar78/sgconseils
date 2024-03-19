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
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Site des experts-comptable SGConseils à Toulouse",
  description:
    "Page qui présente end étail une des expertises de SGConseils, le juridique, la comptabilité, le conseil, l'informatique, le social, la gestion et l'audit.",
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

const parentClasses = ref(["svg-icon","activity-slogan", "activity-description"]);
</script>

<style lang="scss">
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
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
    margin-top: 3rem;
    font-size: 1.5rem;
    text-shadow: 3px 3px 2px $base-black;
    padding: 0;
    box-shadow: 6px 6px 4px $base-black;
  }
  .svg-icon{
margin: -3.1rem 0 0 4rem;
color: white;
  }
  .activity-slogan {
    background: $base-white;
    color: $base-black;
    font-weight: 500;
    font-size: 2rem;
    min-width: 55vw;
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
    top: 64vh;
    height: 25vh;
    width: 55vw;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    font-size: 1.2rem;
  }
}
</style>
