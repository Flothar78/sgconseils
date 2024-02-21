<template>
  <NavBar />
  <div class="hero">Home page</div>
  <div class="expertises-cards">
    <div>
      <NuxtLink :to="`/metiers/juridique`">Page juridique</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/audit`">Page audit</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/comptabilite`">Page comptabilité</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/conseil`">Page conseil</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/gestion`">Page gestion</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/informatique`">Page informatique</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="`/metiers/social`">Page social</NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  padding-top: 12vh;
  position: relative;
  background-color: #425b8a;
  color: white;
  min-height: 90vh;
}
.expertises-cards {
  border: black 1px solid;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.expertises-cards div {
  width: 22vw;
}
</style>
