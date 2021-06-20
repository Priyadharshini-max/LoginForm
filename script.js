/** Create a Container Div**/
var container = document.createElement("div");
container.setAttribute("class","container");
container.setAttribute("id","outerContainer");
document.body.appendChild(container);

// Create Row
var div = document.createElement("div");
div.setAttribute("class","row");
container.appendChild(div);

// Create Column
var col1 = document.createElement("div");
col1.setAttribute("class","col-12");
div.append(col1);

//Form heading
var title = document.createElement("label");
title.innerHTML="FILL YOUR DETAILS";
title.setAttribute("id","formTitle");
col1.appendChild(title);

/** Create a Form**/
var form = document.createElement("form");
form.setAttribute("name","userForm");
col1.appendChild(form);

/* First Name Label Append */
var label = document.createElement("label");
label.setAttribute("class","Fnameheading");
label.innerHTML = "FirstName"
form.appendChild(label);

/* Last Name Label Append */
var label = document.createElement("label");
label.innerHTML = "LastName";
label.setAttribute("class","Lnameheading");
form.appendChild(label);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//FirstName Input field
var textbox = document.createElement("input");
textbox.setAttribute("type","text");
textbox.setAttribute("class","firstname");
textbox.autocomplete="off";
textbox.setAttribute("onkeypress", "return /[A-Z ]/i.test(event.key)");
form.appendChild(textbox);

//LastName Input field
var textbox = document.createElement("input");
textbox.setAttribute("type","text");
textbox.setAttribute("class","lastname");
textbox.autocomplete="off";
textbox.setAttribute("onkeypress", "return /[A-Z ]/i.test(event.key)");
form.appendChild(textbox);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create Span to display firstname error
var span = document.createElement("span");
span.setAttribute("class","errorFname");
form.appendChild(span);

//Create Span to display lastname error
var span = document.createElement("span");
span.setAttribute("class","errorLname");
form.appendChild(span);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

/* Address Label Append */
var label = document.createElement("label");
label.innerHTML = "Address";
label.setAttribute("class","Addressheading");
form.appendChild(label);

/* Pincode Label Append */
var label = document.createElement("label");
label.innerHTML = "Pincode";
label.setAttribute("class","pinCodeheading");
form.appendChild(label);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create Input field for Address
var textbox = document.createElement("input");
textbox.setAttribute("type","text");
textbox.autocomplete="off";
textbox.setAttribute("id","address");
form.appendChild(textbox);

//Create Input field for Pincode
var textbox = document.createElement("input");
textbox.setAttribute("type","text");
textbox.setAttribute("id","pincode");
textbox.autocomplete="off";
textbox.setAttribute("onkeypress", "return /[0-9]/g.test(event.key)");
textbox.setAttribute("maxlength","6");
form.appendChild(textbox);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create Span to display address error
var span = document.createElement("span");
span.setAttribute("class","errorAddress");
form.appendChild(span);

//Create Span to display pincode error
var span = document.createElement("span");
span.setAttribute("class","errorPin");
form.appendChild(span);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

/* Gender Label Append */
var label = document.createElement("label");
label.innerHTML = "Gender";
label.setAttribute("class","Genderheading");
form.appendChild(label);

//Create Span to display Gender error
var span = document.createElement("span");
span.setAttribute("class","errorGender");
form.appendChild(span);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create radio button for female
var textbox = document.createElement("input");
textbox.setAttribute("type","radio");
textbox.setAttribute("name","gender");
textbox.setAttribute("value","female");
form.appendChild(textbox);

var label = document.createElement("label");
label.innerHTML = "Female"
label.setAttribute("class","radiobtn");
form.appendChild(label);

//Create radio button for male
var textbox = document.createElement("input");
textbox.setAttribute("type","radio");
textbox.setAttribute("name","gender");
textbox.setAttribute("value","male");
form.appendChild(textbox);

var label = document.createElement("label");
label.innerHTML = "Male";
label.setAttribute("class","radiobtn");
form.appendChild(label);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

/* Choice of food Label Append */
var label = document.createElement("label");
label.innerHTML = "Choice of food";
label.setAttribute("class","Foodheading");
form.appendChild(label);

//Create Span to display checkbox error
var span = document.createElement("span");
span.setAttribute("id","checkboxSpan");
form.appendChild(span);

//Line break
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create checkbox
var textbox = document.createElement("input");
textbox.setAttribute("type","checkbox");
textbox.setAttribute("name","food");
textbox.setAttribute("value","Biriyani");
form.appendChild(textbox);

var label = document.createElement("label");
label.innerHTML = "Biriyani"
label.setAttribute("class","checkbx");
form.appendChild(label);
var linebreak = document.createElement("br");
form.appendChild(linebreak);

