function tinhTongS(params) {
    var x = document.getElementById("numberX").value*1;
    var n = document.getElementById("numberN").value*1;
    var S=0;
    var mu=1;
    for (var i =1; i<=n; i++){
        mu *= x;
        S += mu;
    }
    while (i<=n) {
        mu *= x;
        S += mu;
        i++;
    }

    document.getElementById("resultS").innerText= "tong S la: "+S;
}



