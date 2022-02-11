NavBottom()
function NavBottom() {
	var oLi = document.querySelectorAll('.nav_1 li');
	var Line = document.querySelectorAll('.n-line');

	for (var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function () {
			Line[this.index].style.width = '100%';
		}
		oLi[i].onmouseout = function () {
			Line[this.index].style.width = '';
		}
	}

}

// Nav()
// function Nav() {
//     var Menu = document.querySelector('.menu');
//     var oUl = document.querySelector('.nav_1');
//     var oLi = document.querySelectorAll('.nav_1 li');
//
//     Menu.addEventListener('click', () => {
//         oUl.classList.toggle('open');
//
//         oLi.forEach((item, index) => {
//             if (item.style.animation) {
//                 item.style.animation = "";
//             } else {
//                 item.style.animation = `slideIn 0.3s ease-in forwards ${index * 0.1 + 0.3}s`;
//             }
//         })
//
//     })
// }

menuUp()
function menuUp() {
	const Menu = document.querySelector('.Menu')
	const MenuH1 = document.querySelector('.Menu h1')
	const MenuN = document.querySelector('.None')
	const Col = document.querySelectorAll('.col')

	MenuH1.addEventListener('click', () => {
		MenuN.style.display = 'block'
		MenuH1.style.display = 'none'
		Menu.style.animation = 'menuUp .5s forwards'
		Menu.style.padding = '30px'
		for (let i = 0; i < Col.length; i++) {
			Col[i].style.display = 'block'
		}
	})
	MenuN.addEventListener('click', () => {
		Menu.style.animation = 'menuDonw .5s forwards'
		MenuN.style.display = 'none'
		MenuH1.style.display = 'block'
		Menu.style.padding = '0px'
		for (let i = 0; i < Col.length; i++) {
			Col[i].style.display = 'none'
		}
	})
}


// Search()
// function Search() {
// 	const oInput = document.querySelector('input')
// 	const Btn = document.querySelector('.searchImg')
// 	const Sou = document.querySelectorAll(".souImg")
// 	let baidu = false
// 	let biying = false
// 	let sougou = false
//
// 	Sou[1].addEventListener("click",function(){
// 		confirm("æ‚¨å·²ç»åˆ‡æ¢ä¸ºç™¾åº¦æœç´¢ï¼")
// 		baidu = true
// 		biying = false
// 		sougou = false
// 	})
// 	Sou[0].addEventListener("click",function(){
// 		confirm("æ‚¨å·²ç»åˆ‡æ¢ä¸ºå¿…åº”æœç´¢ï¼")
// 		baidu = false
// 		biying = true
// 		sougou = false
// 	})
// 	Sou[2].addEventListener("click",function(){
// 		confirm("æ‚¨å·²ç»åˆ‡æ¢ä¸ºæœç‹—æœç´¢ï¼")
// 		baidu = false
// 		biying = false
// 		sougou = true
// 	})
//
// 	Btn.addEventListener('click', function () {
// 		if(baidu){
// 			let InputValue = oInput.value
// 			window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd="+InputValue)
// 		}else if(biying){
// 			let InputValue = oInput.value
// 			window.open("https://cn.bing.com/search?q=" + InputValue)
// 		}else if(sougou){
// 			let InputValue = oInput.value
// 			window.open("https://www.sogou.com/web?query="+InputValue)
// 		}else{
// 			let InputValue = oInput.value
// 			window.open("https://cn.bing.com/search?q=" + InputValue)
// 		}
//
// 	})
//
//
//
// }

// ########################################

