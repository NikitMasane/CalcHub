var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){

// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

// Feet to-----Feet,Inches,Centimeter,Yards,Kilometers,Miles,Meter
if(option_from === "Feet" && option_to==="Feet"){
    result.value = input.value;
}
else if(option_from === "Feet" && option_to==="Inches"){
    result.value = Number(input.value)*12;

}else if(option_from === "Feet" && option_to==="Centimeter"){
    result.value = Number(input.value)/0.0328081;
}
else if(option_from === "Feet" && option_to==="Yards"){
    result.value = Number(input.value)*0.33333;
}
else if(option_from === "Feet" && option_to==="kilometer"){
    result.value = Number(input.value)/3280.8;
}
else if(option_from === "Feet" && option_to==="Meter"){ 
    result.value = Number(input.value)/3.2808;
}
else if(option_from === "Feet" && option_to==="Miles"){ 
    result.value = Number(input.value)*0.00018939;
}

// Meter to-----Feet,Inches,Centimeter,Yards,Kilometers,Miles,Meter
	if(option_from === "Meter" && option_to==="Feet"){
		result.value = Number(input.value) *3.2808;
	}
    else if(option_from === "Meter" && option_to==="Inches"){
		result.value = Number(input.value)*39.370;

	}else if(option_from === "Meter" && option_to==="Centimeter"){
		result.value = Number(input.value)/0.01;
	}
    else if(option_from === "Meter" && option_to==="Yards"){
		result.value = Number(input.value)*1.0936;
	}
    else if(option_from === "Meter" && option_to==="kilometer"){
		result.value = Number(input.value)/1000;
	}
    else if(option_from === "Meter" && option_to==="Meter"){ 
		result.value = input.value;
	}
    else if(option_from === "Meter" && option_to==="Miles"){ 
		result.value = Number(input.value)*0.00062137;
	}

//  Inches to-----Feet,Inches,Centimeter,Yards,Kilometers,Miles,Meter
if(option_from ==="Inches" && option_to==="Feet"){
    result.value = Number(input.value) *0.083333;
}
else if(option_from === "Inches" && option_to==="Inches"){
    result.value = input.value;

}else if(option_from === "Inches" && option_to==="Centimeter"){
    result.value = Number(input.value)/0.39370;
}
else if(option_from === "Inches" && option_to==="Yards"){
     result.value = Number(input.value)*0.027778;
}
else if(option_from === "Inches" && option_to==="kilometer"){
    result.value = Number(input.value)/39370;
}
else if(option_from === "Inches" && option_to==="Meter"){ 
    result.value = Number(input.value)/39.370;
}
else if(option_from === "Inches" && option_to==="Miles"){
    result.value = Number(input.value)*0.000015783;
}

//  Centimeter to-----Feet,Inches,Centimeter,Yards,Kilometers,Miles,Meter

if(option_from ==="Centimeter" && option_to==="Feet"){
    result.value = Number(input.value) *0.032808;
}
else if(option_from === "Centimeter" && option_to==="Inches"){
    result.value = Number(input.value)*0.39370;

}else if(option_from === "Centimeter" && option_to==="Centimeter"){
    result.value = input.value;
}
else if(option_from === "Centimeter" && option_to==="Yards"){
    result.value = Number(input.value)*0.010936;
}
else if(option_from === "Centimeter" && option_to==="kilometer"){
    result.value = Number(input.value)/100000;
}
else if(option_from === "Centimeter" && option_to==="Meter"){
    result.value = Number(input.value)/100;
}
else if(option_from === "Centimeter" && option_to==="Miles"){
    result.value = Number(input.value)*0.0000062137;
}

//  Yards to-----Feet,Inches,Centimeter,Yards,Kilometers,Miles,Meter
if(option_from ==="Yards" && option_to==="Feet"){
    result.value = Number(input.value) *3;
}
else if(option_from ==="Yards" && option_to==="Inches"){  
    result.value = Number(input.value)*36;
}
else if(option_from === "Yards" && option_to==="Centimeter"){  
    result.value = Number(input.value)/0.010936;
}
else if(option_from === "Yards" && option_to==="Yards"){ 
    result.value = input.value;
}
else if(option_from === "Yards" && option_to==="kilometer"){ 
    result.value = Number(input.value)/1093.6;
}
else if(option_from === "Yards" && option_to==="Meter"){ 
    result.value = Number(input.value)/1.0936;
}
else if(option_from === "Yards" && option_to==="Miles"){   
    result.value = Number(input.value)*0.00056818;
}

//  Kilometerr to-----Feet,Inches,Centimeter,Yards,Kilometers,Miles,Meter

if(option_from ==="kilometer" && option_to==="Feet"){
     result.value = Number(input.value) *3280.8;
}
else if(option_from === "kilometer" && option_to==="Inches"){
    result.value = Number(input.value)*39370;

}else if(option_from === "kilometer" && option_to==="Centimeter"){
    result.value = Number(input.value)*100000;
}
else if(option_from === "kilometer" && option_to==="Yards"){
    result.value = Number(input.value)*1093.6;
}
else if(option_from === "kilometer" && option_to==="kilometer"){ 
    result.value = input.value;
}
else if(option_from === "kilometer" && option_to==="Meter"){
    result.value = Number(input.value)*1000;
}
else if(option_from === "kilometer" && option_to==="Miles"){
    result.value = Number(input.value)*0.62137;
}

//  Miles to-----Feet,Inches,Centimeter,Yards,Kilometers,Miles,Meter
if(option_from ==="Miles" && option_to==="Feet"){
    result.value = Number(input.value)*5280;
}
else if(option_from ==="Miles" && option_to==="Inches"){
    result.value = Number(input.value)*63360;

}else if(option_from ==="Miles" && option_to==="Centimeter"){ 
    result.value = Number(input.value)/0.0000062137;
}
else if(option_from ==="Miles" && option_to==="Yards"){
    result.value = Number(input.value)*1760;
}
else if(option_from ==="Miles" && option_to==="kilometer"){
    result.value = Number(input.value)/0.62137;
}

else if(option_from ==="Miles" && option_to==="Meter"){
    result.value = Number(input.value)/0.00062137;
}

else if(option_from === "Miles" && option_to==="Miles"){
    result.value = input.value;
}




}
