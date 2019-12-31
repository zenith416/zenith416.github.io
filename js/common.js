window.onresize = function(){
	if(document.getElementById("conLeft")){
		var conLeftHeight = document.getElementById("conLeft").offsetHeight;
		var conRightHeight = document.getElementById("conRight").offsetHeight;
		if(conLeftHeight > conRightHeight){
			document.getElementById("conLeft").style.height = conLeftHeight + "px";
		}
		else{
			document.getElementById("conLeft").style.height = conRightHeight + "px";
		}
	}		
  }

function setTab(name,num,n){
					for(i=1;i<=n;i++){
					var a = document.getElementById(name+i)
					var b = document.getElementById("proInfo_"+i)
					a.className = i==num? "hover":"none"
					b.style.display = i==num? "block":"none"
					}

				}

$(document).ready(function(){
		    // * Product List backgroud-color begin *
	    var oUrl = window.location.href
	    var proList = $("#conLeft").find("div").find("li");
	    var aNum = proList.length;
		var str = []
		for(var i = 0; i < aNum; i++){
			str.push($("#conLeft").find("div").find("a").eq(i).attr("href"))
		}
		function comp(){
		for(var j = 0; j < aNum; j++){
		  if(oUrl == str[j])
		    return j;
		  }
		}
		proList.eq(comp()).addClass("pro_active")
		proList.eq(comp()).parent().parent().addClass('lis_cur')
		proList.eq(comp()).parent().parent().prev().addClass('curLi')

		var parentProLi = $("#conLeft").children('ul').children('li');
		var parentProLiNum = parentProLi.length;
		var parentProLiStr = [];
		for(var i = 0; i < parentProLiNum-1; i++){
			parentProLiStr.push(parentProLi.eq(i).find("a").attr("href"));
		}
		function whichLi(){
			for(var k=0; k<parentProLiNum; k++){
				if(oUrl.indexOf(parentProLiStr[k]) != -1){
					return k;
				}				
			}
		}
		parentProLi.eq(whichLi()).addClass("curLi");
		parentProLi.eq(whichLi()).next("div").addClass("lis_cur");
		// * Product List backgroud-color end *
	
		// * Current List Menu on right-sidebar in Mining Page begin *
		var m_conRightLi = $("#m_conRight ul li");
		var m_conRightLiNum = m_conRightLi.length; 
		var m_conRightLiStr = [];
		for(var i=0; i<m_conRightLiNum; i++){
			m_conRightLiStr.push(m_conRightLi.eq(i).find("a").attr("href"));
		}
		function m_cmp(){
			for(var i=0; i<m_conRightLiNum; i++){
				if(oUrl.indexOf(m_conRightLiStr[i]) != -1){
					return i;
				}
			}
		}
		m_conRightLi.eq(m_cmp()).addClass("m_curMenu");
		// * Current List Menu on right-sidebar in Mining Page end *


		// set conLeftHeight >= conRightHeight
		if(document.getElementById("conLeft")){
			var conLeftHeight = document.getElementById("conLeft").offsetHeight;
			var conRightHeight = document.getElementById("conRight").offsetHeight;
			if(conLeftHeight > conRightHeight){
				document.getElementById("conLeft").style.height = conLeftHeight + "px";
			}
			else{
				document.getElementById("conLeft").style.height = conRightHeight + "px";
			}
		}
		

		// Page's width < 480px, show the option label.
		var optionList = $("#conLeft").children().children("li");
		var strUrl = [];
		var strText = [];
		for(var i=0; i<optionList.length-1; i++){
			var oOption = document.createElement("option");              
			var valueUrl = optionList.eq(i).find("a").attr("href");
			var valueText = optionList.eq(i).text();
			strUrl.push(valueUrl);
			strText.push(valueText);
			$("#topSelect").append(oOption);
		}
		for(var j=0; j<optionList.length-1; j++){
			$("#topSelect option").eq(j).attr("value",strUrl[j]);
			$("#topSelect option").eq(j).html(strText[j]);
		}

})

function checkForm(){    
			     
              if(document.getElementById("name").value == ""){
                alert("Please Write Your Name!")
                document.getElementById("name").focus();
                return false;
              }
              if(document.getElementById("email").value == ""){
                alert("Please Write Your Email!")
                document.getElementById("email").focus();
                return false;
              }
              else if(document.getElementById("email").value.indexOf("@") < 0 || document.getElementById("email").value.indexOf(".") < 0){
				alert("Please Check Your Email Format!")
                document.getElementById("email").focus();
				return false;
			  }
              if(document.getElementById("country").value == ""){
                alert("Please Write Your Country!")
                document.getElementById("country").focus();
                return false;
              }    
              if(document.getElementById("formMsg").value == ""){
                alert("Please Write Your Detailed Message!")
                document.getElementById("formMsg").focus();
                return false;
              }
              else if(document.getElementById("formMsg").value.length < 5){
              	alert("You Must Write no less than 5 Characters!")
              	document.getElementById("formMsg").focus()
              	return false;
              }
              if(!document.getElementById("construction").checked&&!document.getElementById("mining").checked){
                alert("Please Select Your Application!")
                return false;
              }
                       
            }   