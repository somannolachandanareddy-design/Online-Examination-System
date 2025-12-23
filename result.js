// get answers given by student
let answers = JSON.parse(localStorage.getItem("answers"));

let score = 0;

// loop through each question
for (let i = 0; i < questions.length; i++) {
  if (answers[i] === questions[i].correct) {
    score++;
  }
}

// show score
document.getElementById("score").innerText =
  "Score: " + score + " / " + questions.length;

// pass / fail
if (score >= questions.length / 2) {
  document.getElementById("status").innerText = "Status: PASS ✅";
} else {
  document.getElementById("status").innerText = "Status: FAIL ❌";
}
