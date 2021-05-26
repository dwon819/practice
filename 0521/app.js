// 변수 선언
var inp = document.forms['cal'];
var input = document.getElementsByTagName("input");
var cls_btn = document.getElementsByClassName('cls_btn')[0];
var result_btn = document.getElementsByClassName("result_btn")[0];
//계산기 초기화
function clr(){
    inp['result'].value = 0;
}
//계산기 입력 처리

function cals(value){
    if(inp['result'].value == 0 || inp['result'].value == "입력오류"){
        inp['result'].value = '';
    }
    inp['result'].value += value;
}

//계산 결과 처리
//eval 연산결과 
function my_result(){
    var result = document.forms['cal']['result'];
    var cal = eval(result.value);  
    inp['result'].value = cal;
}

for(i = 0; i < input.length; i++){
    if(input[i].value != "=" && input[i].value != "clear"){
        input[i].onclick = function(){
            cals(this.value);
            console.log(this.value);
        }
    }
}

cls_btn.onclick = function(){
    clr();
}

result_btn.onclick = function(){
    try{
        my_result();
    }
    catch(err){
        var result = inp['result'];
        result.value = "입력오류";
    }
}