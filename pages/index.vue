<template>
  <div>Home page</div>

  <div>
    <NuxtLink :to="`/metiers/juridique`">Lien pour la page juridique</NuxtLink>
  </div>
  <div>
    <NuxtLink :to="`/metiers/audit`">Lien pour la page audit</NuxtLink>
  </div>
  <div>
    <NuxtLink :to="`/metiers/comptabilite`"
      >Lien pour la page comptabilité</NuxtLink
    >
  </div>
  <div>
    <NuxtLink :to="`/metiers/conseil`">Lien pour la page conseil</NuxtLink>
  </div>
  <div>
    <NuxtLink :to="`/metiers/gestion`">Lien pour la page gestion</NuxtLink>
  </div>
  <div>
    <NuxtLink :to="`/metiers/informatique`"
      >Lien pour la page informatique</NuxtLink
    >
  </div>
  <div>
    <NuxtLink :to="`/metiers/social`">Lien pour la page social</NuxtLink>
  </div>
</template>

<script setup>
middleware: "errorOnMetiers";
</script>

<style lang="scss" scoped></style>
