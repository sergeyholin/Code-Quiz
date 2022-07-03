// Highscores--------------------------------------------------------------------------------------
  var nameInput = document.querySelector("#name");
  var scoreInput = document.querySelector("#score");
  var submitButton = document.querySelector("#submit-button");
  var userNameSpan = document.querySelector("#user-name");
  var userScoreSpan = document.querySelector("#user-score");
  // pop ();
  renderLastRegistered();

  function renderLastRegistered() {
    var name = localStorage.getItem("name");
    var score = localStorage.getItem("score");

    if (!name) {
      return;
    }

    userNameSpan.textContent = name;
    userScoreSpan.textContent = score;
  
  }

   submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    localStorage.setItem("name", name);
    
      renderLastRegistered();
    });

    // function pop () {
    //   // var scoreInput = document.querySelector("#score");
    //   var score = localStorage.getItem("score");
      
    //   scoreInput.textContent = score;
    // };
  
 
 
