var build = [];
var Head = {name: "Name", type: "Curriculum", floors: "Floors", year: "Year Built"}
var Olin = {name: "Olin" ,type: "Math", floors: "Three", year: "1986"};
var Young = {name: "Young", type: "Science", floors: "Four", year: "1970"};
var Crounse = {name: "Crounse", type: "History", floors: "Four", year: "1967"};
var Grant = {name: "Grant", type: "Humanities", floors: "Five", year: "1973"};
build.push(Head,Olin,Young,Crounse,Grant)


    var table = d3.select("body").append("table");
    var rows = table.selectAll("tr")
    .data(build)
    .enter()
    .append("tr");
    rows.append("td").text(function(d){return d.name}).style("border","solid 5px black";)
    rows.append("td").text(function(d){return d.type});
    rows.append("td").text(function(d){return d.floors});
    rows.append("td").text(function(d){return d.year});
