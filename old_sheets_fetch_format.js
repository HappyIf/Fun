let xmlaahttp = new XMLHttpRequest();
xmlaahttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let daaata = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < daaata.length; i++) {
      //var age = daaata[i]["gsx$quiztitle"]["$t"];
      //var timestamp = daaata[i]["gsx$timestamp"]["$t"];
            var person = daaata[i]["gsx$person"]["$t"];
            var correctanswer = daaata[i]["gsx$correctanswer"]["$t"];
if (person=="Anirban") {
  Anirban=Anirban+Number(correctanswer);
  AnirbanN++;
}
      if (person=="Snigdha") {
  Snigdha=Snigdha+Number(correctanswer);
  SnigdhaN++;
}
      if (person=="Alakesh") {
  Alakesh=Alakesh+Number(correctanswer);
  AlakeshN++;
}
    }
    
        var resultenodeb =  document.createElement("td");
  var resultnodeb  = document.createTextNode("Anirban");
      resultenodeb.appendChild(resultnodeb);
  
    var resultenodec=  document.createElement("td");
  var resultnodec= document.createTextNode(Math.round(Anirban/AnirbanN)+"%");
    resultenodec.appendChild(resultnodec);
    
        var resultenodeca=  document.createElement("td");
        resultenodeca.setAttribute("class", "hide");
  var resultnodeca= document.createTextNode(Math.round(Anirban/AnirbanN));
    resultenodeca.appendChild(resultnodeca);
  
    
      var resultetr=  document.createElement("tr");
    resultetr.setAttribute("class", "Table_Rows");
    resultetr.appendChild(resultenodeca);
resultetr.appendChild(resultenodeb);
resultetr.appendChild(resultenodec);
    document.getElementById("result_table").appendChild(resultetr)
    
            var resultenodeb =  document.createElement("td");
  var resultnodeb  = document.createTextNode("Snigdha");
      resultenodeb.appendChild(resultnodeb);
  
    var resultenodec=  document.createElement("td");
  var resultnodec= document.createTextNode(Math.round(Snigdha/SnigdhaN)+"%");
    resultenodec.appendChild(resultnodec);
  
    
            var resultenodecb=  document.createElement("td");
        resultenodecb.setAttribute("class", "hide");
  var resultnodecb= document.createTextNode(Math.round(Snigdha/SnigdhaN));
    resultenodecb.appendChild(resultnodecb);
    
      var resultetr=  document.createElement("tr");
    resultetr.setAttribute("class", "Table_Rows");
        resultetr.appendChild(resultenodecb);
resultetr.appendChild(resultenodeb);
resultetr.appendChild(resultenodec);
    document.getElementById("result_table").appendChild(resultetr)
    
              var resultenodeb =  document.createElement("td");
  var resultnodeb  = document.createTextNode("Alakesh");
      resultenodeb.appendChild(resultnodeb);
  
    var resultenodec=  document.createElement("td");
  var resultnodec= document.createTextNode(Math.round(Alakesh/AlakeshN)+"%");
    resultenodec.appendChild(resultnodec);
  
                var resultenodecc=  document.createElement("td");
       resultenodecc.setAttribute("class", "hide");
  var resultnodecc= document.createTextNode(Math.round(Alakesh/AlakeshN));
    resultenodecc.appendChild(resultnodecc);
    
      var resultetr=  document.createElement("tr");
    resultetr.setAttribute("class", "Table_Rows");
            resultetr.appendChild(resultenodecc);
resultetr.appendChild(resultenodeb);
resultetr.appendChild(resultenodec);  
  
  //var textnoderrr = document.createTextNode(timestamp+"|"+person+"|"+result+"|"+correctanswer);  
      document.getElementById("result_table").appendChild(resultetr);
    sortTable();
  }
  
};

xmlaahttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1fC7e3jRxsic0-IU7lnfID3bfX20So_samNnbaVTOp4o/1/public/full?alt=json",
  true
);
xmlaahttp.send();
