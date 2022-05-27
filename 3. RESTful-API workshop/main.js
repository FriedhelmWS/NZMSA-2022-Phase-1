const axios = require("axios").default;

main();

function main() {
  // Ex 1

  //   axios
  //     .post("https://2022-nsmsa-phase-1-api.azurewebsites.net/api/message", body)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     });

  // Ex 2

  //   const body = {
  //     Nickname: "Constantine XI Palaiologos",
  //     MainMessage: "You'll Come as a Lighting",
  //     Password: "14530529",
  //   };
  //   axios
  //     .post("https://2022-nsmsa-phase-1-api.azurewebsites.net/api/message", body)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     });

  // Ex 3

  //   const body = {
  //     MainMessage: "I'll Come as a Lighting",
  //   };
  //   let config = {
  //     headers: {
  //       Password: "14530529",
  //     },
  //   };
  //   axios
  //     .patch(
  //       "https://2022-nsmsa-phase-1-api.azurewebsites.net/api/message/1",
  //       body,
  //       config
  //     )
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //     });

  // Ex 4

  let config = {
    headers: {
      Password: "14530529",
    },
  };
  axios
    .delete(
      "https://2022-nsmsa-phase-1-api.azurewebsites.net/api/message/1",
      null,
      config
    )
    .then(function (response) {
      // handle success
      console.log(response.data);
    });
}
