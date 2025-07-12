const myths = [
  { myth: "You need Aadhar to vote.", fact: "No, you only need a valid voter ID issued by the Election Commission." },
  { myth: "Police can arrest anyone anytime.", fact: "No, arrests must follow lawful procedures under CrPC." },
  { myth: "You cannot criticize the government publicly.", fact: "You have freedom of speech unless it incites violence or breaks specific laws." },
  { myth: "Only lawyers can file RTI.", fact: "Any citizen of India can file an RTI application directly." },
  { myth: "You must carry your ID at all times.", fact: "There's no law mandating that citizens carry ID unless in specific circumstances." },
  { myth: "You need Aadhar to vote.", fact: "No, you only need a valid voter ID issued by the Election Commission." },
  { myth: "Police can arrest anyone anytime.", fact: "No, arrests must follow lawful procedures under CrPC." },
  { myth: "You cannot criticize the government publicly.", fact: "You have freedom of speech unless it incites violence or breaks specific laws." },
  { myth: "Only lawyers can file RTI.", fact: "Any citizen of India can file an RTI application directly." },
  { myth: "You must carry your ID at all times.", fact: "There's no law mandating that citizens carry ID unless in specific circumstances." },
  { myth: "You need to be rich to approach the court.", fact: "Legal aid and PILs allow even poor citizens to seek justice." },
  { myth: "A woman cannot file a police complaint after marriage.", fact: "Women can file complaints at any stage, marriage doesn't restrict rights." },
  { myth: "Only men can be arrested without notice.", fact: "All genders are protected equally under arrest laws." },
  { myth: "You can’t deny police if they ask to check your phone.", fact: "Police need a warrant or legal basis to search personal devices." },
  { myth: "Filing an FIR is optional.", fact: "Police are obligated to file an FIR for cognizable offences." },
  { myth: "Bail means the person is declared innocent.", fact: "Bail is temporary release; the trial determines innocence or guilt." },
  { myth: "You can't record conversations with police.", fact: "Citizens can record public interactions with officials for safety and proof." },
  { myth: "Minors can’t be arrested under any law.", fact: "Juveniles are handled under special laws, but can be detained appropriately." },
  { myth: "Only lawyers can read and understand the Constitution.", fact: "The Constitution is a public document accessible to all." },
  { myth: "Legal aid is only for people below the poverty line.", fact: "Free legal services are available for women, SC/ST, children, and others." },
  { myth: "You need a lawyer to file a PIL.", fact: "Any citizen of India can file a Public Interest Litigation themselves." },
  { myth: "Once arrested, you can’t get your job back.", fact: "You can appeal and seek reinstatement through proper legal procedures." },
  { myth: "RTI can only be filed in English or Hindi.", fact: "RTI can be filed in any of the 22 official languages of India." },
  { myth: "Landlords can evict tenants overnight.", fact: "Eviction requires legal notice and due process under tenancy laws." },
  { myth: "Voting is compulsory in India.", fact: "Voting is a right, not a legal obligation — no one can be penalized for not voting." }
];

const quizQuestions = [
  { question: "Which document is required to vote?", options: ["PAN card", "Aadhar card", "Voter ID", "Ration card"], answer: 2 },
  { question: "Can you file an RTI application anonymously?", options: ["Yes", "No", "Only with permission", "Only via lawyer"], answer: 1 },
  { question: "Which article guarantees Freedom of Speech?", options: ["Article 19", "Article 21", "Article 32", "Article 14"], answer: 0 },
  { question: "Who can file a PIL?", options: ["Only lawyers", "Any Indian citizen", "Only affected parties", "NGOs only"], answer: 1 },
  { question: "Is education a fundamental right?", options: ["Yes", "No", "Only for girls", "Only till age 14"], answer: 0 },
  { question: "What is the minimum voting age in India?", options: ["16", "18", "21", "25"], answer: 1 },
  { question: "Which body conducts elections in India?", options: ["Supreme Court", "Lok Sabha", "Election Commission", "Parliament"], answer: 2 },
  { question: "RTI Act was passed in which year?", options: ["2002", "2005", "2010", "1998"], answer: 1 },
  { question: "Can you refuse police entry without a warrant?", options: ["Yes", "No", "Depends on situation", "Only lawyers can say no"], answer: 2 },
  { question: "Right to Equality is under which article?", options: ["Article 14", "Article 21", "Article 15", "Article 17"], answer: 0 }
];

let currentQuiz = [];

function toggleSection(id) {
  document.querySelectorAll('.popup-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function showRandomMyth() {
  const item = myths[Math.floor(Math.random() * myths.length)];
  document.getElementById('myth').textContent = "❌ Myth: " + item.myth;
  document.getElementById('fact').textContent = "✅ Fact: " + item.fact;
}

function startQuiz() {
  currentQuiz = [];
  const usedIndexes = new Set();
  while (currentQuiz.length < 10) {
    const index = Math.floor(Math.random() * quizQuestions.length);
    if (!usedIndexes.has(index)) {
      usedIndexes.add(index);
      currentQuiz.push(quizQuestions[index]);
    }
  }
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';
  currentQuiz.forEach((q, i) => {
    quizContainer.innerHTML += `
      <div>
        <p>${i+1}. ${q.question}</p>
        ${q.options.map((opt, idx) => `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`).join('')}
      </div>
    `;
  });
  document.getElementById('score').textContent = '';
}

function submitQuiz() {
  let score = 0;
  let feedbackHTML = '';
  currentQuiz.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const correctText = q.options[q.answer];
    const userText = selected ? q.options[parseInt(selected.value)] : 'No answer';
    const isCorrect = selected && parseInt(selected.value) === q.answer;
    if (isCorrect) score++;

    feedbackHTML += `
      <div style="margin-bottom:10px;">
        <strong>${i+1}. ${q.question}</strong><br/>
         Correct Answer: ${correctText}<br/>
        ${isCorrect ? "🎉 You got it right!" : ` Your answer: ${userText}`}
      </div>
    `;
  });
  document.getElementById('score').innerHTML = `
    <h3>🎯 Your Score: ${score}/10</h3>
    <div>${feedbackHTML}</div>
  `;
}

window.onload = () => {
  showRandomMyth();
  startQuiz();
};
