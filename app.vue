<template>
  <div @click="closeMenu()">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@use "~/assets/scss/main.scss";
</style>

<script setup lang="ts">
const isActive = useState("isActive");
const closeMenu = () => {
  if (isActive.value) {
    isActive.value = !isActive.value;
  }
};
</script>
