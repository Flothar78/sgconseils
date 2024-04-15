<template>
  <div :class="classesProp.childClasses[0]"></div>
  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">Mieux vous accompagner au quotidien</div>
    <div>
      Nous nous impliquons dans la stratégie de votre entreprise et ses projets de
      croissance. Nous apportons notre vision, en la compilant à vos objectifs.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Créateur d’entreprise</div>
      <div class="paragraph">
        Afin que vous maîtrisiez vos coûts, nous nous engageons à vous accompagner de
        manière personnalisée. Nous vous conseillons en fonction de vos besoins et de vos
        attentes.
      </div>
    </div>
    <div>
      <div class="title">Ressources humaines</div>
      <div class="paragraph">
        Découvrez les solutions de ressource humaine et de paie conçues pour votre
        entreprise. Nos services et nos experts vous permettent de trouver la solution la
        plus adaptée.
      </div>
    </div>
    <div>
      <div class="title">Comptabilité</div>
      <div class="paragraph">
        Nous vous accompagnons dans vos choix et décisions financières, pour vous aider à
        comprendre votre comptabilité, la maîtriser et l’optimiser.
      </div>
    </div>
    <div>
      <div class="title">Juridique</div>
      <div class="paragraph">
        Nous nous engageons à donner un avis professionnel concernant le fond ou la
        procédure de la loi en relation avec votre situation.
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
