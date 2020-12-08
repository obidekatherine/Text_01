const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#view-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
	e.preventDefault();
	CTA.classList.toggle("hide");
	ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;

const IMAGES = document.querySelectorAll("img");
const SIZES = {
	showcase: "100vw",
	reason: "(max-width: 799px) 100vw, 372px",
};

function makeSrcset(imgSrc) {
	let markup = [];
	let width = 400;

	for (let i = 0; i<5; i++) {
		markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
		width+=400;
	}

	return markup.join();
}

for (let i = 0; i<IMAGES.length; i++) {
	let imgSrc = IMAGES[i].getAttribute("src");
	imgSrc = imgSrc.slice(0,-8);
	let srcset = makeSrcset(imgSrc);
	IMAGES[i].setAttribute("srcset", srcset);

	let type = IMAGES[i].getAttribute("data-type");
	let sizes = SIZES[type];
	IMAGES[i].setAttribute("sizes", sizes);
}
