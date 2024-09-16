let readlinesync=require('readline-sync');
let kuler=require("kuler");


let score=0;

let username=readlinesync.question("What is your name?\n");
console.log(kuler(`\nWelcome to the Quizzz ${username}😀😀\n `,"#dc2626"));

console.log(kuler("Please select any option by typing a/b/c/d\n","#dc2626"));
const database={
  data:[
    {
      question:`let a={},b={}
      console.log(a==b)
      console.log(a===b)`,
      options:{
        a:"false false",
        b:"false true",
        c:"true false",
        d:"true true"
      },
      correctAnswer:"a"
    },
    {
      
    question:"Object.assign(target,source)creates which type of copy?",
      options:{
        a:"Deep Copy",
        b:"Shallow Copy",
        c:"Nested Copy",
        d:"Creates a new reference"
      },
      correctAnswer:"b"
    },
    {
      question:"Is method chaining possible with  forEach?",
      options:{
        a:"Yes",
        b:"No"
      },
      correctAnswer:"b" 
    }
  ]
}
const leaderboard={
  data:[
    {
      name:"Janvi",
      score:3
    },
    {
      name:"Riya",
      score:2
    },
    {
      name:"Abhay",
      score:1
    }
  ]
}
function quizlogic(userAnswer,correctAnswer)
{
  if(userAnswer===correctAnswer){
    console.log(kuler("Well Done! You are correct", "#059669")) ;
    console.log("\n");
    score+=1;
  }
  else{
  console.log(kuler("Oops! You are wrong \n", "#b91c1c"));
    console.log(kuler(`Correct answer is:${correctAnswer} \n`, "#1d4ed8"));
    }
}
function showquestionandans(database){
for(let i=0;i<database.data.length;i++)
  {
    console.log(`Q${i+1} - ${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} - ${database.data[i].options[key]}\n`);
    }
   let userans=readlinesync.question("Enter answer - (a/b/c/d) - ").toLowerCase();
    console.log("\n");
    
    quizlogic(userans,database.data[i].correctAnswer);
  }
}
function highscore(leaderboard)
{
  let maxi=0;
  leaderboard.data.push({name:username,score:score});
  let sortedscorelist=leaderboard.data.sort((a,b)=>b.score-a.score);
  console.log("\n");
  console.log(kuler("Your position on the leaderboard :🤩🎊🎉 \n", "#fde047"));
  for(let player of sortedscorelist)
    {
      console.log(kuler(`${player.name} - ${player .score}`, "#fde047"));
      if(player.score>maxi){
        maxi=player.score;
      }
    }
  if(score===maxi){
    console.log(kuler("\nCongratulations! You have the highest score on the leaderboard ", "#059669"));
  }
}
showquestionandans(database);
console.log(kuler(`\nYour total score is ${score}`, "#5eead4"));
highscore(leaderboard)  ;