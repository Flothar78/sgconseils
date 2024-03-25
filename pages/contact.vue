<template>
  ()

  <div class="global-contact-page">
    <div class="form-and-anchor-container" id="form-anchor">
      <div class="contact-title">
        Pour toutes vos questions juridiques, comptables, sociales, de gestion,
        de conseil:
        <div class="form-invitation">Contactez nos consultants:</div>
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
          <Field as="textarea" name="message" id="message"></Field>
        </div>
        <button class="form-button" type="submit">Envoyer</button>
      </Form>
      <NuxtLink to="/contact/#map-anchor" id="scroll-to-map">
        Nous localiser</NuxtLink
      >
    </div>
    <div class="map-and-anchor-container" id="map-anchor">
      <NuxtLink href="#" to="/contact/#form-anchor" id="scroll-to-form"
        >Nous écrire
      </NuxtLink>
      <div class="map-container">
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
useSeoMeta({
  title: "Site des experts-comptable SGConseils à Toulouse",
  description:
    "Site qui présente les services de la société SGConseils, le juridique, la comptabilité, le conseil, l'informatique, le social, la gestion et l'audit.",
});
const onSubmit = async (values) => {
  const bodyContent = JSON.stringify(values);
  console.log(bodyContent);
  try {
    const response = await $fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    });
  } catch (error) {
    console.error("Erreur lors de la requête POST :", error);
  }
};
const validateEmail = (value) => {
  if (!value) {
    return "Votre adresse mail est requise.";
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "Mail du type: nom@exemple.com";
  }
  return true;
};
const validateCompany = (value) => {
  if (!value) {
    return "Le nom de la société est requis.";
  }
  return true;
};
const validateName = (value) => {
  if (!value) {
    return "Le nom d'un contact est requis.";
  }
  return true;
};
const zoom = ref(15);
</script>

<style scoped lang="scss">
$base-blue: #7d93b5;
$dark-blue: #425b8a;
$darkest-blue: #1c212f;
$base-red: #FC440F;
$light-red: #FF8811;
$base-white: #bec8da;
$base-black: #191c20;
.global-contact-page {
  position: relative;
  background-color: #bec8da;
  color: $base-black;
  .form-and-anchor-container {
    padding-top: 7rem;
    .contact-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 2rem 0 1rem 1rem;
      .form-invitation {
        padding-left: 2rem;
        font-style: italic;
        font-size: 1.2rem;
        font-weight: 300;
        text-shadow: 1px 1px 3px grey;
      }
    }
    .contact-form {
      border: 12px solid $darkest-blue;
      border-radius: 7%;
      background: white;
      height: 68vh;
      width: 60vw;
      margin-bottom: 4.5rem;
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .form-entry {
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem;
        .form-labels {
          color: $base-black;
          padding-bottom: 0.5rem;
        }
        .form-field {
          border: 2px solid $base-black;
          width: 65%;
          height: 4vh;
        }
        #message {
          border: 2px solid $base-black;
          width: 45vw;
          height: 8vh;
        }
        .error-container {
          height: 1rem;
          .error-message {
            color: red;
            font-size: 1rem;
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
        height: 4vh;
        width: 33%;
        border-radius: 7px;
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
      color: white;
      background: $base-red;
      position: absolute;
      right: 3vw;
      top: 89.7vh;
      border: 1px solid $base-black;
      height: 5vh;
      width: 15vw;
      border-radius: 7px;
      box-shadow: 4px 4px 6px $base-black;
    }
    #scroll-to-map:hover {
      box-shadow: 0 0 0;
    }
  }
  .map-and-anchor-container {
    padding-top: 20vh;
    height: 90vh;
    .map-container {
      border: 12px solid $darkest-blue;
      margin: 1rem 0 0 15rem;
      height: 68vh;
      width: 60vw;
      margin: 2.2rem 0 3rem 2rem;
      border-radius: 7px;
    }
    #scroll-to-form {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background: $base-red;
      position: absolute;
      right: 3vw;
      bottom: 15vh;
      border: 1px solid $base-black;
      height: 5vh;
      width: 15vw;
      border-radius: 7px;
      box-shadow: 4px 4px 6px $base-black;
    }
    #scroll-to-form:hover {
      box-shadow: 0 0 0;
    }
  }
}
@media screen and (max-width: 767px) {
  .global-contact-page {
    position: relative;
    background-color: #bec8da;
    color: $base-black;
    .form-and-anchor-container {
      height: 90vh;
      .contact-title {
        font-size: 0;
        margin: 0;
        padding-bottom: 1.5rem;
        padding-left: 0.5rem;
      }
      .contact-form {
        border: 12px solid $darkest-blue;
        border-radius: 5%;
        background: white;
        height: 60vh;
        width: 70vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .form-entry {
          display: flex;
          flex-direction: column;
          padding: 1rem 0 0 1rem;
          .form-labels {
            color: $base-black;
            padding-bottom: 0.25rem;
          }
          .form-field {
            border: 2px solid $base-black;
            width: 55vw;
            height: 3vh;
          }
          #message {
            border: 2px solid $base-black;
            width: 75%;
            height: 8vh;
          }
          .error-container {
            height: 1rem;
            .error-message {
              color: red;
              font-size: 0.8rem;
              letter-spacing: 0.8px;
            }
          }
        }
        .form-button {
          background: $base-red;
          color: white;
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 1.2px;
          height: 4vh;
          width: 45%;
          border-radius: 5px;
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
        right: 50%;
        transform: translate(50%);
        top: 88.3vh;
        border: 1px solid $base-black;
        height: 5vh;
        width: 45vw;
        border-radius: 7px;
        box-shadow: 4px 4px 6px $base-black;
        color: white;
        background: $base-red;
      }
    }
    .map-and-anchor-container {
      padding-top: 18.5vh;
      height: 90vh;
      .map-container {
        border: 12px solid $darkest-blue;
        border-radius: 10px;
        background: white;
        height: 60vh;
        width: 70vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      #scroll-to-form {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $base-black;
        background: white;
        position: absolute;
        bottom: 15vh;
        left: 50%;
        transform: translate(-50%);
        border: 1px solid $base-black;
        height: 5vh;
        width: 45vw;
        border-radius: 7px;
        box-shadow: 4px 4px 6px $base-black;
        color: white;
        background: $base-red;
      }
    }
  }
}
</style>
