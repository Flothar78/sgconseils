<template>
  <div class="company-name">{{ title }}</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "SG CONSEILS",
  },
});
</script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
.company-name {
  background: linear-gradient(
    0.25turn,
    $base-blue,
    $dark-blue,
    $dark-blue,
    $darkest-blue
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-shadow: 2px 2px 8px $base-black;
  font-weight: bold;
  letter-spacing: 1.4px;
  width: 40vw;
  height: 9vh;
  box-shadow: 6px 0px;
}
@media screen and (max-width: 767px) {
  .company-name {
    font-size: 1.2rem;
    margin-right: -1rem;
    width: 100%;
    margin-bottom: -3rem;
    height: 7vh;
  }
}
</style>
