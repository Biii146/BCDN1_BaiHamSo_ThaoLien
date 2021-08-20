function calcKW(){
    var nameClient = document.getElementById("inputClient").value;
    var consumptionKW = parseInt(document.getElementById("inputKW").value);
    var totalKW = 0;

    if(0 < consumptionKW && consumptionKW <= 50){
        totalKW = consumptionKW * 500;
    }else if(consumptionKW > 50 && consumptionKW <= 100){
        totalKW = consumptionKW * 500 + (consumptionKW - 50)*650;
    }else if(consumptionKW > 100 && consumptionKW <= 200){
        totalKW = consumptionKW * 500 + (consumptionKW - 50)*650 +  (consumptionKW - 100)*850;
    }else if(consumptionKW > 200 && consumptionKW <= 350){
        totalKW = consumptionKW * 500 + (consumptionKW - 50)*650 +  (consumptionKW - 100)*850 + (consumptionKW - 200)*1100;
    }else if(consumptionKW > 350){
        totalKW = consumptionKW * 500 + (consumptionKW - 50)*650 +  (consumptionKW - 100)*850 + (consumptionKW - 200)*1100 + (consumptionKW - 350)*1300;
    }else{
        console.log("ko hợp lệ");
    }
    
    document.getElementById("txtCheck").innerHTML = "Họ và tên: "+nameClient+"<br>"+"Tiền điện tiêu thụ là: "+totalKW;

}

document.getElementById("btnCheck").onclick = calcKW;