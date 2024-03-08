<template>
  <div class="global-metiers">
    <CompanyTitle class="company-business" :title="correctedId" />
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
const id = useRoute().params.id;
const correctedId =
  id === "comptabilite"
    ? id
        .toUpperCase()
        .split("")
        .map((x) => (x === "E" ? (x = "É") : x))
        .join("")
    : id.toUpperCase();

const parentClasses = ref(["activity-slogan", "activity-description"]);
</script>

<style lang="scss">
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
.global-metiers {
  padding-top: 12vh;
  position: relative;
  background-color: $base-blue;
  color: white;
  height: 90vh;
  .company-business {
    color: $base-white;
    width: 26vw;
    margin-top: 3.8rem;
    font-size: 1.5rem;
    text-shadow: 1px 1px 4px $base-blue;
    padding: 0;
  }
  .activity-slogan {
    color: $base-black;
    position: absolute;
    top: 45vh;
    left: 5vw;
    margin: 2.5rem 0 0 5rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  .activity-description {
    color: $base-black;
    position: absolute;
    background: $base-white;
    top: 64vh;
    height: 20vh;
    width: 50vw;
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
