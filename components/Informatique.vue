<template>
  <div :class="classesProp.childClasses[0]">
    Outils informatiques, gagnez du temps.
  </div>
  <div :class="classesProp.childClasses[1]">
    <div>
      Nous mettons en place une organisation administrative, comptable et
      informatique optimale pour vous libérer du temps, ce qui vous permet de vous consacrer
      pleinement à votre activité.
    </div>
    <div>
      Nous nous adaptons à votre environnement de travail, vos habitudes et vos
      contraintes.
    </div>
  </div>
</template>

<script setup>
const classesProp = defineProps({
  childClasses: {
    type: Array,
  },
});
</script>
