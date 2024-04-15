<template>
  <div :class="classesProp.childClasses[0]"></div>
  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">
      Pas uniquement une histoire de chiffres
    </div>
    <div>
      SG Conseils vous accompagne sur la gestion de votre comptabilité. Nous établissons
      votre bilan annuel, compte de résultat et nous effectuons vos déclarations fiscales.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="paragraph">
        Grâce à nos analyses et nos conseils d’expert, nous vous aidons à anticiper les
        décisions à prendre pour favoriser votre développement.
      </div>
    </div>
    <div>
      <div class="title">En ligne et interactive</div>
      <div class="paragraph">
        Optimisez votre organisation comptable grâce à nos outils en ligne : restitutez en
        ligne vos documents et accédez au partage de gestion complet.
      </div>
    </div>
    <div>
      <div class="title">Claire et proactive</div>
      <div class="paragraph">
        Nous garantissons une information chiffrée fiable, rapide et commentée
        indispensable à vos décisions stratégiques.
      </div>
    </div>
    <div>
      <div class="title">Libérez-vous</div>
      <div class="paragraph">
        Faites confiance à notre cabinet d’expertise comptable et concentrez vos forces
        sur votre coeur de métier.
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
