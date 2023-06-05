function drawTerrain() {

}

function drawCities() {
    for (let x in playerData.cities) {
        let currentCity = playerData.cities[x];
        let citySize = Math.cbrt(currentCity.information.population);

        let cityLocationX = currentCity.information.location.x;
        let cityLocationY = currentCity.information.location.y;

        ctx.beginPath();
        ctx.rect(cityLocationX - citySize + 640, cityLocationY - citySize + 360, citySize, citySize);
        ctx.stroke();
        ctx.font = "30px Arial";
        ctx.fillText(currentCity.information.title, cityLocationX - citySize + 640, cityLocationY - citySize + 360);
    }
}

function drawResources() {

}

function drawUnits() {

}

function updateMap() {
    drawTerrain();
    drawCities();
    drawResources();
    drawUnits();
}

updateMap();