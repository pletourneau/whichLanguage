

function handleSubmission(event) {
  event.preventDefault();


  const operator = document.querySelector("input[name='mythRace']:checked").value;
  let abilities = document.querySelectorAll("input[name='ability']:checked");
  let values = [];
  abilities.forEach((ability) => {
    values.push(ability.value);
  });
  console.log(values);

  
  let result = operator + "with" + values;
  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("char");
  form.addEventListener("submit", handleSubmission);
  
});
