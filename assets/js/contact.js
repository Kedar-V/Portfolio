// const form = document.getElementById("form");
// const result = document.getElementById("result");

// form.addEventListener("submit", function (e) {
//   const formData = new FormData(form);
//   e.preventDefault();
//   var object = {};
//   formData.forEach((value, key) => {
//     object[key] = value;
//   });
//   var json = JSON.stringify(object);
//   result.innerHTML = "Please wait...";

//   fetch("https://api.web3forms.com/submit", {
//     // mode: 'no-cors',
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
//       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//       Accept: "application/json"
//     },
//     body: json
//   })
//     .then(async (response) => {
//       let json = await response.json();
//       if (response.status == 200) {
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-green-500");
//       } else {
//         console.log(response);
//         result.innerHTML = json.message;
//         result.classList.remove("text-gray-500");
//         result.classList.add("text-red-500");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       result.innerHTML = "Something went wrong!";
//     })
//     .then(function () {
//       form.reset();
//       setTimeout(() => {
//         result.style.display = "none";
//       }, 5000);
//     });
// });
