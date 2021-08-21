
function calcCabs(){
    var clientID = document.getElementById("inputClientID").value;
    var channelType = document.getElementById("inputType").value;
    var premiumChannel = parseInt(document.getElementById("inputPremiumChannel").value);
    var channel = parseInt(document.getElementById("inputChannel").value);
    var totalCabs = 0;

    switch(channelType){
        case "company":
            if(0 < channel && channel <=10){
                totalCabs = 15 + 75 + (50*premiumChannel);
            }else{
                totalCabs = 15 + 75 + ((channel - 10)*5)+(50*premiumChannel);
            }
            break;
        default:
            totalCabs = 4.5 + 20.5 + (7.5*premiumChannel);
        
    }

    document.getElementById("txtCalcCab").innerHTML = "Mã khách hàng: "+clientID+"<br>"+"Số tiền cần thanh toán: "+totalCabs+"$";

}

document.getElementById("btnCalcCab").onclick = calcCabs;

document.getElementById("inputType").onchange = function (e) {
    var value = e.target.value;
    if (value === 'company') {
        document.getElementById("change").style.display = 'block'
    }else{
        document.getElementById("change").style.display = 'none'

    }
}