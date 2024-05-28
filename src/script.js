function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Eu estava pensando em ir no Shopping para patinar no gelo, pode ser? Ou tem outra idéia? \\OBS: Não tenho como ver a resposta então me manda mensagem";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "Blz po";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Jae então, as de VDD eu sei quem são 👍";

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#eb233a', '#10e6d0', '#9cdb2e'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 21000);
  }
  