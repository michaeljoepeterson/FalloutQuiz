//this array will keep track of how many times each attribute has been picked
let specialArray = [0,0,0,0,0,0,0];
//this will keep track of the current question
let currentQuestion = 0;
//this will be filled with 10 random numbers from 0-11
//a function will be called which will fill array with numbers
let questionArray = [];

//check if there is a repeated number
function checkRandNum(num){
  for (i = 0; i < questionArray.length; i++){
    if (num === questionArray[i]){
      return false;
    }
  }
  return true;
}

function randomizeQuestions(){
   //this function will add 10 randome numbers from 0-11 to the question array
   //it will also make sure no numbers are repeated
   
   let i = 0;
   while (i < 10){
     let index = Math.floor(Math.random() * 12);
     if(checkRandNum(index) === true){      
       questionArray[i] = index;
       i++;
     }
     else{

       continue;
     }
   }
}
function removeElements(){
  //this will be called anytime a screen is changed
    $(".js-header").empty();
    $(".js-text").empty();
    $(".js-nextButtonArea").empty();
    $(".js-img").empty();
    $(".js-questionCounter").empty();
    $(".js-scoreCounter").empty();
    $(".js-question0").empty();
    $(".js-question1").empty();
    $(".js-question2").empty();
    $(".js-question3").empty();
    $(".js-graph").removeClass("graph");
    $(".js-graphContainer").removeClass("textBackground");
    $(".js-graphLetters").empty();
    $(".js-graph").empty();
}

function updateQuestion(){
   //this function will update the current question
   currentQuestion++;
}
 
