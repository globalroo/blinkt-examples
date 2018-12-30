const { Blinkt } = require("blinkt-kit");
const { hsv2rgb_a } = require("blinkt-utils");

const blinkt = new Blinkt();
const spacing = 360.0 / 16;
let hue = 0;

let i = 0;
setInterval(async () => {
	hue = i % 360;
	for (let x = 0; x < 8; x++) {
		const offset = x * spacing;
		const h = (hue + offset) % 360;
		const [r, g, b] = hsv2rgb_a(h, 1, 1);
		blinkt.setPixel({ ix: x, r, g, b });
	}
	blinkt.sendUpdate();
	if (i > 359) {
		i = 0;
	} else {
		i += 0.33;
	}
}, 0);