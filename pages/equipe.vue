<template>
  <div class="team-page-title">
    Les experts de
    <div class="title-company">SGConseils</div>
  </div>
  <div class="team-container">
    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="4vw" />
      <div class="member-name">
        Evelyne Sauvagnac
        <div class="member-function">Présidente</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Alexandre Fis
        <div class="member-function">Chargé de mission</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Nadège Frechinos
        <div class="member-function">Collaboratrice comptable</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Lola Lahille
        <div class="member-function">Collaboratrice comptable</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Charles Rapp
        <div class="member-function">Assistant comptable</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Henrique Da Costa
        <div class="member-function">Assistant comptable</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Pilar Sauvagnac
        <div class="member-function">Assistante comptable</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Cathy Debailleul
        <div class="member-function">Responsable sociale</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Valérie Testet
        <div class="member-function">Collaboratrice sociale</div>
      </div>
    </div>

    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Laurent Sauvagnac
        <div class="member-function">Responsable juridique</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
$base-grey: #858384;
.team-page-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  padding-top: 7vh;
  height: 10vh;
  .title-company {
    color: $darkest-blue;
    font-size: 2.2rem;
    font-weight: 700;
    padding-left: 0.5rem;
    text-shadow: 1px 1px 1px $base-red;
  }
}
.team-container {
  height: 83vh;
  background: $base-white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .member-box {
    border: solid 5px $darkest-blue;
    background: $base-white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    width: 15vw;
    height: 20vh;
    .member-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1vh;
    }
  }
}
</style>
