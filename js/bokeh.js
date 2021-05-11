const bokehArr = document.querySelectorAll(".bokeh");
const viewHeight = window.innerHeight;
const viewWidth = window.innerWidth;
const dirArr = [-1, 1]
const bokehColors = ['#ffffff', '#e93e68', '#FFC300']

bokehArr.forEach(item => {
    let diam = Math.floor(Math.random() * (200 - 15) + 15)
    let yOffset = Math.round(Math.random() * viewHeight);
    let xOffset = Math.round(Math.random() * viewWidth);
    let orbitDiam = Math.round(Math.random() * (500 - 50) + 50)
    let dir = dirArr[Math.floor(Math.random() * dirArr.length)];
    let col = bokehColors[Math.floor(Math.random() * bokehColors.length)];

    item.style.top = yOffset + 'px';
    item.style.left = xOffset + 'px';
    item.style.height = diam + 'px';
    item.style.width = diam + 'px';
    item.style.boxShadow = `inset 0px 0px 30px 15px ${col}`;

    item.animate([
        { transform: `rotate(0deg) translateX(${orbitDiam}px)` },
        { transform: `rotate(${dir * 360}deg) translateX(${orbitDiam}px)` }
    ], {
        duration: Math.floor(Math.random() * (30000 - 20000) + 20000),
        iterations: Infinity
    });
});