function HexVal() {	
	resets();
	
	document.getElementById("convert").onclick = HexConvert;
	
	var NAME = document.getElementById("Hexing");
	NAME.className = "button button-caution button-3d button-action button-jumbo";
	clears();
}

function DecVal() {	
	resets();

	document.getElementById("convert").onclick = DecConvert;
	var NAME = document.getElementById("Decing");
	NAME.className = "button button-caution button-3d button-action button-jumbo";
	
	clears();
}

function BinVal() {	
	resets();
	
	document.getElementById("convert").onclick = BinConvert;	
	var NAME = document.getElementById("Bining");
	NAME.className = "button button-caution button-3d button-action button-jumbo";
	clears();
}

function resets(){
	var Hex = document.getElementById("Hexing");
	var Bin = document.getElementById("Bining");
	var Dec = document.getElementById("Decing");
	
	Hex.className = "button button-3d  button-jumbo";
	Bin.className = "button button-3d  button-jumbo";
	Dec.className = "button button-3d  button-jumbo";
}

//Postcondition: Converts Decimal to Binary and Hexadecimal and then outputs all three forms.
function DecConvert() {	

	var d = document.getElementById("field1").value;
	var bin = (d >>> 0).toString(2);//Converts Decimal to Binary.
		
	var digits = "0123456789ABCDEF"
	var hex = ("");
	var dig = ("");
		
	while( d > 0){//This loop converts the Decimal to Hexadecimal.
			dig = d % 16;
	
			if (d < 1)	
				break;
			else{
				hex = digits.charAt(dig) + hex ;
				d = d / 16;
			}
	}
		
		document.getElementById("binout").innerHTML = bin;//Outputs the Binary value;
		document.getElementById("hexout").innerHTML = hex;//Outputs the Hex value
		document.getElementById("decout").innerHTML = document.getElementById("field1").value;//Outputs the Dec value
}

function HexConvert() {	
	  var hex = document.getElementById("field1").value;
	  var dec = parseInt(hex, 16);//Convert hex to Dec;
	  var bin = (dec >>> 0).toString(2);//Converts the new Decimal to Binary.
	  
	  document.getElementById("binout").innerHTML = bin;//Outputs the Binary value;
		 document.getElementById("hexout").innerHTML = hex;//Outputs the Hex value
		 document.getElementById("decout").innerHTML = dec;//Outputs the Dec value

}


function BinConvert() {	
        var bin = document.getElementById("field1").value;
		var dec = parseInt(bin, 2);
		var hex = dec.toString(16);;
	  
	  document.getElementById("binout").innerHTML = bin;//Outputs the Binary value;
	  document.getElementById("hexout").innerHTML = hex;//Outputs the Hex value
	  document.getElementById("decout").innerHTML = dec;//Outputs the Dec value
	
}


function add_number(test) {
    document.getElementById("field1").value += document.getElementById(test).value;

}

function clears(){
	document.getElementById("field1").value =  null;
	document.getElementById("binout").innerHTML = 0;
	document.getElementById("hexout").innerHTML = 0;
	document.getElementById("decout").innerHTML = 0;
}