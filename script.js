function shuffleStories() {
  const container = document.getElementById("storyContainer");
  container.innerHTML = "";
  stories.sort(() => Math.random() - 0.5);
  stories.forEach(story => {
      let div = document.createElement("div");
      div.classList.add("story");
      div.innerHTML = `<h2>${story.name}</h2><p><strong>Field:</strong> ${story.field}</p><p><strong>Impact:</strong> ${story.impact}</p>`;
      container.appendChild(div);
  });
}

function checkQuiz() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  let q5 = document.getElementById("q5").value;
  let q6 = document.getElementById("q6").value;
  
  let result = document.getElementById("quizResult");
  
  let score = 0;
  if (q1 === "Marie Curie") score++;
  if (q2 === "Ada Lovelace") score++;
  if (q3 === "Rosa Parks") score++;
  if (q4 === "Katherine Johnson") score++;
  if (q5 === "Wangari Maathai") score++;
  if (q6 === "Valentina Tereshkova") score++;
  
  if (score === 6) {
      result.textContent = "Perfect score! You know your history! 🚀";
  } else if (score >= 4) {
      result.textContent = "Great job! Keep learning about inspiring women. ✨";
  } else {
      result.textContent = "Oops! Try again and learn more!";
  }
} 

document.addEventListener("DOMContentLoaded", shuffleStories);


const stories = [
  { name: "Marie Curie", field: "Science", impact: "First woman to win a Nobel Prize." },
  { name: "Ada Lovelace", field: "Technology", impact: "Pioneer of computer programming." },
  { name: "Malala Yousafzai", field: "Education", impact: "Advocate for girls' education." },
  { name: "Rosa Parks", field: "Civil Rights", impact: "Sparked the Montgomery Bus Boycott." },
  { name: "Katherine Johnson", field: "Space Science", impact: "NASA mathematician who helped land humans on the Moon." },
  { name: "Chimamanda Ngozi Adichie", field: "Literature", impact: "Renowned writer and feminist advocate." },
  { name: "Serena Williams", field: "Sports", impact: "One of the greatest tennis players of all time." },
  { name: "Wangari Maathai", field: "Environment", impact: "First African woman to win the Nobel Peace Prize." },
  { name: "Frida Kahlo", field: "Art", impact: "Iconic Mexican painter known for her self-portraits." },
  { name: "Amelia Earhart", field: "Aviation", impact: "First woman to fly solo across the Atlantic." },
  { name: "Valentina Tereshkova", field: "Space", impact: "First woman in space." }
];


const quizQuestions = [
  { question: "Who was the first woman to win a Nobel Prize?", answer: "Marie Curie" },
  { question: "Who is considered the first computer programmer?", answer: "Ada Lovelace" },
  { question: "Which civil rights activist refused to give up her seat on a bus?", answer: "Rosa Parks" },
  { question: "Who was the NASA mathematician that helped with the Moon landing?", answer: "Katherine Johnson" },
  { question: "Which environmental activist won the Nobel Peace Prize?", answer: "Wangari Maathai" },
  { question: "Who was the first woman to go to space?", answer: "Valentina Tereshkova" }
];