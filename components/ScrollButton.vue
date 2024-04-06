<template>
  <button class="scroll-button" @click="scrollDown()" :class="{ twinkle: isActive }">
    NOS MÉTIERS
  </button>
</template>

<script lang="ts" setup>
const isActive = ref(true);
const emit = defineEmits(["scrollTo"]);
const scrollDown = () => {
  isActive.value = false;
  emit("scrollTo");
};
</script>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$light-red: #d47472;
$base-white: #bec8da;
$base-black: #191c20;
@keyframes glitter {
  0% {
    background: $light-red;
    box-shadow: -1px 1px 18px $base-white;
  }
  50% {
    background: $base-red;
    box-shadow: 0px 0px 0px;
    width: 9rem;
    height: 3.2rem;
    letter-spacing: 1.2px;
  }
  100% {
    background: $light-red;
    box-shadow: -1px 1px 18px $base-white;
  }
}
.twinkle {
  animation: glitter 1.4s ease-in-out infinite;
}
.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px transparent solid;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  background: $base-red;
  width: 8rem;
  height: 3rem;
  border-radius: 5%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 9vh;
  box-shadow: 3px 3px 4px $darkest-blue;
}
.scroll-button:hover {
  box-shadow: 0 0;
}
@media screen and (max-width: 767px) {
  @keyframes glitter {
    0% {
      background: $light-red;
      box-shadow: -1px 1px 18px $base-white;
    }
    50% {
      background: $base-red;
      box-shadow: 0px 0px 0px;
      width: 8rem;
      height: 2.4rem;
      letter-spacing: 1.5px;
    }
    100% {
      background: $light-red;
      box-shadow: -1px 1px 18px $base-white;
    }
  }
  .twinkle {
    animation: glitter 1.4s ease-in-out infinite;
  }
  .scroll-button {
    height: 2.2rem;
    width: 7rem;
    font-size: 0.8rem;
    letter-spacing: 0.8px;
  }
}
</style>
