<template>
  <div @click="closeMenu()">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@use "~/assets/scss/main.css";
</style>

<script setup lang="ts">
const isActive = useState("isActive");

const closeMenu = () => {
  const menuClasses = Object.values(event.target.classList);
  const regex = /metiers-item|menu-list|menu-item/;

  const menuClassesMatch = menuClasses.some((className) =>
    regex.test(className)
  );
  console.log(menuClassesMatch);
  if (isActive.value && menuClassesMatch) {
    isActive.value = isActive.value;
  } else if(isActive.value && !menuClassesMatch){
    isActive.value = !isActive.value;
  }
};
</script>
