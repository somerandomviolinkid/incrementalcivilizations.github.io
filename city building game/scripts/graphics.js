function drawTerrain() {
    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgb(0,192,0)";
    ctx.fill();
}

function drawCities() {
    for (let i in playerData.cities) {
        let currentCity = playerData.cities[i];
        let citySize = Math.cbrt(currentCity.information.population);

        let cityLocation = currentCity.information.location;
        let cityX = cityLocation.x - cameraPos.x;
        let cityY = cityLocation.y - cameraPos.y;

        ctx.beginPath();
        ctx.rect((cityX * 10) - (citySize / 2) + 640, (cityY * 10) - (citySize / 2) + 360, citySize, citySize);
        ctx.fillStyle = "white";
        ctx.stroke();
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(currentCity.information.title, (cityX * 10) + 640 - (citySize / 2), (cityY * 10) + 360 - (citySize / 2));

        for (let m in playerData.cities[i].roads) {
            let currentInfo = playerData.cities[playerData.cities[i].roads[m]].information;
            let endLocation = currentInfo.location;
            let endCitySize = Math.cbrt(currentInfo.population);

            let endX = endLocation.x - cameraPos.x;
            let endY = endLocation.y - cameraPos.y;

            ctx.beginPath();
            ctx.moveTo((cityX * 10) + 640, (cityY * 10) + 360);
            ctx.lineTo((endX * 10) + 640, (endY * 10) + 360);
            ctx.stroke();
        }
    }
}

function highlightCity(city) {

}

function drawResources() {
    for (let i in mapData.resources) {
        const img = new Image();
        let location = mapData.resources[i].location;
        img.onload = () => {
            ctx.drawImage(img, ((location.x - cameraPos.x) * 10) + 640, ((location.y - cameraPos.y) * 10) + 360);
        };
        let source = 'assets/' + mapData.resources[i].type + '.png';
        img.src = source;
    }
}

function drawUnits() {

}

function updateMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTerrain();

    ctx.beginPath();
    ctx.moveTo(0, 360);
    ctx.lineTo(1280, 360);
    ctx.moveTo(640, 0);
    ctx.lineTo(640, 720);
    ctx.stroke();

    drawCities();
    drawResources();
    drawUnits();
}

updateMap();

function resetView() {
    cameraPos.x = 0;
    cameraPos.y = 0;
    updateMap();
}