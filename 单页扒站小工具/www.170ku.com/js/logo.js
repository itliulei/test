// 半角转全角
var hash = {'32' : '\u3000'}; 
function sbc2dbc(str) { 
    var ret = [], i = 0, len = str.length, code, chr; 
    for (; i < len; ++i) { 
        code = str.charCodeAt(i); 
        chr = hash[code]; 
        if (!chr && code > 31 && code < 127) { 
            chr = hash[code] = String.fromCharCode(code + 65248); 
        } 
        ret[i] = chr ? chr : str.charAt(i); 
    } 
    return ret.join(''); 
}

//window.onload=function(){
//$(function(){
	var Thostname;
	var Thostname2;
	var Thostnametxt;
	var Thostnamelogo;
	var Tlf = window.location.host.toLowerCase().split(".");
	Thostname2 = sbc2dbc(window.location.host.toUpperCase());
	if (Tlf.length > 1) {
	    Thostname = Tlf[Tlf.length - 2] + "." + Tlf[Tlf.length - 1];
	    Thostnametxt = Tlf[Tlf.length - 2];
	    Thostnamelogo = Thostnametxt + "<span style='font-size:24px;color:#881313'>." + Tlf[Tlf.length - 1] + "</font>";
	    document.title = document.title + ' - ' + Thostname2;
	    if (document.getElementById("WebUrl")) {
	        document.getElementById("WebUrl").innerHTML = Thostname2;
	    }
	    if (document.getElementById("logoname")) {
	        document.getElementById("logoname").innerHTML = Thostname;
	    }
	}
	window.status = Thostname2;
//})