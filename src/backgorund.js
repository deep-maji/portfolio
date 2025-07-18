const bg = new FinisherHeader({
    "count": 2000,
    "size": {
        "min": 2,
        "max": 3,
        "pulse": 0
    },
    "speed": {
        "x": {
            "min": 0,
            "max": 0.2
        },
        "y": {
            "min": 0,
            "max": 0.1
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
        "center": 0.6,
        "edge": 0
    },
    "skew": 0,
    "shapes": [
        "c", // circle
        "s", // square
        "t"  // triangle
    ]
});