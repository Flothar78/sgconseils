<template>
  <div :class="classesProp.childClasses[0]"></div>

  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">L’expertise RH qu’il vous faut</div>
    <div>
      SG Conseils vous accompagne face aux changements constants de la réglementation et
      du droit social. Par un suivi régulier de la gestion du personnel, restez toujours
      confiant.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="paragraph">
        Il est parfois difficile d’y voir clair sur la règlementation en vigueur. Nous
        vous accompagnons pour gérer les congés au sein de votre entreprise.
      </div>
    </div>
    <div>
      <div class="title">Paie</div>
      <div class="paragraph">
        Le bulletin de paie est devenu un document complet mais aussi plus complexe.
        Faites confiance à nos experts pour éditer ces supports essentiels à votre
        activité.
      </div>
    </div>
    <div>
      <div class="title">Recrutement</div>
      <div class="paragraph">
        Le recrutement est essentiel à votre entreprise mais peut s’avérer compliqué. Vous
        apportez des conseils dans le développement de votre entreprise, c’est notre
        mission.
      </div>
    </div>
    <div>
      <div class="title">Social</div>
      <div class="paragraph">
        Les réformes impactent régulièrement les métiers RH et poussent à une réactivité
        accrue, la réforme de la formation professionnelle en est une illustration. Restez
        à jour grâce à nos conseils.
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
