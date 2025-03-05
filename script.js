// Inspiring Women Data 
const stories = [
   { name: "Marie Curie", field: "Science", impact: "First woman to win a Nobel Prize." }, 
   { name: "Ada Lovelace", field: "Technology", impact: "Pioneer of computer programming." },
    { name: "Malala Yousafzai", field: "Education", impact: "Advocate for girls' education." }
   ];
    // Display Stories
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
       // Quiz Logic
        function checkQuiz() {
           let q1 = document.getElementById("q1").value; 
           let q2 = document.getElementById("q2").value; 
           let result = document.getElementById("quizResult"); 

           if (q1 === "Marie Curie" && q2 === "Ada Lovelace") { 
            result.textContent = "Correct! You know your history! 🚀";
           } else { 
            result.textContent = "Oops! Try again."; 
          }
         } 
         // Commitment Logic 
         function addCommitment() {
           let input = document.getElementById("commitText").value;
            if (input.trim() !== "") { 
              let ul = document.getElementById("commitmentList"); 
              let li = document.createElement("li"); 
              li.textContent = input; 
              ul.appendChild(li); 
              document.getElementById("commitText").value = ""; 
            }
           }