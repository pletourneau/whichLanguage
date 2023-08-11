function handleSubmission(event) {
  event.preventDefault();


  const q1 = document.querySelector("input[name='q1']:checked").value;
  const q2 = document.querySelector("input[name='q2']:checked").value;
  const q3 = document.querySelector("input[name='q3']:checked").value;
  const q4 = document.querySelector("input[name='q4']:checked").value;
  const q5 = document.querySelector("input[name='q5']:checked").value;
  const values = [q1, q2, q3, q4, q5];
  let swiftCount = 0;
  let jsCount = 0;
  let cSharpCount = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] === "swift") {
      swiftCount ++;
    } else if (values[i] === "js") {
      jsCount ++;
    } else if (values[i] === "c#") {
      cSharpCount ++;
    }
  }
  
  console.log(swiftCount);
  console.log(jsCount);
  console.log(cSharpCount);


  
  

  

  
  let result = q1 + "with" + q2;
  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("char");
  form.addEventListener("submit", handleSubmission);
  
});