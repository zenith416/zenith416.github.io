;(function(){
var obj = document.getElementById("parameter"),
    pid = obj.getAttribute("pid"),
    lid = obj.getAttribute("lid"),
    sid = obj.getAttribute("sid"),
    cid = obj.getAttribute("cid"),
    h =document.getElementsByTagName("head"),
    latpaw =function(){
      if(sid && sid!=="0"){
        var style = document.createElement("style");
        var def = ".para_table{ border-collapse:collapse;width:98%;margin:10px}.para_table tr:hover{background:#d1dae0}.para_table td{border:1px #999 solid;padding:5px;text-align:center;}.odd{background:#e1eaf0;}.even{background:#efefef}"
          if(window.ActiveXObject){
            style.setAttribute("type","text/css")
            style.styleSheet.cssText = def
          }else{
            style.type="text/css"
            style.innerHTML = def
          }
        h[0].appendChild(style)
      }
    }


             


var sc = document.createElement("script");
sc.type="text/javascript"
// sc.src="http://172.16.2.197:8081/fwww/sbmchina.com/xhr/parameter_api.php?id="+pid+"&lan="+lid+"&cid="+cid+"&callback=say"
sc.src="http://js.sbmchina.com/xhr/parameter_api.php?id="+pid+"&lan="+lid+"&cid="+cid+"&callback=say"
sc.charset="utf-8"
h[0].appendChild(sc)

latpaw()

})(window)


var oddeven = function(){
var obj = document.getElementById("parameter"),
    pid = obj.getAttribute("pid"),
    sid = obj.getAttribute("sid"),
    _pid=pid;
  if(pid=="scm"){_pid="xzm"}
  if(pid=="cs"){_pid="s"}
   var t = document.getElementById("para_"+_pid)
                 if(sid=="9"&&t || sid=="7"&&t){//加odd even
                  for(s in t.rows){
					  /*console.log(t.rows[s])*/
                    if(s%2 == 0){
                      t.rows[s].className = "odd"
                    }else{t.rows[s].className="even"}
                  }
                 }

                 if(sid=="8"&&t || sid=="7"&&t){ // 去除width
                   for(i=0;i<=t.rows.length-1;i++){
                    for(n=0;n<=t.rows[i].cells.length-1;n++){
                      var tmp = t.rows[i].cells[n]
                      var tmp_attr = tmp.getAttribute("width")
                      if(tmp_attr){tmp.removeAttribute("width")}

                    }
                   }
                 }
}

function say(word){
  var para = document.getElementById("parameter")
  para.innerHTML = word
  oddeven()
}
