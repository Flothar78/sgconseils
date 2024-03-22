<template>
  <div class="team-page-title">
    <div>Les experts de</div>
    <div class="title-company">SGConseils</div>
  </div>
  <div class="team-container">
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
        Pilar Sauvagnac
        <div class="member-function">Assistante comptable</div>
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
    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="2vw" />
      <div class="member-name">
        Cathy Debailleul
        <div class="member-function">Responsable sociale</div>
      </div>
    </div>
    <div class="member-box">
      <NuxtImg class="member-img" src="/logo_sg_conseils.png" sizes="4vw" />
      <div class="member-name">
        Evelyne Sauvagnac
        <div class="member-function">Présidente</div>
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
  letter-spacing: 0.04rem;
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
  height: 79vh;
  padding: 2vh 0;
  background: $base-white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
  .member-box {
    border: solid 5px $darkest-blue;
    background: $base-white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    width: 25vw;
    height: 15vh;
    .member-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1vh;
      .member-function {
        font-size: 0.8rem;
      }
    }
  }
}
@media screen and (max-width: 676px) {
  .team-page-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    letter-spacing: 0.04rem;
    padding-top: 7vh;
    height: 15vh;
    .title-company {
      font-weight: 700;
      padding-left: 0.5rem;
      text-shadow: 1px 1px 1px $base-red;
    }
  }
  .team-container {
    height: 220vh;
    padding: 4rem 0;
    background: $base-white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5vh;
    .member-box {
      border: solid 5px $darkest-blue;
      background: $base-white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      width: 50vw;
      height: 15vh;
      .member-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1vh;
        .member-function {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
