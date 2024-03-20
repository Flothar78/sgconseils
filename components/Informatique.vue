<template>
  <div :class="classesProp.childClasses[0]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 15 15"
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M9.5 14.5h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm0 0H4m2.5-3v3m2-9h6m-4.5 6h3m-11.5-8h7v8h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z"
      />
    </svg>
  </div>
  <div :class="classesProp.childClasses[1]">
    Outils informatiques, gagnez du temps.
  </div>
  <div :class="classesProp.childClasses[2]">
    <div>
      Nous mettons en place une organisation administrative, comptable et
      informatique optimale pour vous libérer du temps, ce qui vous permet de
      vous consacrer pleinement à votre activité.
    </div>
    <div>
      Nous nous adaptons à votre environnement de travail, vos habitudes et vos
      contraintes.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Simplifiez votre gestion</div>
      Nous convenons avec vous du meilleur outil qui pourra vous accompagner au
      quotidien. Simplifiez vous les démarches administratives pour vous
      concentrer sur vos projets.
    </div>
    <div>
      <div class="title">Gagnez du temps</div>
      Grâce à notre gestion optimale, libérez vous du temps et consacrez vous
      totalement à votre activité, trouvez de nouveaux clients et développez
      votre chiffre d’affaires.
    </div>
    <div>
      <div class="title">Utilisez un outil adapté</div>
      Nous vous aidons à prendre en main vos outils informatiques et les
      adaptons à vos besoins.
    </div>
    <div>
      <div class="title">Transparence des informations</div>
      Accédez en temps réel à toutes les informations, en toute indépendance et
      transparence. ils.
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
