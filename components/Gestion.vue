<template>
  <div :class="classesProp.childClasses[0]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M19 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"
      />
      <path
        fill="currentColor"
        d="M17 24H4V10h24v5h2v-5a2.002 2.002 0 0 0-2-2h-6V4a2.002 2.002 0 0 0-2-2h-8a2.002 2.002 0 0 0-2 2v4H4a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h13ZM12 4h8v4h-8Z"
      />
    </svg>
  </div>
  <div :class="classesProp.childClasses[1]">
    Conseil en gestion, un accompagnement complet.
  </div>
  <div :class="classesProp.childClasses[2]">
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
