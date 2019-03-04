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
    cols.append("td").text(function(d){return d.name})
    .style("background",function(d){
        if (d.name == "Name"){return " #f2f2f2"}
        if (d.name == "Olin"){return "#ADD8E6"}
        if (d.name == "Young"){return "#6495ED"}
        if (d.name == "Crounse"){return "#6A5ACD"}
        if (d.name == "Grant"){return "#7B68EE"}


      });
    cols.append("td").text(function(d){return d.type})
    .style("background",function(d){
        if (d.type == "Curriculum"){return " #f2f2f2"}
        else {return "yellow"}});
    cols.append("td").text(function(d){return d.floors})
      .style("background",function(d){
          if (d.floors == 3){return "#FFA07A"}
          if (d.floors == 4){return "#FF75F50"}
          if (d.floors == 5){return "#FF6347"}
          else{return "#f2f2f2"}});

    cols.append("td").text(function(d){return d.year})
              .style("background",function(d){
              if (d.year < 1970){return "#ff6666"}
              if (d.floors == 4){return "#6699ff"}
              if (d.floors == 5){return "#cc00ff"}
              else{return "#f2f2f2"}});
