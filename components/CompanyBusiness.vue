<template>
  <div class="company-activity">
    <div>Pour le développement de vos entreprises.</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
.company-activity {
  margin: 5rem 0 0 4rem;
  color: #e9ecf2;
  background: linear-gradient(
    0.25turn,
    $dark-blue,
    $dark-blue,
    $dark-blue,
    $base-blue,
    $base-blue
  );
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0 1rem 1rem;
  font-size: 1.3rem;
  letter-spacing: 1.2px;
  text-shadow: 1px 1px 1px black;
  width: 75vw;
  min-height: 4vh;
  box-shadow: -4px 0px;
}
</style>
