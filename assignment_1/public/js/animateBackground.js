/**
 * animateBackground.js 
 * Kris Oud - 301274712
 * Sept 27th, 2023
 */

/**
 * Sky
 */
const stop1 = document.getElementById('gradient-stop1')
const stop2 = document.getElementById('gradient-stop2')

/**
 * Clouds
 */
const clouds = [  
    cloudObjectFactory('cloud1'),
    cloudObjectFactory('cloud2'),
    cloudObjectFactory('cloud3'),
    cloudObjectFactory('cloud4'),
    cloudObjectFactory('cloud5'),
    cloudObjectFactory('cloud6'),
    cloudObjectFactory('cloud7'),
    cloudObjectFactory('cloud8'),
    cloudObjectFactory('cloud9'),
]

function cloudObjectFactory(id) {
    return {
        ref: document.getElementById(id),
        x: (Math.random() - 0.5) * window.innerWidth,
        y: 150 + (Math.random() * window.innerHeight - 50),
        xDelta: 0.55 + (Math.random() * 0.5),
        scale: Math.ceil(Math.random() * 6) + 2
    }
}

function moveClouds() {
    clouds.forEach(cloud => {
        cloud.x += cloud.xDelta
        if (cloud.x > window.innerWidth) {
            cloud.x = -150
            cloud.y = 150 + (Math.random() * window.innerHeight - 50)
            cloud.xDelta = 0.25 + (Math.random() * 0.5)
            cloud.scale = Math.ceil(Math.random() * 6) + 2
        }
        cloud.ref.setAttributeNS(null, 'transform', `translate(${cloud.x.toFixed(2)}, ${cloud.y.toFixed(2)}) scale(${cloud.scale}, ${cloud.scale})`)
    });
    
}

/**
 * Rocket
 */
const rocket = {
    groupRef: document.getElementById('rocket'),
    bodyRef: document.getElementById('rocketBody'),
    bodyPaintRef: document.getElementById('rocketBody_paint'),
    flameRef: document.getElementById('rocketFlame'),
    yDelta: 0,
    x: 0,
    y: 0,
    resetCeiling: 0,
    flameOnFrames: 0,
    flameOffFrames: 0,
    flameOn: true,
    flameFrameCounter: 0
}

function resetRocket() {
    rocket.yDelta = (Math.random() * 2) + 2
    rocket.x = Math.random() * window.innerWidth
    rocket.y = window.innerHeight * 1.2
    rocket.resetCeiling = -1 * (200 + (Math.random() * 500))
    rocket.flameOnFrames = 50 + (Math.random() * 50)
    rocket.flameOffFrames = 20 + (Math.random() * 25)
    rocket.flameFrameCounter = 0
}

resetRocket() //Set initial values for first load

function paintRocket() {
    rocket.bodyPaintRef.setAttributeNS(null, 'style', `fill:hsl(${Math.floor(Math.random() * 255)}, ${(Math.random() * 20) + 50}%, 50%);fill-opacity:1;stroke:#000000`)
}

function moveRocket() {
    
    //Animate flame
    rocket.flameFrameCounter++
    if (rocket.flameOn && (rocket.flameFrameCounter > rocket.flameOnFrames)) {
        rocket.flameRef.setAttributeNS(null, 'opacity', 0)
        rocket.flameFrameCounter = 0
        rocket.flameOn = false
    } else if (!rocket.flameOn && (rocket.flameFrameCounter > rocket.flameOffFrames)) {
        rocket.flameRef.setAttributeNS(null, 'opacity', 1)
        rocket.flameFrameCounter = 0
        rocket.flameOn = true
    }

    //Check rockets height for reset
    if (rocket.y < rocket.resetCeiling) {
        paintRocket()
        resetRocket()
    }

    //Move rocket on screen - moves faster when flame is on
    rocket.y -= (rocket.flameOn) ? rocket.yDelta : rocket.yDelta * 0.5
    rocket.groupRef.setAttributeNS(null, 'transform', `translate(${rocket.x}, ${rocket.y}) scale(5, 5)`)
}
/**
 * Render Frame
 */
function animate() {
    moveClouds()
    moveRocket()
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)