function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;

    location = document.getElementById("location").value;
    let reg = /(\S+(\s*\S+)*),\s(\S+)/g;
    if (!location.match(reg)) {
        location = "Ann Arbor, US"
    }


    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let fomat;

    format = "imperial";
    if (document.getElementById("celcius").checked) {
        format = "metric";
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  

    let api_key = "6ac972a891f0fcdfc6c3cbf5039b0d8c";
    query = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${format}&appid=${api_key}`;
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        console.log(JSON.stringify(json));
        // Your code here.

        loc = json.name;
        temp = json.main.temp + " with " + json.weather[0].description;
        tempImg = "http://openweathermap.org/img/wn/" + json.weather[0].icon + ".png";

        document.getElementById("loc").textContent = loc;
        document.getElementById("temp").textContent = temp;
        document.getElementById("tempImg").alt = json.weather[0].description;
        document.getElementById("tempImg").src = tempImg;
        document.getElementById("forecast").style.display = "block";
    });
}
