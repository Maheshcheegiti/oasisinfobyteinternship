let previous_value = '';
function useAns(){
    if (previousResult) {
        document.form1.textview.value += previousResult;
    }
}
function insert(num) {
    document.form1.textview.value = document.form1.textview.value + num;
}
function equal() {
    var exp = document.form1.textview.value;
    if (exp) {
        document.form1.textview.value = eval(exp)
    }
    let result = document.form1.textview.value;
    if (result) {
        previousResult = result;
        document.getElementById("result").value = result + operator;
    }
}
function backspace() {
    var exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length -1);
}
function clearResult(){
    document.form1.textview.value = '';
    previous_value = '';
}
