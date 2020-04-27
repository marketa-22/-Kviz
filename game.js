let questions = ["Kolik je odmocnina z 239?",
                 "Pokud 10 dělníků postaví 10 domů za 10 měsíců, za kolik měsíců postaví 15 dělníků 15 domů?",
                 "Cihla váží kilo a půl cihly. Kolik váží cihla?",
                 "Pokud číslo 30 vydělíš polovinou a pak přičteš 10, jaké číslo dostaneš?",
                 "Co je to ukulele?"];

let answers = [["15,5", "16", "14", "16,3"],
               ["20", "15", "10", "12,5"],
               ["2 kg", "1,5 kg", "1 kg", "2,5 kg"],
               ["25", "35", "12", "70"],
               ["vzácné luční kvítí", "nástroj strunný", "bulharské hory","jezero v Norsku"]];

let correctAnswers = [0, 2, 0, 3, 1];

let life = 3;
let score = 0;
let currentQuestion = 0;

function gameStart() {
  life = 3;
  score = 0;
  currentQuestion = 0;

  document.getElementById("state").innerHTML = 'Skóre: ' + score + '<span style="float:right">Životy: ' + life + '</span>';

  document.getElementById("gameButtons").style.display = "block";
  document.getElementById("playAgain").style.display = "none";
  document.getElementById("video").style.display = "none";

  document.getElementById("questionNumber").innerHTML = "Vítej u tvého prvního úkolu!";
  chooseQuestion();
}

function chooseQuestion() {
  document.getElementById("question").innerHTML = questions[currentQuestion];
  document.getElementById("optionA").innerHTML = answers[currentQuestion][0];
  document.getElementById("optionB").innerHTML = answers[currentQuestion][1];
  document.getElementById("optionC").innerHTML = answers[currentQuestion][2];
  document.getElementById("optionD").innerHTML = answers[currentQuestion][3];
}

function chooseOption(answer){
  let isCorrect = false;


  if (answer == correctAnswers[currentQuestion]){
    document.getElementById("questionNumber").innerHTML = "Dobrýýý!";
    score++;
    isCorrect = true;
  } else {
    document.getElementById("questionNumber").innerHTML = "Špatnýýý!";
    life--;
  }

  document.getElementById("state").innerHTML = 'Skóre: ' + score + '<span style="float:right">Životy: ' + life + '</span>';

  if (isCorrect){
    currentQuestion++;
    if (currentQuestion === questions.length) {
      win();
    } else {
      chooseQuestion();
    }
  }
  if (life == 0){
    end();
  }
}

function end(){
  document.getElementById("state").innerHTML = '';
  document.getElementById("questionNumber").innerHTML = "Konec hry!";
  document.getElementById("question").innerHTML = "Dosažené skóre: " + score;
  document.getElementById("gameButtons").style.display = "none";
  document.getElementById("playAgain").style.display = "block";
}
function win(){
  document.getElementById("state").innerHTML = '';
  document.getElementById("questionNumber").innerHTML = "Vyhrál jsi!";
  document.getElementById("question").innerHTML = "Dosažené skóre: " + score;
  document.getElementById("gameButtons").style.display = "none";
  document.getElementById("playAgain").style.display = "block";
  document.getElementById("video").style.display = "block";
}
