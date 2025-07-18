const bg = new FinisherHeader({
    "count": 200,
    "size": {
        "min": 2,
        "max": 3,
        "pulse": 0.5
    },
    "speed": {
        "x": {
            "min": 0,
            "max": 0.2
        },
        "y": {
            "min": 0,
            "max": 0.2
        }
    },
    "colors": {
        "background": "#000000",
        "particles": [
            "#ffffff"
        ]
    },
    "blending": "lighten",
    "opacity": {
        "center": 1,
        "edge": 0
    },
    "skew": 0,
    "shapes": [
        "c", // circle
        "s", // square
        "t"  // triangle
    ]
});


let main = document.querySelector("main");
window.addEventListener("resize", (event) => {
    let canvas = document.querySelector("canvas");
    canvas.remove();
    new FinisherHeader({
    "count": 200,
    "size": {
        "min": 2,
        "max": 3,
        "pulse": 0.5
    },
    "speed": {
        "x": {
            "min": 0,
            "max": 0.2
        },
        "y": {
            "min": 0,
            "max": 0.2
        }
    },
    "colors": {
        "background": "#000000",
        "particles": [
            "#ffffff"
        ]
    },
    "blending": "lighten",
    "opacity": {
        "center": 1,
        "edge": 0
    },
    "skew": 0,
    "shapes": [
        "c", // circle
        "s", // square
        "t"  // triangle
    ]
});
})
