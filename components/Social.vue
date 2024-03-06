<template>
  <div :class="classesProp.childClasses[0]">L’expertise RH qu’il vous faut.</div>
  <div :class="classesProp.childClasses[1]">
    <div>
      SG Conseils vous accompagne face aux changements constants de la
      réglementation et du droit social.
    </div>
    <div>
      Grâce à un suivi régulier de la gestion du personnel, depuis la gestion de
      la paie jusqu’aux ressources humaines, restez confiant en toute situation.
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
