let score = prompt("คะแนนของคุณ : ")
if(score >= 80){
    document.getElementById("result").innerHTML = "คุณได้ A"
}else if (score >= 70){
    document.getElementById("result").innerHTML = "คุณได้ B"
}else if (score >= 60){
    document.getElementById("result").innerHTML = "คุณได้ C"
}else if (score >= 50){
    document.getElementById("result").innerHTML = "คุณได้ D"
}else {
    document.getElementById("result").innerHTML = "คุณได้ F"
}