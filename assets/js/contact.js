const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
//   result.innerHTML = "Please wait...";
    form.querySelector('.loading').classList.add('d-block');
    form.querySelector('.error-message').classList.remove('d-block');
    form.querySelector('.sent-message').classList.remove('d-block');

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      form.querySelector('.loading').classList.remove('d-block');
      if (response.status == 200) {
        // result.innerHTML = json.message;
        form.querySelector('.sent-message').classList.add('d-block');
        // result.classList.remove("text-gray-500");
        // result.classList.add("text-green-500");
      } else {
        console.log(response);
        // result.innerHTML = json.message;
        thisForm.querySelector('.error-message').classList.add('d-block');
        // result.classList.remove("text-gray-500");
        // result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
