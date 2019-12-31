document.writeln("<form class=\"form-horizontal\" method=\"post\" name=\"form\" action=\"http://inquiry.zenithcrusher.com/updata.php\" onsubmit=\"return(CheckfootInput())\">");
document.writeln("<table border=\"1\" cellspacing=\"1\">");
document.writeln("<tr>");
document.writeln("<td>");
document.writeln("<input name=\"name\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'Your Name\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'Your Name\';this.style.color=\'#999\';};\" value=\"Your Name\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>");
document.writeln("<input name=\"email\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'Your Email\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'Your Email\';this.style.color=\'#999\';};\" value=\"Your Email\" size=\"25\" maxlength=\"50\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td valign=\"top\"><!-- Textarea -->");
document.writeln("<textarea name=\"content\" cols=\"45\" rows=\"6\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'Message:\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'Message:\';this.style.color=\'#999\';};\">Message:</textarea></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><input type=\"submit\" value=\"Submit Now\" class=\"btn btn-primary\" /></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</form>");
function is_number(str) {
exp = /[^0-9 .+()-]/g;
if (str.search(exp) != -1) {
return false;
}
return true;
}
function is_email(str) {
if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
return false;
}
return true;
}
function CheckfootInput(){

if(document.form.name.value==''||document.form.name.value=='Your Name'){
alert("Please Write Your Name ^_^");
document.form.name.focus();
return false; 
}

if(document.form.email.value==''||document.form.email.value=='Your Email'||!is_email(document.form.email.value)){
alert("Please Write Your Email ^_^");
document.form.email.focus();
return false; 
}

if(document.form.content.value==''||document.form.content.value=='Message:'){
alert("Please Write Your Message ^_^");
document.form.content.focus();
return false; 
}

if(document.form.capacity.value=='As: 20 TPH'){
document.form.capacity.value='';
}

if(document.form.title.value=='As: Marble'){ 
document.form.title.value=''; 
}

if(document.form.phone.value=='As: 0086-21-51860251'){
document.form.phone.value = ''; 
}

return true;
}