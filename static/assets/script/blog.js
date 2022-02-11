// Nav();
// NavBottom();
labelText();
removeClass()
// function Nav() {
// 	var Menu = document.querySelector('.menu');
// 	var oUl = document.querySelector('.nav_1');
// 	var oLi = document.querySelectorAll('.nav_1 li');
//
// 	Menu.addEventListener('click', () => {
// 		oUl.classList.toggle('open');
//
// 		oLi.forEach((item, index) => {
// 			if (item.style.animation) {
// 				item.style.animation = "";
// 			} else {
// 				/* animation-fill-mode*/
// 				item.style.animation = `slideIn 0.3s ease-in forwards ${index * 0.1 + 0.3}s`;
// 			}
// 		})
//
// 	})
// }
//
//
// function NavBottom() {
// 	var oLi = document.querySelectorAll('.nav_1 li');
// 	var Line = document.querySelectorAll('.n-line');
//
// 	for (var i = 0; i < oLi.length; i++) {
// 		oLi[i].index = i;
// 		oLi[i].onmouseover = function () {
// 			Line[this.index].style.width = '100%';
//
// 		}
// 		oLi[i].onmouseout = function () {
// 			Line[this.index].style.width = '';
// 		}
// 	}
//
// }

function randomColor() {
	var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
	return str;
}

function labelText() {
	var lp = document.querySelectorAll('.label-content p');
	for (var i = 0; i < lp.length; i++) {
		lp[i].style.color = randomColor();
	}

}


function removeClass() {
	const Col = document.querySelectorAll('.col');
	const Col1 = document.querySelectorAll('.col-1');

	window.onresize = function () {
		var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (windowWidth <= 1051) {
			for (var i = 0; i < Col.length; i++) {
				Col[i].classList.remove('col-1');
			}
		} else {
			for (var i = 0; i < Col.length; i++) {
				Col[i].classList.add('col-1');
			}
		}
		//console.log(Col)

	}
	if (Col1) {
		var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (windowWidth <= 1051) {
			for (var i = 0; i < Col1.length; i++) {
				Col1[i].classList.remove('col-1');
			}
		}
	}

}


const text = document.querySelector(".h-text")
const text2 = "这里是一些我不认识的字体。"
let speed = 300;
let idx = 1;
// fontLength()
function fontLength() {

	text.innerText = text2.slice(0, idx)
	idx++
	if (idx > text2.length) {
		idx = 1
	}
	setTimeout(fontLength, speed)
}
