
function Question(text,choice,answer){
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

var questions = [
    new Question('다음 중 최초의 웹 브라우져는?',
    ['모자이크','인터넷익스프로어','네스케이프','사슴'],"네스케이프"),
    new Question('다음 qwer 브라우져는?',
    ['모자이크','인터넷익스프로어','네스케이프','사슴'],"네스케이프"),
    new Question('다음 중qwer라우져는?',
    ['모자이크','인터넷익스프로어','네스케이프','사슴'],"네스케이프")
];

function Quiz(questions){
    this.score = 0;
    this.questions = questions;//questions 배열
    this.questionIndex = 0; //questions인덱스 번호저장
}
Quiz.prototype.correctAnswer = function(answer){
    return answer == this.questions[this.questionIndex].answer;
}

var quiz = new Quiz(questions);

function update_quiz(){
    var question = document.getElementById('question');
    var idx = quiz.questionIndex + 1;
    var choice = document.querySelectorAll('.btn');//속성이 클레스인 모두를 가져옴
    
    question.innerHTML = '문제'+idx+") " + quiz.questions[quiz.questionIndex].text;//일반 태그는 innerHTML 폼태그는 value
    
    for(i=0;i<4;i++){
        choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
    }
    console.log(idx);
    progress();
}
function progress(){
    var total_idx = document.getElementById('progress');
    total_idx.innerHTML = '문제 '+(quiz.questionIndex+1)+' / '+quiz.questions.length;
}
update_quiz();
var btn = document.querySelectorAll('.btn');

function checkAnswer(i){
    var idx = quiz.questionIndex + 1;
    btn[i].addEventListener('click',function(){
        
        var answer = btn[i].innerText;//문자값 읽어오기
        if(quiz.correctAnswer(answer)){
            //alert("정답입니다.");
            console.log(idx);
            quiz.score++;
        }else{
            //alert("오답입니다.");
            console.log(idx);
        }
        if(quiz.questionIndex < quiz.questions.length-1){
            quiz.questionIndex++;
            update_quiz();
        }else{
            result();
        }
        
    });
}


for(i=0;i<4;i++){
    checkAnswer(i);
}
function result(){
    var quiz_div = document.getElementById('quiz');
    var per = parseInt((quiz.score*100)/quiz.questions.length);
    var txt = '<h1>결과</h1>'+
                    '<h2 id="score">당신의 점수: '+quiz.score+' / '+
                    quiz.questions.length+'<br><br>' + per + '점</h2>';
    quiz_div.innerHTML = txt;

    if(per >= 80){
        txt += '<h2 style="color:red">훌륭합니다</h2>';
        quiz_div.innerHTML = txt;
    }
}


