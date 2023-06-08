function worldPosToCameraPos(location) {
    let hitX = (location.x / 10) + cameraPos.x;
    let hitY = (location.y / 10) + cameraPos.y;

    return { x: hitX, y: hitY };
}

function isInsideBox(clickLocation) {
    let x = clickLocation.x;
    let y = clickLocation.y;

    for (const i in playerData.cities) {
        let cityX = playerData.cities[i].information.location.x;
        let cityY = playerData.cities[i].information.location.y;
        let citySize = Math.cbrt(playerData.cities[i].information.population / 1000);

        if (cityX - citySize <= x && x <= cityX + citySize && cityY - citySize <= y && y <= cityY + citySize) {
            highlightCity();
            return ['city', i];
        }
    }

    for (const i in mapData.resources) {
        let resourceX = mapData.resources[i].location.x;
        let resourceY = mapData.resources[i].location.y;
        let resourceSize = 2;

        if (resourceX - resourceSize <= x && x <= resourceX + resourceSize && resourceY - resourceSize <= y && y <= resourceY + resourceSize) {
            highlightCity();
            return ['resource', i];
        }
    }

    return [null, null];
}

function select(event) {
    let location = { x: (event.clientX - 640), y: (event.clientY - 360) };
    let returns = isInsideBox(worldPosToCameraPos(location));

    switch (returns[0]) {
        case 'city':
            openTab(event, 'cityManager');
            openCityMenu(returns[1]);
            break;
        case 'improvement':
            openTab(event, 'improvementManager');
            break;
        case 'resource':
            openTab(event, 'resourceManager');
            openResourceMenu(returns[1]);
            break;
        case 'unit':
            openTab(event, 'unitManager');
            break;
        default:
            openTab(event, 'settings');
    }
}

document.getElementById("viewBox").addEventListener("click", select);

window.addEventListener(
    "keydown",
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }

        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                cameraPos.y++;
                updateMap();
                break;
            case "KeyA":
            case "ArrowLeft":
                cameraPos.x--;
                updateMap();
                break;
            case "KeyS":
            case "ArrowDown":
                cameraPos.y--;
                updateMap();
                break;
            case "KeyD":
            case "ArrowRight":
                cameraPos.x++;
                updateMap();
                break;
            case "KeyR":
                resetView();
                break;
        }

        if (event.code !== "Tab") {
            // Consume the event so it doesn't get handled twice,
            // as long as the user isn't trying to move focus away
            event.preventDefault();
        }
    },
    true
);