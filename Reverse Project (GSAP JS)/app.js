
/*
gsap.from('.header', {duration: 1, y:'-100%', ease:'bounce'});
gsap.from('.link', {duration:2, opacity:0 , delay:.5, stagger:.5});
gsap.from('.right', {duration: 1, x:'100%', delay:1});
gsap.from('.left', {duration: 1, x:'-100%', delay:1});
gsap.to('.footer', {duration: 1, y:'0', ease: 'elsatic'});
gsap.fromTo('.button', {opacity: 0, scale:0, rotation:720}
,{duration:1, delay:1, opacity:1, scale:1, rotation:0});
*/

const timeline = gsap.timeline({defaults : {duration:1} });

timeline
	.from('.header', {y:'-100%', ease:'bounce'})
	.from('.link', {opacity:0 , stagger: .5})
	.from('.right', {x:'100%', ease:'elsatic'})
	.from('.left', {x:'-100%'}, '<0')
	.to('.footer', {y:0, esae:'elastic'})
	.fromTo('.button', {opacity:0, scale:0, rotation:720},
	{opacity:1, scale:1,rotation:0})


const button = document.querySelector('.button');
button.addEventListener('click', () =>{
	timeline.timeScale(3);
	timeline.reverse();
})