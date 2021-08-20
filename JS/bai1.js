var sub1 = parseFloat(document.getElementById("inputSubject1").value);
console.log(sub1);
var sub2 = parseFloat(document.getElementById("inputSubject2").value);
var sub3 = parseFloat(document.getElementById("inputSubject3").value);

var points = 0;
points = sub1 + sub2 + sub3;
console.log(points);

function checkPriorityZone() {
    var zone = document.getElementById("inputZone").value;
    var priorityZone = 0;

    switch (zone) {
        case "A":
            priorityZone = 2;
            break;
        case "B":
            priorityZone = 1;
            break;
        case "C":
            priorityZone = 0.5;
            break;
        default:
            priorityZone = 0;
            break;
    }
    return priorityZone;
}
console.log(checkPriorityZone)


function checkPriorityCandidate() {
    var candidate = document.getElementById("inputCandidate").value;
    var priorityCandidate = 0;

    switch (candidate) {
        case "1":
            priorityCandidate = 2.5;
            break;
        case "2":
            priorityCandidate = 1.5;
            break;
        case "3":
            priorityCandidate = 1;
            break;
        default:
            priorityCandidate = 0;
            break;
    }
    return priorityCandidate;
}

function totalPoints(){
    var result = 0;
    var cadidate = checkPriorityCandidate;
    var zone = checkPriorityZone;
    result = points + cadidate + zone;

    console.log(totalPoints);
}


document.getElementById("btnResult").onclick = totalPoints;
