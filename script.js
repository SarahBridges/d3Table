var build = [];
build["Olin"] = {type: "math", floors: "three", year: "1986"};
build["Young"] = {type: "science", floors: "four", year: "1970"};
build["Crounse"] = {type: "history", floors: "four", year: "1967"};
build["Grant"] = {type: "humanities", floors: "five", year: "1973"};

var script = document.createElement("script");
script.src="https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.appendChild(script);


    var table = d3.select("body").append("table");
    var rows = table.selectAll("tr").data(build).enter().append("tr");
    rows.append("td").text(function(d){return d.type});
    rows.append("td").text(function(d){return d.floors});
    rows.append("td").text(function(d){return d.year});
