//Declarations
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const thirdCard = document.querySelector('#thirdCard');

const divGo = document.querySelector('.divGo');
const divGo1 = document.querySelector('.divGo1');
const divGo2 = document.querySelector('.divGo2');
const divGo3 = document.querySelector('.divGo3');
const divGo4 = document.querySelector('.divGo4');
const divGo5 = document.querySelector('.divGo5');
const divGo6 = document.querySelector('.divGo6');
const divGo7 = document.querySelector('.divGo7');
const divGo8 = document.querySelector('.divGo8');

const flex_container = document.querySelector('.flex-container');
const flex_container2 = document.querySelector('.flex-container2');
const flex_container3 = document.querySelector('.flex-container3');
const flex_container4 = document.querySelector('.flex-container4');
const btn = document.querySelector('#btn');

firstCard.addEventListener('click', openOffer);
secondCard.addEventListener('click', openOffer2);
thirdCard.addEventListener('click', openOffer3);


function openOffer(){
	secondCard.remove();
	thirdCard.remove();
	firstCard.style.color = '#fff';
	firstCard.style.marginLeft = 'auto';
	firstCard.style.marginRight = 'auto';
	firstCard.style.animation = 'slideInFromLeft 1s';
	firstCard.style.transform = 'scale(0)';
	setTimeout(delFC,1000);
}
function openOffer2(){
	firstCard.remove();
	thirdCard.remove();
	secondCard.style.marginLeft = 'auto';
	secondCard.style.marginRight = 'auto';
	secondCard.style.color = '#fff';
	secondCard.style.width = '340px';
	secondCard.style.transform = 'scale(0)';
	setTimeout(delFC2, 950);
}
function openOffer3(){
	secondCard.remove();
	firstCard.remove();
	thirdCard.style.marginLeft = 'auto';
	thirdCard.style.marginRight = 'auto';
	thirdCard.style.animation = 'slideInFromRight 1s';
	thirdCard.style.color = '#fff';
	setTimeout(delFC3, 1000);
}

function delFC(){
	flex_container.remove();
	flex_container2.style.display = 'flex';
	btn.style.display = 'block';
	divGo.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	divGo1.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
}
function delFC2(){
	flex_container.remove();
	flex_container3.style.display = 'flex';
	divGo2.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	divGo3.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	divGo4.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	btn.style.display = 'block';
}
function delFC3(){
	flex_container.remove();
	flex_container4.style.display = 'flex';
	divGo5.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	divGo6.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	divGo7.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	divGo8.style.boxShadow = '0 0 10px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),0 0 20px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255),0 0 10px rgb(255, 255, 255)';
	btn.style.display = 'block';
}


divGo.addEventListener('click',divClick);
divGo1.addEventListener('click',divClick1);
divGo2.addEventListener('click',divClick2);
divGo3.addEventListener('click',divClick3);
divGo4.addEventListener('click',divClick4);
divGo5.addEventListener('click',divClick5);
divGo6.addEventListener('click',divClick6);
divGo7.addEventListener('click',divClick7);
divGo8.addEventListener('click',divClick8);

function divClick(){
	divGo.innerHTML = '<h3>50,000 USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo.style.animation = 'fadeIn 3s';
	divGo.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo.style.animation = 'cog 2s';
	divGo.style.zIndex = 1;
}
function divClick1(){
	divGo1.innerHTML = '<h3>95,000 USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo1.style.animation = 'fadeIn 3s';
	divGo1.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo1.style.animation = 'cog 2s';
	divGo1.style.zIndex = 1;
}
function divClick2(){
	divGo2.innerHTML = '<h3>285,000 USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo2.style.animation = 'fadeIn 3s';
	divGo2.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo2.style.animation = 'cog 2s';
	divGo2.style.zIndex = 1;
}
function divClick3(){
	divGo3.innerHTML = '<h3>475,000 USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo3.style.animation = 'fadeIn 3s';
	divGo3.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo3.style.animation = 'cog 2s';
	divGo3.style.zIndex = 1;
}
function divClick4(){
	divGo4.innerHTML = '<h3>850,000 USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo4.style.animation = 'fadeIn 3s';
	divGo4.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo4.style.animation = 'cog 2s';
	divGo4.style.zIndex = 1;
}
function divClick5(){
	divGo5.innerHTML = '<h3>1.3 Million USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo5.style.animation = 'fadeIn 3s';
	divGo5.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo5.style.animation = 'cog 2s';
	divGo5.style.zIndex = 1;
}
function divClick6(){
	divGo6.innerHTML = '<h3>2 Million USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo6.style.animation = 'fadeIn 3s';
	divGo6.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo6.style.animation = 'cog 2s';
	divGo6.style.zIndex = 1;
}
function divClick7(){
	divGo7.innerHTML = '<h3>3.1 Million USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo7.style.animation = 'fadeIn 3s';
	divGo7.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo7.style.animation = 'cog 2s';
	divGo7.style.zIndex = 1;
}
function divClick8(){
	divGo8.innerHTML = '<h3>8.3 Million USD</h3>' +'\n' + '<h3>Casino VR Poker Shirts & Cards</h3>' ;
	divGo8.style.animation = 'fadeIn 3s';
	divGo8.style.background = 'linear-gradient(#FED901, #FFDF01)';
	divGo8.style.animation = 'cog 2s';
	divGo8.style.zIndex = 1;
}
