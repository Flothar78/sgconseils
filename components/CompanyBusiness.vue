<template>
  <div class="company-activity">
    <div>Pour le développement de vos entreprises.</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$base-white: #bec8da;
$base-black: #191c20;
.company-activity {
  margin: 6.5rem 0 0 4rem;
  color: #e9ecf2;
  background: linear-gradient(
    0.25turn,
    $dark-blue,
    $dark-blue,
    $dark-blue,
    $base-blue
  );
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0 1rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-shadow: 1px 1px 4px $base-black;
  width: 63vw;
  min-height: 4vh;
  box-shadow: -4px 0px;
}
@media screen and (max-width: 699px) {
  .company-activity {
    font-size: 1rem;
    margin: 4rem 0 0 4rem;
    width: 60vw;
    height: 5vh;
    box-shadow: -6px 0px;
  }
}
</style>
