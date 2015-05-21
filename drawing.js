var dataset;

d3.csv("food.csv", function(error, data) {

        if (error) {  //If error is not null, something went wrong.
          console.log(error);  //Log the error.
        } else {      //If no error, the file loaded correctly. Yay!
          console.log(data);   //Log the data.

      //Include other code to execute after successful file load here
      dataset = data;
  		}

	d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d){
    	return d["Food Calories"]*.1 +"px";
    })
    //.text(function(d) { return d.Date +"   "+ d["Food Calories"]; })
    .style("color", function(d){
    	if (d["Food Calories"] > 1800) {
    	return "red"	}
    	else {
    		return "black";
    	}
    	});

});

