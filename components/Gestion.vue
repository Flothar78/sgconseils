<template>
  <div :class="classesProp.childClasses[0]">
    Conseil en gestion, un accompagnement complet.
  </div>
  <div :class="classesProp.childClasses[1]">
    <div>
      A chaque étape du cycle de vie de votre entreprise, SG Conseils vous
      accompagne pour prendre les bonnes décisions.
    </div>
    <div>
      Nous vous offrons un véritable suivi de gestion et des conseils
      sur-mesure.
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
