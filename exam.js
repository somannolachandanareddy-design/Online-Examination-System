let currentIndex = 0;
let answers = new Array(questions.length).fill(null);

function loadQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    optionsDiv.innerHTML += `
      <label class="option">
        <input type="radio" name="option"
          ${answers[currentIndex] === i ? "checked" : ""}
          onclick="saveAnswer(${i})">
        ${opt}
      </label>
    `;
  });
}

function saveAnswer(i) {
  answers[currentIndex] = i;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

function submitExam() {
  localStorage.setItem("answers", JSON.stringify(answers));
  window.location.href = "result.html";
}

loadQuestion();
