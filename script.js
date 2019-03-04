var build = [];
var Head = {name: "Name", type: "Curriculum", floors: "Floors", year: "Year Built"}
var Olin = {name: "Olin" ,type: "Math", floors: 3, year: 1986};
var Young = {name: "Young", type: "Science", floors: 4, year: 1970};
var Crounse = {name: "Crounse", type: "History", floors: 4, year: 1967};
var Grant = {name: "Grant", type: "Humanities", floors: 5, year: 1973};
build.push(Head,Olin,Young,Crounse,Grant)


    var table = d3.select("body").append("table");
    var cols = table.selectAll("tr")
    .data(build)
    .enter()
    .append("tr");
    cols.append("td").text(function(d){return d.name});
    cols.append("td").text(function(d){return d.type})
    .style("background",function(d){
        if (d.type == "Curriculum"){return "gray"}
        else {return "yellow"};
    cols.append("td").text(function(d){return d.floors})
      .style("background",function(d){
          if (d.floors == 3){return "#ff6666"}
          if (d.floors == 4){return "#6699ff"}
          if (d.floors == 5){return "#cc00ff"}
          else{return "gray"}});

    cols.append("td").text(function(d){return d.year});
