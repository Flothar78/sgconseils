<template>
  <div :class="classesProp.childClasses[0]"></div>
  <div :class="classesProp.childClasses[2]">
    <div :class="classesProp.childClasses[1]">Gagnez du temps.</div>
    <div>
      Nous mettons en place une organisation administrative, comptable et informatique
      optimale pour vous libérer du temps. Nous nous adaptons à votre environnement de
      travail, vos habitudes et vos contraintes.
    </div>
  </div>
  <div :class="[classesProp.childClasses[3], classesProp.childClasses[4]]">
    <div>
      <div class="title">Simplifiez votre gestion</div>
      <div class="paragraph">
        Nous convenons avec vous du meilleur outil qui pourra vous accompagner au
        quotidien. Simplifiez vous les démarches administratives pour vous concentrer sur
        vos projets.
      </div>
    </div>
    <div>
      <div class="title">Gagnez du temps</div>
      <div class="paragraph">
        Grâce à notre gestion optimale, libérez vous du temps et consacrez vous totalement
        à votre activité, trouvez de nouveaux clients et développez votre chiffre
        d’affaires.
      </div>
    </div>
    <div>
      <div class="title">Utilisez un outil adapté</div>
      <div class="paragraph">
        Nous vous aidons à prendre en main vos outils informatiques et les adaptons à vos
        besoins.
      </div>
    </div>
    <div>
      <div class="title">Transparence des informations</div>
      <div class="paragraph">
        Accédez en temps réel à toutes les informations, en toute indépendance et
        transparence.
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
