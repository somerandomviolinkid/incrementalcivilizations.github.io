//tab function
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function openCityMenu(cityID) {
    let currentCity = playerData.cities[cityID];
    let currentCityInformation = currentCity.information;
    let currentCityZoning = currentCity.zoning;
    let currentCityIndustries = currentCity.industries;

    document.getElementById("cityTitle").innerHTML = currentCityInformation.title;
    document.getElementById("cityPopulation").innerHTML = "Population: " + currentCityInformation.population;

    document.getElementById("residentialZoneCount").innerHTML = "Residential: " + currentCityZoning.residential;
    document.getElementById("commercialZoneCount").innerHTML = "Commericial: " + currentCityZoning.commerical;
    document.getElementById("industrialZoneCount").innerHTML = "Industrial: " + currentCityZoning.industrial;
}

function openResourceMenu(resourceID) {
    document.getElementById("resourceTitle").innerHTML = mapData.resources[resourceID].type;
}