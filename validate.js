function Validation (){
	var Name = document.getElementById("name").value;
	var Age = document.getElementById("age").value;
	var Mail = document.getElementById("mail").value;
	var Passwd = document.getElementById("pass").value;
	var Repass = document.getElementById("rpass").value;
	
	if (name.value === ""){
		alert("Please fill the name field");
		name.focus()
		return false
	}
	if (age.value === ""){
		alert("Please fil the age field");
		age.focus()
		return false
	}
	if (mail.value === ""){
		alert("please fill the mail field");
		mail.focus()
		return false
	}
	if (pass.value === ""){
		alert("Please fill the password field");
		pass.focus()
		return false
	}
	if (rpass.value === ""){
			alert("Please fill the re-entry field");
			rpass.focus()
			return false
	}else if (rpass.value !== pass.value){
		alert("This field is must match on 1st entry");
		rpass.focus()
		return true
	}
	else {
		
	}
}