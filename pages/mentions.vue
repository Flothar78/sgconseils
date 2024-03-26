<template>
  <div class="mentions-container">
    <div class="mentions-items">
      <div class="mentions-title">1. RESPONSABLE ÉDITORIAL</div>
      <div>
        <div>Guillaume Lamaze</div>
        <div>36 RUE D ORAN 75018 PARIS</div>
        <div>SIREN 885342592</div>
      </div>
    </div>
    <div class="mentions-items">
      <div class="mentions-title">2. RÉALISATION DU SITE</div>
      <div>
        <div>Webdesign et développement :</div>
        <div>Guillaume Lamaze</div>
        <div>36 RUE D ORAN 75018 PARIS</div>
        <div>SIREN 885342592</div>
      </div>
    </div>
    <div class="mentions-items">
      <div class="mentions-title">3. PROPRIÉTÉ INTELLECTUELLE</div>
      <div>
        Tous les éléments contenus sur ce site internet sont protégés par le
        Code de la Propriété Intellectuelle et sont la propriété de SG CONSEILS.
        Toute reproduction et toute utilisation de copie réalisée à d’autres
        fins sans autorisation écrite de SG CONSEILS, est expressément
        interdite.
      </div>
    </div>
    <div class="mentions-items">
      <div class="mentions-title">4. PROTECTION DES DONNÉES PERSONELLES</div>
      <div>
        Certaines informations et données concernant l’internaute peuvent être
        recueillies via le formulaire « contact ». Ces informations et données
        peuvent être exploitées par SG CONSEILS pour répondre aux questions
        éventuelles de l’internaute. Ces informations et données sont également
        conservées à des fins de sécurité, afin de respecter les obligations
        légales et réglementaires. Conformément à la loi N° 78-17 du 6 janvier
        1978 « Informatique et libertés », vous disposez, à tout moment, d’un
        droit d’accès, de modification, de rectification et de suppression des
        données vous concernant. Pour cela vous pouvez en faire la demande en
        envoyant un mail à CONTACT@SGCONSEILS.COM en explicitant votre demande.
      </div>
    </div>
    <div class="mentions-items">
      <div class="mentions-title">5. RESPONSABILITÉS</div>
      <div>
        Le site sgconseils.com est édité par Guillaume Lamaze. Il s’agit d’un site vitrine
        qui ne peut aucunement être assimilé à un site de vente en ligne
        intégrant un dispositif de passation de commande en ligne. Guillaume Lamaze décline
        toute responsabilité en cas d’interruption du site (incident technique
        serveur) d’attaques extérieures (bogues, modification des contenus suite
        à une cyber-attaque, etc). De plus, Guillaume Lamaze n’apporte aucune garantie
        quant à l’utilisation des informations présentes sur le site et ne sera
        pas responsable du préjudice ou dommage pouvant résulter de
        l’utilisation par un utilisateur du site des informations présentes sur
        le site, ni d’erreurs ou omissions dans celles-ci, de défauts ou
        d’interruptions dans leur fourniture ou de l’indisponibilité de tout ou
        partie de celles-ci.
      </div>
    </div>
    <div class="mentions-items">
      <div class="mentions-title">6. MODIFICATIONS</div>
      <div>
        SG CONSEILS peut modifier ses services et contenus sans préavis et sans
        autre formalité que de déclarer ces modifications dans ses conditions
        générales et particulières en ligne.
      </div>
    </div>
    <NuxtLink class="home-button" to="/#accueil">ACCUEIL</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #fc440f;
$light-red: #ff8811;
$base-white: #bec8da;
$base-black: #191c20;
.mentions-container {
  background: $base-white;
  padding: 7vh 2rem 3vh 2rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  .mentions-items {
    .mentions-title {
      font-weight: 700;
      margin: 1rem 0;
    }
  }
}
.home-button {
  background: $base-red;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  text-decoration: none;
  color: $base-white;
  font-weight: 700;
  border: 2px solid $base-black;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top:2rem;
}
</style>