function updateSpecialArray(index){
   //this function will update the specialArray
   specialArray[index]++;
}
//this function generates the score/question counters
function generateCounters(){
   const questionCounterString = `<p>Question ${currentQuestion + 1}/10</p>`;
   $(".js-questionCounter").html(questionCounterString);
   const specialCounterString = `      <p>Score:</p>    <p class="skills">S:${specialArray[0]}</p>
          <p class="skills">P:${specialArray[1]}</p>
          <p class="skills">E:${specialArray[2]}</p>
          <p class="skills">C:${specialArray[3]}</p>
          <p class="skills">I:${specialArray[4]}</p>
          <p class="skills">A:${specialArray[5]}</p>
          <p class="skills">L:${specialArray[6]}</p>`;
   $(".js-scoreCounter").html(specialCounterString);
}
//this function will find the users most picked special attribute from the quiz
function getFinalResult(arr){
  let currMax = 0;
  let maxIndex = 0;
  for(i = 0; i < arr.length;i++){
    if (arr[i] > currMax){
      currMax = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

function getQuestionObject(index){
   //this function will find the correct question object from the objects array
   return questionObjects[index];

 }
 //this will genereate/render the final page
function generateFinalString(resultObj){
   generateCounters();
   const imgString = `<img src="${resultObj.image}" alt="${resultObj.altText}">`;
   $(".js-img").html(imgString);
   const resultText = resultObj.content;
   $(".js-text").html(resultText);
   const graphLetters = `<p class="letter">S:</p>
          <p class="letter">P:</p>
          <p class="letter">E:</p>
          <p class="letter">C:</p>
          <p class="letter">I:</p>
          <p class="letter">A:</p>
          <p class="letter">L:</p>`;
  $(".js-graphLetters").html(graphLetters);
  const graphBars = `<span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>`;
  $(".js-graph").html(graphBars);
  $(".js-graph").addClass("graph");
  $(".js-graphContainer").addClass("textBackground");
  const restartButton = `<form><button class="defaultButton beginButton js-restartButton">Restart</button></form>`;
  $(".js-nextButtonArea").html(restartButton);
}

 function renderEndPage(){
   //this page will render the last page after the quiz is done
   //it will look at the results of the specialArray and figure out which result is the highest
   //if there is a tie it will just pick the first one
   //based off that it will have to find the correct response which will be in a seperate array in the data.js file
   const maxStatIndex = getFinalResult(specialArray);
   const result = finalPages[maxStatIndex];
   generateFinalString(result);
   handleGraph();
}
 
function generateResultString(questionObj, questionIndex){
   //this function will generate the result strings and render the results page
   generateCounters();
   const imgString = `<img src="${questionObj.images[questionIndex]}" alt="${questionObj.altText[questionIndex]}">`;
   $(".js-img").html(imgString);  
   const resultText = `<p>${questionObj.results[questionIndex]}</p>`;
   $(".js-text").html(resultText);  
   const nextButton = '<form><button class="defaultButton beginButton js-nextButton">Next</button></form>';
   $(".js-nextButtonArea").html(nextButton);
}
 
function renderResults(index){
  //this function will render the results page
  //it will take in the data-item-index of the question clicked and use that to find the correct
  //result in the question object
  const questionIndex = questionArray[currentQuestion];
  const question = getQuestionObject(questionIndex);
  generateResultString(question,index);
}


function generateQuestionString(questionObj){
   //this function will generate the question strings and render them to the question page
   generateCounters();
   const imgString = '<img src="assets/vaultBoy.png" alt="Fallout Vault Boy Image">';
    $(".js-img").html(imgString);
   const questionString = `<p>${questionObj.question}</p>`;
    $(".js-text").html(questionString);
   questionObj.choices.forEach(function(item,index){
     let currentButton = ".js-question" + index;
     let currentQuestionString = `<form>
            <button data-item-special="${questionObj.dataChoices[index]}" data-item-index="${index}" class="choice defaultButton js-questionButton">${item}</button>
          </form>`;
    $(currentButton).html(currentQuestionString);
   });
}
 

function renderQuestionPage(){

  //it will return the correct question object which will be passed to the render question string function
  const questionIndex = questionArray[currentQuestion];
  const question = getQuestionObject(questionIndex);
  //console.log(question);
  generateQuestionString(question);
  //console.log("question page made");
}

function questionClicked(){
  //this will handle when a question is clicked
  $(".js-question0, .js-question1, .js-question2, .js-question3").on("click", ".js-questionButton", function(event){
    event.preventDefault();
    //console.log("question button clicked");
    const questionChoice = $(this).attr("data-item-index");
    const questionSpecial = $(this).attr("data-item-special");
    //update the specialArray with the new choice
    updateSpecialArray(questionSpecial);
    removeElements();
    //this will render the result page
    renderResults(questionChoice);

  });
  
}

function nextClicked(){
  //this function will handle when next is clicked
  //it will also have to check if the question is at 10
  //if it is then it will display the final page
   $(".js-nextButtonArea").on("click", ".js-nextButton", function(event){
     event.preventDefault();
     
     if(currentQuestion < 9){
       updateQuestion();
       removeElements();
       renderQuestionPage();
     }
     else{
       removeElements();
       //do this so that the graph js file wont access the special array directly instead a copy
       specialArrayCopy = specialArray;
       renderEndPage();
     }

   });
   
}


function renderIntroPage(){
  /*this function will be responsible for rendering the intro page
  it should not need any parameters because the intro page will always be the same
  */
  const heading = introPage.headers;
  const textContent = introPage.content;
  const introImage = introPage.image;
  const beginButton = introPage.buttonContent;
  $(".js-header").html(heading);
  $(".js-text").html(textContent);
  $(".js-img").html(introImage);
  $(".js-nextButtonArea").html(beginButton);
  
}

function beginClicked(){
  /*this function will be called once the user clicks the begin button*/
  //it will 
  $(".js-nextButtonArea").on("click",  ".js-beginButton", function(event){
     event.preventDefault();
    
     //this function will create our array of question indexes which will correspond
     //to indexes in the main data array of objects
     randomizeQuestions();
     //remove previous elements
     removeElements();
     //this will render the question page
     renderQuestionPage();
  });
}

function restartClicked(){
  $(".js-nextButtonArea").on("click", ".js-restartButton", function(event){
    event.preventDefault();
    //this shoud restart the quiz by reloading the page
    location.reload();
  });
}

function startQuiz(){

  //a function that will be responsible for rendering the intro page
  renderIntroPage();
  //get the beginClicked function ready on load
  beginClicked();
  //get questionClicked function ready on load
  questionClicked();
  //get nextClicked function ready on load
  nextClicked();
  //get restartClicked fucntion ready on load
  restartClicked();

}

//call this once the page has loaded to ensure intro screen displayed 
$(startQuiz);