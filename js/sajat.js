//Global változókat.
var gyerekekSzamlalo = 0;
var felnottSzamlalo = 0;
var osszesenSzamlalo = 0;
var dolgozikcstag = 0;
var etelszamlalo = 0;
var maradek = 0;
document.getElementById("tajelfogad").disabled = true;
document.getElementById("gdprelfogad").disabled = true;
document.getElementById("torzsszamgomb").disabled = true; 
var torzsszam = 0;

//----------------------------------------
//style változtatás id-hoz kötve none és block között változtasson ezt jó lenne egybe
function ShowAndHide() {
    var x = document.getElementById('kepMutatas');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function ShowAndHide2() {
    var x = document.getElementById('kepMutatas2');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function ShowAndHide3() {
    var x = document.getElementById('kepMutatas3');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function ShowAndHideGDPR() {
    var x = document.getElementById('gdpr1');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function ShowAndHideGDPR2() {
    var x = document.getElementById('gdpr2');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function ShowAndHideGDPR3() {
    var x = document.getElementById('gdpr3');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//----------------------------
// Az ID alapján elrejtet formot kellene meghívni egy igen nem value alapjan és ez mindre legyen jó. 1 és 0 legyen a value alapunk.
function displayDiv(id, elementValue) {
    document.getElementById(id).style.display = elementValue.value == 1 || 2 ? 'block' : 'none';
    document.getElementById(id).style.display = elementValue.value == 0 ? 'none' : 'block';
}
//----------------------------
//Inputokból kéri az adatokat és összeadja + 1-t majd hozzá kellene adni,mert magát is számolja
function addEmber() {
    gyerekekSzamlalo = (parseInt($('#fiu').val()) || 0) + (parseInt($('#lany').val()) || 0);
    felnottSzamlalo = (parseInt($('#felnott').val()) || 0);
    dolgozikcstag = (parseInt($('#dolgozikcstag').children("option:selected").val()));
    osszesenSzamlalo = gyerekekSzamlalo+felnottSzamlalo + dolgozikcstag;
    szeretnetobbembert = $('#tobbember').children("option:selected").val();
    
    $('#osszPluszEgy').html(`<span>${osszesenSzamlalo + 1} ember </span>`);
    
    if (szeretnetobbembert == 1) {
        $('#osszEmberFigy').html(`<label> </label>`);
        document.getElementById("bdisableember").disabled = false;
    }
    else if (osszesenSzamlalo > 3)
    {
        $('#osszEmberFigy').html(`<label style="color:red;">Nem hozhatsz ennyi embert</label>`);
        document.getElementById("bdisableember").disabled = true;
    }
    else
    {
        $('#osszEmberFigy').html(`<label> </label>`);
        document.getElementById("bdisableember").disabled = false;
    }
    
}
//----------------------------
// Össze kell adni - önmaga,ha részt vesz a főző versenyen, ne lehessen tovább menni,ha túl sok kaját rendelt.
function addEtel() {
    gyerekekSzamlalo = (parseInt($('#fiu').val()) || 0) + (parseInt($('#lany').val()) || 0);
    felnottSzamlalo = (parseInt($('#felnott').val()) || 0);
    dolgozikcstag = (parseInt($('#dolgozikcstag').children("option:selected").val()));
    osszesenSzamlalo = gyerekekSzamlalo + felnottSzamlalo + dolgozikcstag;
    etelszamlalo = (parseInt($('#naturcsirke').val()) || 0) + (parseInt($('#rantottszelet').val()) || 0) + (parseInt($('#marhaporkolt').val()) || 0);
    csapatbanvan = $('#fozoreszvetel').children("option:selected").val();
    dcscsapatbanvan = $('#csfozoreszvetel').children("option:selected").val();
    $('#osszRendelt').html(`<span>${etelszamlalo} adag </span>`);
    maradek = (osszesenSzamlalo + 1) - (csapatbanvan) - etelszamlalo - dcscsapatbanvan ;
    if (maradek >= 0) {
        $('#osszRendelheto').html(`<span>${maradek} adag </span>`);
    }
    else {
        $('#osszRendelheto').html(`<span style="color:red;">Túl sok ételt rendeltél, ennyivel többet: ${maradek * -1} adag</span>`);
    }
    if( maradek < 0)
    {
        document.getElementById("bdisable").disabled = true;

    }
    else{
        document.getElementById("bdisable").disabled = false;
    }
}
//---------------------------
//checkbox elfogadás,ha ki pipálva van egyszerűen csak változtatja az elementnek a disabledjét
function checkbox() {
if (tajelfogadcheck.checked == true){

    document.getElementById("tajelfogad").disabled = false;
  } else {
    document.getElementById("tajelfogad").disabled = true;
  }
}
function checkbox2() {
    if (gdrpelfogadcheck.checked == true){
        document.getElementById("gdprelfogad").disabled = false;
      } else {
        document.getElementById("gdprelfogad").disabled = true;
      }
    }

//----------------------------
function showCustomer(str) {
    var torzsszam = $("#torzsszamcheckid").val();
	
    var txtHint = $("#txtHint").val();
    if(torzsszam.length > 4 && torzsszam.length < 6){
        if(torzsszam == 00000) {
					  
            document.getElementById("torzsszamgomb").disabled = false;
            document.getElementById("txtHint").innerHTML = "";
        }
        else{
            document.getElementById("torzsszamgomb").disabled = true;
        }

    }
    else if (torzsszam.length <= 4){
        document.getElementById("txtHint").innerHTML = "Túl kevés karaktert írt be!";
        document.getElementById("torzsszamgomb").disabled = true;
    }
    else if (torzsszam.length >= 6 )
    {
        document.getElementById("txtHint").innerHTML = "Túl sok karaktert írt be!";
        document.getElementById("torzsszamgomb").disabled = true;
    }
}


function teszt() {
    alert("Köszönöm a teszt kitöltést.");
}
