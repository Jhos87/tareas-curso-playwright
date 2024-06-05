//page is https://rahulshettyacademy.com/AutomationPractice/
document.querySelector("#checkBoxOption1").click();
document.querySelector(".radioButton").click();
$x("//fieldset[@class='pull-right']/input[@id='name']")[0].value = "jhos"; 
setTimeout(function(){ console.log("2 seconds") }, 2000);
$x("//fieldset[@class='pull-right']/input[@id='confirmbtn']")[0].click();