// BigImg()
// function BigImg() {
// 	const bigImg = document.querySelector('.big-Img')
// 	const Col = document.querySelectorAll('.col')
// 	const Cha = document.querySelector('.cha')
//
// 	Col[0].addEventListener('click', function () {
// 		bigImg.style.display = 'block'
// 	})
// 	Drag(bigImg)
// 	Cha.addEventListener('click', function () {
// 		bigImg.style.display = 'none'
// 	})
// 	let i=0
// 	bigImg.addEventListener("click",function(){
// 		i++
// 		this.style.zIndex = 50 + i
// 	})
//
//
// }
//
// $(function() {
// 	$.ajax({
// 		url: "../json/image.json",
// 		success: function (arr) {
// 			for (var i = 0; i < arr.length; i++) {
// 				var node = $(`
// 				<img class="bg-container-img" id="${arr[i].id}" src="${arr[i].img}" alt="">
// 				`);
// 				node.appendTo('.bg-container')
// 			}
// 			$('.bg-container').on('click', '.bg-container-img', function () {
// 				var id = this.id
// 				var arr = [{ id: id, num: 1 }]
// 				$.cookie("goods", JSON.stringify(arr), {
// 					expires: 7
// 				})
//                 var bgHeader = document.querySelector('header')
// 				var bgHeader = document.querySelector('header')
// 				var cookieStr = $.cookie("goods");
// 				var cookieArr = JSON.parse(cookieStr);
//
// 				for (var i = 0; i < cookieArr.length; i++) {
//
// 					var d = parseInt(cookieArr[i].id)
//
// 					bgHeader.style.backgroundImage = `url('../img/search/bg${d}-2.png')`
// 				}
// 				bgHeader.style.backgroundImage = `url('../img/search/bg${d}-2.png')`
//
// 			})
// 			var bgHeader = document.querySelector('header')
// 			var cookieStr = $.cookie("goods");
// 			var cookieArr = JSON.parse(cookieStr);
// 			if (cookieStr) {
// 				for (var i = 0; i < cookieArr.length; i++) {
//
// 					var d = parseInt(cookieArr[i].id)
//
// 					bgHeader.style.backgroundImage = `url('../img/search/bg${d}-2.png')`
// 				}
// 			}
// 		},
// 		error: function (msg) {
// 			console.log(msg)
// 		}
// 	})
// 	if(!$.cookie("goods")){
// 		const bgHeader = document.querySelector('header')
// 		bgHeader.style.backgroundImage = 'url(../img/search/bg1-2.png)'
// 	}
// })
//
// function Drag(oDiv){
// 	// const bigImg = document.querySelector('.big-Img')
// 	// const oH3 = document.querySelector('.oh3')
// 	oDiv.onmousedown = function(ev){
// 		var e = ev || window.event;
// 		var offsetX = e.clientX - oDiv.offsetLeft;
// 		var offsetY = e.clientY - oDiv.offsetTop;
//
// 		document.onmousemove = function(ev){
// 			var e = ev || window.event;
// 			oDiv.style.left = e.clientX - offsetX + 'px';
// 			oDiv.style.top = e.clientY - offsetY + 'px';
// 		}
// 	}
// 	document.onmouseup = function(){
// 		document.onmousemove = null;
// 	}
// }
//
/* time */
function twoNum(num){
	return num < 10 ? `0${num}`:num
}
function clock(){
	let hours = document.querySelector('.hour')
	let minutes = document.querySelector('.minutes')
	let seconds = document.querySelector('.seconds')

	let h = new Date().getHours()
	let m = new Date().getMinutes()
	let s = new Date().getSeconds()

	hours.innerHTML = twoNum(h)
	minutes.innerHTML = twoNum(m)
	// seconds.innerHTML = twoNum(s)
}
setInterval(clock,1000)

// Switch()
// function Switch(){
// 	const swit = document.querySelector(".switch")
// 	const bgImg = document.querySelectorAll(".bgImg")
// 	const Cha = document.querySelector('.switch .cha')
//
// 	bgImg[1].addEventListener("click",function(){
// 		swit.style.display = "block"
// 	})
// 	Cha.addEventListener("click",function(){
// 		swit.style.display = "none"
// 	})
// 	let i=0
// 	swit.addEventListener("click",function(){
// 		i++
// 		swit.style.zIndex = 50 + i
// 	})
//
// 	Drag(swit)
// }