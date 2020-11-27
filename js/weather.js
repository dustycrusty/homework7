function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;

    // Your code here.
    if (document.getElementById("location").value == "") {
        location = "Ann Arbor";
    } else {
        location = document.getElementById("location").value;
    };
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;

    // Your code here.
    if (document.getElementById("fahrenheit").checked) {
        format = document.getElementById("fahrenheit").value;
    } else if (document.getElementById("celcius").checked) {
        format = document.getElementById("celcius").value;
    } else {
        format = document.getElementById("fahrenheit").value;
    };
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    
    var params = {};

    params["appid"] = "eb5d05dfd54c53d284bd6c1aabdc8c36";
    params["units"] = format;
    if (location.match(/^([0-9]){5}/)) {
        params["zip"] = location;
    } else {
        params["q"] = location;
    };

    var url = "https://api.openweathermap.org/data/2.5/weather?";
    var stringified =new URLSearchParams(params).toString();
    query = url + stringified;
    console.log("Query is :" + query);

    
    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    loc = document.getElementById("loc");
    temp = document.getElementById("temp");
    tempImg = document.getElementById("tempImg");
    
    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc.textContent = json["name"];
        temp.textContent = json["main"]["temp"];
        tempImg.src = "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
        document.getElementById("forecast").style.display = "block";
        tempImg.alt = json.weather[0]["description"];
    });
}
