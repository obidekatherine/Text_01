const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#view-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal() {
	CTA.classList.toggle("hide");
	ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;
