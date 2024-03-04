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
  margin: 2rem 0 0 2rem;
  color: #e9ecf2;
  background: linear-gradient(0.25turn, $dark-blue, $dark-blue, $base-blue);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0 1rem 1rem;
  font-size: 1.3rem;
  letter-spacing: 1.1px;
  text-shadow: 2px 2px 2px black;
  width: 65vw;
  min-height: 6vh;
}
</style>
