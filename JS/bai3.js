function calcTaxe(){
    var nameClient = document.getElementById("inputName").value;
    var income = parseInt(document.getElementById("inputIncome").value);
    console.log(income);
    var people = parseInt(document.getElementById("inputPeople").value);
    console.log(people);
    var taxe = 0;

    if (0 < income && income <= 60e+6) {
        taxe = (income -  4e+6 - (people * 1.6e+6)) * 0.05;
    } else if (60e+6 < income && income <= 120e+6) {
        taxe = (income -  4e+6 - (people * 1.6e+6)) * 0.1;
    } else if (120e+6 < income && income <= 210e+6) {
        taxe = (income -  4e+6 - (people * 1.6e+6)) * 0.15;
    } else if (210e+6 < income && income <= 384e+6) {
        taxe = (income -  4e+6 - (people * 1.6e+6)) * 0.2;
    } else if (384e+6 < income && income <= 624e+6) {
        taxe = (income -  4e+6 - (people * 1.6e+6)) * 0.25;
    } else if (624e+6 < income && income <= 960e+6) {
        taxe = (income -  4e+6 - (people * 1.6e+6)) * 0.3;
    } else if (960e+6 < income) {
        taxe = (income -  4e+6 - (people * 1.6e+6)) * 0.35;
    } else {
        console.log("ko hợp lệ");
    }

    document.getElementById("txtCalc").innerHTML = "Họ và tên: "+nameClient+"<br>"+"Tiền thuế cá nhân phải đóng: "+taxe;
}
document.getElementById("btnCalc").onclick = calcTaxe;
