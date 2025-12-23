let time = 5 * 60; // 5 minutes

const timerInterval = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").innerText =
    `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  time--;

  if (time < 0) {
    clearInterval(timerInterval);
    alert("Time Over! Exam auto-submitted.");
    submitExam();
  }
}, 1000);