var textbox = document.createElement("input");
textbox.setAttribute("type","checkbox");
textbox.setAttribute("name","food");
textbox.setAttribute("value","PaneerButterMasala");
form.appendChild(textbox);

var label = document.createElement("label");
label.innerHTML = "PaneerButterMasala";
label.setAttribute("class","checkbx");
form.appendChild(label);
var linebreak = document.createElement("br");
form.appendChild(linebreak);

var textbox = document.createElement("input");
textbox.setAttribute("type","checkbox");
textbox.setAttribute("name","food");
textbox.setAttribute("value","Pizza");
form.appendChild(textbox);

var label = document.createElement("label");
label.innerHTML = "Pizza";
label.setAttribute("class","checkbx");
form.appendChild(label);
var linebreak = document.createElement("br");
form.appendChild(linebreak);

var textbox = document.createElement("input");
textbox.setAttribute("type","checkbox");
textbox.setAttribute("name","food");
textbox.setAttribute("value","DahiPapdi");
form.appendChild(textbox);

var label = document.createElement("label");
label.innerHTML = "DahiPapdi ";
label.setAttribute("class","checkbx");
form.appendChild(label);
var linebreak = document.createElement("br");
form.appendChild(linebreak);

var textbox = document.createElement("input");
textbox.setAttribute("type","checkbox");
textbox.setAttribute("name","food");
textbox.setAttribute("value","Rasmalai");
form.appendChild(textbox);

var label = document.createElement("label");
label.innerHTML = "Rasmalai ";
label.setAttribute("class","checkbx");
form.appendChild(label);
// Linebreak
var linebreak = document.createElement("br");
form.appendChild(linebreak);

/* State Label Append */
var label = document.createElement("label");
label.innerHTML = "State";
label.setAttribute("class","Stateheading");
form.appendChild(label);

/* Country Label Append */
var label = document.createElement("label");
label.innerHTML = "Country";
label.setAttribute("class","countryheading");
form.appendChild(label);

// Linebreak
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create input field for state
var textbox = document.createElement("input");
textbox.setAttribute("type","text");
textbox.autocomplete="off";
textbox.setAttribute("id","stateId");
textbox.setAttribute("onkeypress", "return /[A-Z ]/i.test(event.key)");
form.appendChild(textbox);

//Create input field for Country
var textbox = document.createElement("input");
textbox.setAttribute("type","text");
textbox.autocomplete="off";
textbox.setAttribute("id","CountryId");
textbox.setAttribute("onkeypress", "return /[A-Z ]/i.test(event.key)");
form.appendChild(textbox);

//Linebreak
var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create span to dispaly state error
var span = document.createElement("span");
span.setAttribute("class","errorState");
form.appendChild(span);

//Create span to dispaly country error
var span = document.createElement("span");
span.setAttribute("class","errorCountry");
form.appendChild(span);

var linebreak = document.createElement("br");
form.appendChild(linebreak);

//Create button to submit form
var textbox = document.createElement("input");
textbox.setAttribute("type","button");
textbox.setAttribute("value","Submit");
textbox.setAttribute("onclick","formSubmit()");
form.appendChild(textbox);

//Create heading for table
var details =  document.createElement("h4");
details.setAttribute("class","details");
details.innerHTML = "User Details : " 
document.body.appendChild(details);

//Create div to display user details table
var SecondDiv = document.createElement("div");
SecondDiv.setAttribute("id","SecondDiv");
document.body.appendChild(SecondDiv);

//Create firstRow for table  
var div = document.createElement("div");
div.setAttribute("class","row");
div.setAttribute("id","firstRow");
SecondDiv.appendChild(div);

 //Create Column and Column name
var title = ["FirstName","LastName","Address","Pincode","Gender","Food","State","Country"];
title.forEach(element => {
   if(element != "Gender" && element != "Pincode" && element != "State" && element != "Country"){
      var Col=document.createElement("div");
      Col.setAttribute("class","col-2");
      Col.innerHTML=element;
      firstRow.appendChild(Col);
   }else{
      var Col=document.createElement("div");
      Col.setAttribute("class","col-1");
      Col.innerHTML=element;
      firstRow.appendChild(Col);
   }
});

