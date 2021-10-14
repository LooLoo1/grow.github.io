let b = document.querySelector('#citeLoad');
window.addEventListener("load", function (event) {
	b.style.animation = "shadow-inset-center 2s ease-out forwards";
});


//Позиціонування дерева
const marginLeft = document.querySelector(".conteiner");
const tree = document.querySelector(".title-tree");
window.addEventListener('resize', locationTree);
window.onload = locationTree();

function locationTree() {
	const leftSize = marginLeft.offsetLeft;
	tree.style.left = "-" + leftSize + 'px';
}


// Меню бургер
const navBtn = document.querySelectorAll(".menu__btn");
const navMobile = document.querySelector(".menu__mobile");
const navBlur = document.querySelectorAll(".menu__list");

for (let i = 0; i < navBtn.length; i++) {
	navBtn[i].onclick = function () {
		for (let i = 0; i < navBtn.length; i++) { navBtn[i].classList.toggle('active'); }
		navMobile.classList.toggle('active');
		navBlur[1].classList.toggle('active');
	}
}


// Інформаційна панель
const infoPanel = document.querySelector(".info__panel");
const infoPBtn = document.querySelector(".info__panel .btn");
const btnInfoPanel = [document.querySelector(".menu__list-btn"), document.querySelector(".information .btn")];
infoPBtn.onclick = function () {
	infoPanel.classList.toggle('active');
}
for (let i = 0; i < navBtn.length; i++) {
	btnInfoPanel[i].onclick = function () {
		infoPanel.classList.toggle('active');
	}
}




// Слайдер
const arrowNext = document.querySelector(".arrow__next");
const arrowPrev = document.querySelector(".arrow__prev");
const sliderItem = document.querySelectorAll(".slider__bg-img");
let count = 0;

arrowNext.onclick = function () {
	forBG();
	countAdd();
	addBG();
}

function countAdd() {
	if (count + 1 < sliderItem.length) {
		count++;
	} else { count = 0; }
}

arrowPrev.onclick = function () {
	forBG()
	if (count - 1 < 0) {
		count = sliderItem.length - 1;
	} else { count--; }
	addBG();
}

function forBG() {
	for (let i = 0; i < sliderItem.length; i++) {
		sliderItem[i].classList.remove('active');
	}
}

function addBG() {
	sliderItem[count].classList.add('active');
	if (count == 0) {
		tree.classList.add('active')
	} else { tree.classList.remove('active') }
}

setInterval(() => {
	forBG();
	countAdd();
	addBG();
}, 15000);
