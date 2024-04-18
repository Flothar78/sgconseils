<template>
  <div class="contact-container">
    <div class="global-contact-page">
      <div class="form-and-anchor-container" id="form-anchor">
        <div class="form-invitation">Contactez nous:</div>
        <Form
          @submit="onSubmit"
          @click="hideMessageConfirm"
          class="contact-form"
        >
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
        <div class="toast">Message envoyé</div>
        <NuxtLink to="/contact/#map-anchor" id="scroll-to-map">
          Localisation</NuxtLink
        >
      </div>
      <div class="map-and-anchor-container" id="map-anchor">
        <NuxtLink to="/contact/#form-anchor" id="scroll-to-form"
          >Nous écrire
        </NuxtLink>

        <div class="map-invitation">Localisez-nous:</div>
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
  </div>
</template>

<script setup async defer>
import { Form, Field, ErrorMessage } from "vee-validate";
useSeoMeta({
  title: "SGConseils experts-comptable à Toulouse",
  description:
    "Page pour contacter SGConseils via email ou localisation géographique",
});
const showMessageConfirm = () => {
  const toastElement = document.querySelector(".toast");
  if (toastElement) {
    toastElement.style.visibility = "visible";
  }
};
const hideMessageConfirm = () => {
  const toastElement = document.querySelector(".toast");
  toastElement.style.visibility = "hidden";
};
const onSubmit = async (values, { resetForm }) => {
  console.log(process.env.SMTP_KEY),
  console.log(values);
  try {
    const mail = useMail();
    await mail.send({
      from: `La société ${values.company}`,
      subject: "Envoyé depuis le site web sgconseils.com",
      text: `
      Mme / Mr ${values.lastname}
      Mail de l'expéditeur: ${values.email}
      Message de la personne: ${values.message}
      `,
    });
    await resetForm();
    await showMessageConfirm();
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
$base-red: #b12434;
$light-red: #d47472;
$base-white: #bec8da;
$base-black: #191c20;
.contact-container {
  background-color: $base-white;
  .global-contact-page {
    max-width: 1440px;
    margin: auto;
    position: relative;
    background-color: $base-white;
    color: $base-black;
    .form-and-anchor-container {
      background-color: $base-white;
      padding-top: 5rem;
      .form-invitation {
        display: flex;
        align-items: center;
        padding-left: 2rem;
        height: 20vh;
        color: $base-black;
        font-style: italic;
        font-size: 2rem;
        font-weight: 500;
        text-shadow: 3px 3px 3px grey;
      }
      .contact-form {
        border: 12px solid $darkest-blue;
        border-radius: 7px;
        background: white;
        height: 68vh;
        width: 60%;
        margin-top: -2rem;
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .form-entry {
          display: flex;
          flex-direction: column;
          padding: 0.8rem 1em;
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
            width: 85%;
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
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          height: 4vh;
          width: 23%;
          border-radius: 7px;
          margin: auto;
          box-shadow: 4px 4px 6px $base-black;
        }
        .form-button:hover {
          box-shadow: 0 0 0;
        }
      }
      .toast {
        visibility: visible;
        background: $dark-blue;
        color: white;
        font-weight: 700;
        display: flex;
        align-items: center;
        height: 10vh;
        padding: 0 1.2rem;
        position: absolute;
        top: 12vh;
        right: -0.7rem;
        z-index: 101;
        border-radius: 10px 0 0 10px;
      }
      #scroll-to-map {
        font-size: 0.8rem;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: $base-red;
        position: absolute;
        right: 0;
        top: 94vh;
        border: 1px solid $base-black;
        height: 3vh;
        width: 12vw;
        border-radius: 7px 0 0 7px;
        box-shadow: 4px 4px 6px $base-black;
        opacity: 0.8;
      }
      #scroll-to-map:hover {
        box-shadow: 0 0 0;
      }
    }
    .map-and-anchor-container {
      padding-top: 20vh;
      height: 90vh;
      .map-invitation {
        position: absolute;
        top: 113.5vh;
        left: 2rem;
        color: $base-black;
        font-style: italic;
        font-size: 2rem;
        font-weight: 500;
        text-shadow: 3px 3px 3px grey;
      }
      .map-container {
        border: 12px solid $darkest-blue;
        height: 68vh;
        width: 60%;
        margin: 3rem 0 0 2rem;
        border-radius: 7px;
      }
      #scroll-to-form {
        font-size: 0.8rem;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: $base-red;
        position: absolute;
        right: 0;
        bottom: 13vh;
        border: 1px solid $base-black;
        height: 3vh;
        width: 12vw;
        border-radius: 7px 0 0 7px;
        box-shadow: 4px 4px 6px $base-black;
        opacity: 0.8;
      }
      #scroll-to-form:hover {
        box-shadow: 0 0 0;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .contact-container {
    .global-contact-page {
      position: relative;
      background-color: $base-white;
      color: $base-black;
      .form-and-anchor-container {
        padding-top: 8vh;
        height: 90vh;
        .form-invitation {
          visibility: hidden;
          height: 0;
        }
        .toast {
          height: 5vh;
          padding: 0 1rem;
          position: absolute;
          top: 8vh;
          right: 0;
          z-index: 101;
          border-radius: 10px 0 0 10px;
          right: 0;
        }
        .contact-form {
          border: 12px solid $darkest-blue;
          border-radius: 7px;
          background: white;
          height: 65vh;
          width: 70vw;
          margin: auto;
          margin-top: 6vh;
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
              width: 90%;
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
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            height: 8%;
            width: 40%;
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
          left: 0;
          top: 84vh;
          border: 1px solid $base-black;
          height: 3vh;
          width: 100px;
          border-radius: 0 7px 7px 0;
          font-size: 0.8rem;
          color: white;
          background: $base-red;
          opacity: 0.8;
          box-shadow: 1px 1px 3px black;
        }
      }
      .map-and-anchor-container {
        padding-top: 14vh;
        height: 91vh;
        .map-invitation {
          visibility: hidden;
          margin: 0;
        }
        .map-container {
          border: 12px solid $darkest-blue;
          border-radius: 7px;
          background: white;
          height: 65vh;
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
          background: white;
          position: absolute;
          left: 0;
          top: 182vh;
          border: 1px solid $base-black;
          height: 3vh;
          width: 100px;
          border-radius: 0 7px 7px 0;
          font-size: 0.8rem;
          color: white;
          background: $base-red;
          opacity: 0.8;
          box-shadow: 1px 1px 3px black;
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .contact-container {
    .global-contact-page {
      .form-and-anchor-container {
        .contact-title {
          font-size: 1.3rem;
          .form-invitation {
            margin: 2rem 0 -0.6rem 0;
          }
        }
        .contact-form {
          border-radius: 7px;
        }
      }
    }
  }
}
</style>
