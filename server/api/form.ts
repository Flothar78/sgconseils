// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   body.mailObject = "Message envoyé depuis le site web sgconseils.com";
//   const emailContent = `
//    Société: ${body.company},
//    Message du client: ${body.message}
//    Adresse mail de contact: ${body.email},
//    Contact au sein de la société:  ${body.lastname}
//    Objet du message: ${body.mailObject}
//    `;
//   console.log(emailContent);
// });
