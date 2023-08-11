function handleSubmission(event) {
  event.preventDefault();


  const q1 = document.querySelector("input[name='q1']:checked").value;
  const q2 = document.querySelector("input[name='q2']:checked").value;
  const q3 = document.querySelector("input[name='q3']:checked").value;
  const q4 = document.querySelector("input[name='q4']:checked").value;
  const q5 = document.querySelector("input[name='q5']:checked").value;
  // let abilities = document.querySelectorAll("input[name='ability']:checked");
  const values = [q1, q2, q3, q4, q5];

  
  
  console.log(values);
  

  
  // let result = operator + "with" + values;
  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("char");
  form.addEventListener("submit", handleSubmission);
  
});