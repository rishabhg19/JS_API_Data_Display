fetch("https://randomuser.me/api/?results=5").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData['results']);
    let tableData = "";
    objectData['results'].map((values)=>{
        //tableData+=`<h1>${values['name']['title'] + " " + values['name']['first'] + " " + values['name']['last']}</h1>`;
        tableData += `<tr><td>${values['name']['first']}</td><td>${values.location.city}</td></tr>`;
    });
    document.getElementById("table-body").innerHTML=tableData;
});