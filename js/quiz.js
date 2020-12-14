function check(){
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var question8=document.quiz.question8.value;
    var question9=document.quiz.question9.value;
    var question10=document.quiz.question10.value;
    var correct=0;
    
    
    if (question1=="las vegas"){
        correct++;
    }
    if (question2=="2008"){
        correct++;
    } 
    if (question3=="4"){
        correct++;
    }
    if (question4=="Daniel Radcliffe"){
        correct++;
    }
    if (question5=="Interscope Records"){
        correct++;
    }
    if (question6=="Origins"){
        correct++;
    }
    if (question7=="It's Time"){
        correct++;
    }
    if (question8=="1"){
        correct++;
    }
    if (question9=="Darkside"){
        correct++;
    }
    if (question10=="2017"){
        correct++;
    }
    
    var messages=["Ótimo trabalho!","Precisa se empenhar mais!"];
    
    var range;
    
      if(correct<1){
          range=2;
      }
      
      if(correct>correct<3){
          range=1;
      }
      
      if(correct>2){
          range=0;
      }
    
    //document.getElementById("after_submit").style.visibility="visible";
    
    document.getElementById("messages").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="&rarr;Você acertou "+correct+" questões!";
    
    }
