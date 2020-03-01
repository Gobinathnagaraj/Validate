"use strict";
var $ = function(id);
    return document.getElementById(id);

var submit = function(){
    var Name = $("name").value;
    var Age = $("age").value;
    var isValid = true;
    
if (Name === "") {
    alert("The Name field is required");
    isValid = false;
} else { $("error1").nodeValue = "";}
};


