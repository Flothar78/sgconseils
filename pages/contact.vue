<template>
  <div class="global-contact-page">
    <div class="contact-title">
      Pour toutes vos questions juridiques, comptables, sociales, de gestion, de
      conseil:
    </div>
    <div style="padding-left: 2rem; font-size: 1.2rem">
      Contactez nos consultants:
    </div>

    <Form @submit="onSubmit" class="contact-form">
      <div class="form-entry">
        <div class="form-labels">Votre adresse e-mail:</div>
        <Field
          class="form-field"
          type="email"
          name="email"
          :rules="validateEmail"
        />
        <div class="error-container">
          <ErrorMessage name="email" class="error-message" />
        </div>
      </div>
      <div class="form-entry">
        <div class="form-labels">Votre société:</div>
        <Field
          class="form-field"
          type="text"
          name="company"
          :rules="validateCompany"
        />
        <div class="error-container">
          <ErrorMessage name="company" class="error-message" />
        </div>
      </div>
      <div class="form-entry">
        <div class="form-labels">Votre nom:</div>
        <Field
          class="form-field"
          type="text"
          name="lastname"
          :rules="validateName"
        />
        <div class="error-container">
          <ErrorMessage name="lastname" class="error-message" />
        </div>
      </div>
      <div class="form-entry">
        <div class="form-labels">Votre message:</div>
        <textarea id="message"></textarea>
      </div>
      <button class="form-button" type="submit">Envoyer</button>
    </Form>
    <NuxtLink :to="`/contact/#map-anchor`" id="scroll-to-map"
      >Retrouvez-nous avec OpenStreetMap:</NuxtLink
    >
    <div id="map-anchor">
      <NuxtLink :to="`/contact/`" id="scroll-to-form"
        >Retourner au formulaire de contact:</NuxtLink
      >
      <div id="map-container">
        <LMap
          ref="map"
          :zoom="zoom"
          :center="[43.58955925435832, 1.4896027423284606]"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            layer-type="base"
            name="OpenStreetMap"
          />
          <LCircleMarker
            :lat-lng="[43.589559, 1.4896]"
            :radius="35"
            color="red"
          />
        </LMap>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
const onSubmit = (values) => {
  console.log(JSON.stringify(values));
};
const validateEmail = (value) => {
  if (!value) {
    return "Nous avons besoin d'une adresse mail.";
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "Un mail valide est du type: nom@exemple.com.";
  }
  return true;
};
const validateCompany = (value) => {
  if (!value) {
    return "Nous avons besoin du nom de votre société.";
  }
  return true;
};
const validateName = (value) => {
  if (!value) {
    return "Le nom de la personne à contacter est requis.";
  }
  return true;
};
const zoom = ref(15);
</script>

<style scoped lang="scss">
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #b12434;
$base-white: #bec8da;
$base-black: #191c20;
.global-contact-page {
  padding-top: 10vh;
  position: relative;
  background-color: #bec8da;
  color: $base-black;
  height: 195vh;
  .contact-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 2rem 0 1rem 1rem;
  }
  .contact-form {
    border: 12px solid $darkest-blue;
    border-radius: 5%;
    background: white;
    height: 70vh;
    width: 60%;
    margin: 3.5vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .form-entry {
      display: flex;
      flex-direction: column;
      padding: 5% 0 0 5%;
      .form-labels {
        color: $base-black;
        padding-bottom: 0.5rem;
      }
      .form-field {
        border: 2px solid $base-black;
        width: 65%;
        height: 3vh;
      }
      #message {
        border: 2px solid $base-black;
        width: 75%;
        height: 12vh;
      }
      .error-container {
        height: 1rem;
        .error-message {
          margin-top: 1vh;
          color: red;
          font-size: 0.8rem;
          letter-spacing: 1.1px;
        }
      }
    }
    .form-button {
      background: $base-red;
      color: white;
      font-size: 1.1rem;
      font-weight: 900;
      letter-spacing: 1.2px;
      height: 8%;
      width: 33%;
      border-radius: 7%;
      margin: auto;
      box-shadow: 4px 4px 6px $base-black;
    }
    .form-button:hover {
      box-shadow: 0 0 0;
    }
  }
  #scroll-to-map {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $base-black;
    background: white;
    position: absolute;
    right: 3vw;
    top: 40vh;
    border: 4px solid black;
    height: 15vh;
    width: 15vw;
  }
  #map-anchor {
    border: solid 2px transparent;
    padding-bottom: 15vh;
    #scroll-to-form {
      height: 15vh;
      width: 15vw;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $base-black;
      background: white;
      position: absolute;
      bottom: 60vh;
      left: 4vw;
      border: 4px solid black;
    }
    #map-container {
      border: 12px solid $darkest-blue;
      margin: 15vh 0 0 33vw;
      height: 68vh;
      width: 60%;
    }
  }
}
</style>