//Form vaildation function
function formSubmit(){
   var div = document.createElement("div");
   div.setAttribute("class","row");
   SecondDiv.appendChild(div);
   
   //Check firstName empty or not
   var Col=document.createElement("div");
   Col.setAttribute("class","col-2");
   Col.innerHTML=document.getElementsByClassName("firstname")[0].value;
   if(Col.innerHTML == '') {
    var isFirst = false;
    document.getElementsByClassName('errorFname')[0].innerHTML = "FirstName is Required";
   }
   else {
    var isFirst = true;
    document.getElementsByClassName('errorFname')[0].innerHTML = "";
   }
   
    //Check lastName empty or not
   var Col1=document.createElement("div");
   Col1.setAttribute("class","col-2");
   Col1.innerHTML=document.getElementsByClassName("lastname")[0].value;
   if(Col1.innerHTML == '') {
    var isLast = false;
    document.getElementsByClassName('errorLname')[0].innerHTML = "LastName is Required";
   }
   else {
    var isLast = true;
    document.getElementsByClassName('errorLname')[0].innerHTML = "";
   }
  
    //Check address empty or not
   var Col2=document.createElement("div");
   Col2.setAttribute("class","col-2");
   Col2.innerHTML=document.getElementById("address").value;
   if(Col2.innerHTML == '') {
   var isAddress = false;
   document.getElementsByClassName('errorAddress')[0].innerHTML = "Address is Required";
   }
   else {
   var isAddress = true;
   document.getElementsByClassName('errorAddress')[0].innerHTML = "";
   }
   
    //Check pinCode empty or not
   var Col3=document.createElement("div");
   Col3.setAttribute("class","col-1");
   Col3.innerHTML=document.getElementById("pincode").value;
   if(Col3.innerHTML == '') {
   var isPin = false;
   document.getElementsByClassName('errorPin')[0].innerHTML = "PinCode is Required";
   }
   else {
   var isPin = true;
   document.getElementsByClassName('errorPin')[0].innerHTML = "";
   }
   
    //Check gender empty or not
   var Col4=document.createElement("div");
   Col4.setAttribute("class","col-1");
   var gender =document.querySelector('input[name="gender"]:checked');
   if(gender!=null){
   var isGender = true;
   Col4.innerHTML=gender.value;
   document.getElementsByClassName('errorGender')[0].innerHTML = "";
   }
   else{
   var isGender = false;
   document.getElementsByClassName('errorGender')[0].innerHTML = " [Gender is Required]";
   }

    //Check checkBox empty or not
   var Col5=document.createElement("div");
   Col5.setAttribute("class","col-2");
   var markedCheckbox = document.getElementsByName("food");
   var len=[];
   for(var j of markedCheckbox){
   if(j.checked){
    len.push(j);
   }
  }

for(var i of markedCheckbox){
   if(len.length>=2){
      if(i.checked){
         Col5.innerHTML += i.value+" ";
      }
    var isFood = true;
    document.getElementById('checkboxSpan').innerHTML = "";
   }
   else{
    var isFood = false;
    document.getElementById('checkboxSpan').innerHTML = " [Select Atleast Two]";
   }
}
  
 //Check State empty or not
   var Col6=document.createElement("div");
   Col6.setAttribute("class","col-1");
   Col6.innerHTML=document.getElementById("stateId").value;
   if(Col6.innerHTML == '') {
    var isState = false;
    document.getElementsByClassName('errorState')[0].innerHTML = "State is Required";
   }
   else {
    var isState = true;
    document.getElementsByClassName('errorState')[0].innerHTML = "";
   }
  
    //Check Country empty or not
   var Col7=document.createElement("div");
   Col7.setAttribute("class","col-1");
   Col7.innerHTML=document.getElementById("CountryId").value;
   if(Col7.innerHTML == '') {
    var isCountry = false;
    document.getElementsByClassName('errorCountry')[0].innerHTML = "Country is Required";
   }
   else {
    var isCountry = true;
    document.getElementsByClassName('errorCountry')[0].innerHTML = "";
   }

   if(isFirst && isLast && isAddress && isPin && isGender && isFood && isState && isCountry) {

       document.getElementsByClassName("details")[0].style.display = "block";
       document.getElementById("SecondDiv").style.display = "block"; 

    //If all values are true , It will addend in userDetails table
    firstRow.append(Col,Col1,Col2,Col3,Col4,Col5,Col6,Col7);

    //Empty the values
    document.getElementsByClassName("firstname")[0].value="";

    document.getElementsByClassName("lastname")[0].value="";

    document.getElementById("address").value="";
    
    document.getElementById("pincode").value="";

    var gender =document.querySelector('input[name="gender"]:checked');
    gender.checked = false;
    
    var markedCheckbox = document.getElementsByName("food");
    for (let index = 0; index < markedCheckbox.length; index++) {
         markedCheckbox[index].checked = false;
    }
    document.getElementById("stateId").value="";
    document.getElementById("CountryId").value="";
   }
}

