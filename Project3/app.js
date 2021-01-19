let lotto_number = prompt("กรอกเลข..")
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number
// document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)
if (lotto_number == random_number ){
    document.getElementById("result").innerHTML = "ยินดีด้วย"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วย"
}