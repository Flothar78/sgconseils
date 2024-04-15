<template>
  <div :class="classesProp.childClasses[0]"></div>
  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">Un accompagnement complet</div>
    <div>
      A chaque étape du cycle de vie de votre entreprise, SG Conseils vous accompagne pour
      prendre les bonnes décisions. Nous vous offrons un véritable suivi de gestion et des
      conseils sur-mesure.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Aide à la prise de décision</div>
      <div class="paragraph">
        Nous rassemblons et organisons les informations pertinentes pour consolider vos
        choix.
      </div>
    </div>
    <div>
      <div class="title">Suivez votre activité</div>
      <div class="paragraph">
        Grâce à notre efficacité, réduisez votre charge administrative et maîtrisez votre
        activité.
      </div>
    </div>
    <div>
      <div class="title">Anticipez les risques</div>
      <div class="paragraph">
        Adoptez une approche globale de votre entreprise pour anticiper et prendre des
        mesures permettant d'éviter ou de réduire un risque.
      </div>
    </div>
    <div>
      <div class="title">Ajustez vos objectifs</div>
      <div class="paragraph">
        Etablissez des prévisions réalistes et ajustez vos objectifs grâce à nos conseils.
      </div>
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
