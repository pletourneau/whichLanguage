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
  
  if ((swiftCount > jsCount) && (swiftCount > cSharpCount)) {
    result = "Your love of all things iOS trumps logic, but I understand. Learn the swift language first and buy a black turtleneck.";
  } else if ((jsCount > swiftCount) && (jsCount > cSharpCount)) {
    result = "Your interests lie with coffee, or coding. Either way, learn JavaScript first.";
  } else if ((cSharpCount > swiftCount) && (cSharpCount > jsCount)) {
    result = "You are famous for uttering 'Cs get degrees'. Start with learning coding with C# and see if 'Cs get jobs' Suerte amigo.";
  } else if (jsCount === swiftCount) {
    result = "You should learn JavaScript first. Your JS interest score tied with swift, but coffee always wins";
  } else if (jsCount === cSharpCount) {
    result = "You should learn JavaScript first. Your JS interest score tied with C#, but coffee always wins";
  } else if (cSharpCount === swiftCount) {
    result = "You should learn C# first. Your C# interest score tied with swift, but turtlenecks havent been cool since the beatniks";
  }
  document.querySelector(".hidden").removeAttribute("class");
  document.getElementById("output").innerText = result;
  document.getElementById("form").reset();
  swiftCount.valueOf = "";
  cSharpCount.valueOf = "";
  jsCount.valueOf = "";
}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleSubmission); 
});




