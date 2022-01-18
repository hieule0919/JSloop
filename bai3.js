function tinhGiaiThua(params) {
    var n = document.getElementById("number").value*1;
    var giaithua = 1;
    for (var i = 1; i<=n ;i++) {
        giaithua *=i;
    }

    document.getElementById("result").innerText="giai thua cua so tu 1 den "+n +" la: "+giaithua;
}