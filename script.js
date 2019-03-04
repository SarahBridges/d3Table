var build = [];
var Head = {name: "Name", type: "Curriculum", floors: "Floors", year: "Year Built"}
var Olin = {name: "Olin" ,type: "math", floors: "three", year: "1986"};
var Young = {name: "Young", type: "science", floors: "four", year: "1970"};
var Crounse = {name: "Crounse", type: "history", floors: "four", year: "1967"};
var Grant = {name: "Grant", type: "humanities", floors: "five", year: "1973"};
build.push(Head,Olin,Young,Crounse,Grant)


    var table = d3.select("body").append("table");
    var rows = table.selectAll("tr")
    .data(build)
    .enter()
    .append("tr");
    rows.append("td").text(function(d){return d.name});
    rows.append("td").text(function(d){return d.type});
    rows.append("td").text(function(d){return d.floors});
    rows.append("td").text(function(d){return d.year});
