function worldPosToCameraPos(location) {

}

//stack overflow https://stackoverflow.com/a/24384882
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}

function isInside(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

function pressInsideArea(location) {
    switch (x) {
        case 'city':
            openTab(event, 'cityManager');
            break;
        case 'improvement':
            openTab(event, 'improvementManager');
            break;
        case 'resource':
            openTab(event, 'resourceManager');
            break;
        case 'unit':
            openTab(event, 'unitManager');
            break;
    }
}