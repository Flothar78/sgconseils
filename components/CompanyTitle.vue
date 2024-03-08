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
$base-white: #bec8da;
$base-black: #191c20;
.company-name {
  background: linear-gradient(
    0.25turn,
    $base-blue,
    $dark-blue,
    $dark-blue,
    $dark-blue
  );
  color: #e9ecf2;
  text-shadow: 1px 1px 1px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-shadow: 2px 2px 8px $base-black;
  font-weight: bold;
  letter-spacing: 1.4px;
  width: 40vw;
  height: 9vh;
  box-shadow: 6px 0px;
}
@media screen and (max-width: 699px) {
  .company-name {
    background: linear-gradient(0.3turn, $base-blue, $dark-blue, $dark-blue);
    font-size: 1.5rem;
    width: 100%;
    height: 8vh;
    margin-left: -3rem;
  }
}
</style>
