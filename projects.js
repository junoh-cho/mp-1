function addition(){
    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);
    let result = num1 + num2;
    document.getElementById("output").style.color="black";
    if(Number(result)<0){
        document.getElementById("output").style.color="red";
    }
    document.getElementById("output").innerHTML = String(result);
}

function subtract(){
    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);
    let result = num1 - num2;
    document.getElementById("output").style.color="black";
    if(Number(result)<0){
        document.getElementById("output").style.color="red";
    }
    document.getElementById("output").innerHTML = String(result);

}

function multiply(){
    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);
    let result = num1 * num2;
    document.getElementById("output").style.color="black";
    if(Number(result)<0){
        document.getElementById("output").style.color="red";
    }
    document.getElementById("output").innerHTML = String(result);
}

function divide(){
    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);
    let result = num1 / num2;
    document.getElementById("output").style.color="black";
    if(Number(result)<0){
        document.getElementById("output").style.color="red";
    }
    document.getElementById("output").innerHTML = String(result);
}

function exponent(){
    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);
    let result = num1;
    for (let i = 1; i<num2; i++){
        result = Number(result) * num1;
    }
    document.getElementById("output").style.color="black";
    if(Number(result)<0){
        document.getElementById("output").style.color="red";
    }
    document.getElementById("output").innerHTML = String(result);
}

function clearOutput(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
