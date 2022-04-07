const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
// for the dropDown list
function populate1(state,district){
    var state = document.getElementById(state);
    var district = document.getElementById(district);
    district.innerHTML = "";
    if(state.value == "Gujarat"){
        var optionArray =["default|Select District","Vadodara|Vadodara","Ahmedabad|Ahmedabad","gandhiNagar|Gandhi Nagar"];
    }
    else if(state.value == "Bihar"){
        var optionArray = ["default|Select District","Gaya|Gaya","Patna|Patna","Darbhanga|Darbhanga","Nawada|Nawada"];
    }
    else if(state.value == "Up"){
        var optionArray = ["default|Select District","agra|Agra","Mathura|Mathura","Varanasi|Varanasi"];
    }
    else if(state.value == "mumbai"){
        var optionArray = ["default|Select District","aurangabad|Aurangabad","Nagpur|Nagpur","Konkan|Konkan","Amravati|Amaravati"];
    }

    for(var option in optionArray)
    {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        district.options.add(newOption);
    }
}

function populate2(visit,place,state,district){
    var visit = document.getElementById(visit);
    var district = document.getElementById(district);
    var place = document.getElementById(place);
    var state = document.getElementById(state);

    place.innerHTML = "";
    // for gujarat
    if(state.value == "Gujarat" && district.value == "Vadodara" && visit.value == "Museum"){
        var optionArray =["default|Select Place","bmpg|Baroda Museum","mfm|Maharaja Fatesingh"];
    }
    else if(state.value == "Gujarat" && district.value == "Ahmedabad" && visit.value == "Museum"){
        var optionArray =["default|Select Place","PKM| Patang Kite ","LDM | Lalbhai Dalpatbhai","TCM| Calico Museum of Textile"];
    }
    else if(state.value == "Gujarat" && district.value == "gandhiNagar" && visit.value == "Museum"){
        var optionArray =["default|Select Place","dk| Dandi Kutri","ncsc| Nisarg Community Science Center","SPM| Sardar Patel Museum"];
    }

    //for Bihar
    else if(state.value == "Bihar" && district.value == "Gaya" && visirt.value == "Museum"){
        var optionArray =["default|Select Place",""]
    }
    //for Uttar Pradesh

    //Mumbai
    for(var option in optionArray)
    {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        place.options.add(newOption);
    }
}