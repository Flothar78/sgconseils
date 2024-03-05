<template>
  <div class="global-metiers">
    <CompanyTitle class="company-business" />
    <div>
      <Juridique v-if="id === 'juridique'" />
      <Gestion v-else-if="id === 'gestion'" />
      <Audit v-else-if="id === 'audit'" />
      <Comptabilite v-else-if="id === 'comptabilite'" />
      <Informatique v-else-if="id === 'informatique'" />
      <Conseil v-else-if="id === 'conseil'" />
      <Social v-else-if="id === 'social'" />
    </div>
  </div>
</template>

<script setup>
const id = useRoute().params.id;

</script>

<style scoped lang="scss">
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-white: white;
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
}
</style>
