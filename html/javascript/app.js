function settingnumber(num){
    var result = document.getElementById("result");
    result.value += num
}
function settingclear(){
    var clear = document.getElementById("result");
    clear.value= "";
    
}
function settingresult(){
    var sum =document.getElementById("result");
    result.value= eval(result.value)
}
function square(){
    var square=document.getElementById("result")
    square.value=Math.pow(num,2)
    
}