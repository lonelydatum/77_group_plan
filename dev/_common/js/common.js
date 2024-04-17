import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});



const READ_T1 = {bookclub:1.5, karoke:1.5, generic:1.5, soccer:1.5, gamer:1.5, french:1.5}
const READ_T2 = {bookclub:1.7, karoke:1.5, generic:1.8, soccer:1.8, gamer:1.8, french:1.8}


const {w, h} = bannerSize

const SLIDE_DURATION = .5
const SLIDE_Y = 50



function frame2(){
	const tl = new TimelineMax()
	tl.add("f2", `+=${READ_T2[universalBanner.name]}`)
	tl.set(".frame2", {opacity:1}, "f2")	
	tl.from(".bg", {duration:.3, opacity:0, y:h/2})
	tl.from(".t3", {duration:SLIDE_DURATION, y:`+=${SLIDE_Y}`, opacity:0}, "+=.3")
	
	tl.from([".phone"], {duration:.3, y:`+=${h}`}, "+=.5")
	tl.from(".phone-max-logo", {duration:.3, scale:0, ease:"custom"})
	if(universalBanner.name==="generic"){
		tl.from(".frame2 .logo-group", {duration:.3, scale:0, ease:"custom"})		
	}
	tl.add("649", "+=.8")
	tl.to(".phone-max-logo", {duration:.3, opacity:0}, "649")


	tl.from(".phone-649-bg", {duration:.3, opacity:0}, "649")
	tl.from(".phone-649-logo", {duration:.3, scale:0, ease:"custom"})

	tl.add("olg", "+=.8")

	tl.to(".phone-649-logo", {duration:.3, opacity:0}, "olg")
	tl.from(".phone-olg", {duration:.3, opacity:0}, "olg")
	if(universalBanner.name!=="generic"){
		tl.from(".frame2 .logo-group", {duration:.3, scale:0, ease:"custom"}, "+=.5")		
	}
	

	tl.add("cta", "+=.3")
	if(w>h){
		tl.to(".t3", {duration:.3, y:0}, "cta")
	}
	tl.from(".cta", {duration:.3, opacity:0}, "cta")
	tl.to(".wedge", {duration:.3, opacity:0}, "cta")
	tl.from(".legal", {duration:.3, opacity:0}, "cta")
	
	
	tl.add(olg())
	return tl
}

function standard(){	
	if(universalBanner.name==="generic"){
		generic()
		return
	}
	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})	

	tl.from(".t1", {duration:SLIDE_DURATION, opacity:0, y:`+=${SLIDE_Y}`})
	tl.add("t2", `+=${READ_T1[universalBanner.name]}`)
	tl.to(".t1", {duration:SLIDE_DURATION, opacity:0, y:`-=${SLIDE_Y}`}, "t2")

	tl.from(".t2", {duration:SLIDE_DURATION, opacity:0, y:`+=${SLIDE_Y}`}, "t2")
	tl.from(".frame1 .logo-group", {duration:.3, scale:0, ease:"custom"}, "+=.3")
	// tl.play("f2")
	tl.add(frame2())

	return tl	
}


function generic(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})	

	tl.from(".t1", {duration:SLIDE_DURATION, opacity:0, y:`+=${SLIDE_Y}`})
	
	tl.add("t2", `+=${READ_T1[universalBanner.name]}`)
	tl.from(".peeps_b", {duration:SLIDE_DURATION, opacity:0}, "t2")
	tl.to(".t1", {duration:SLIDE_DURATION, opacity:0, y:`-=${SLIDE_Y}`}, "t2")
	tl.from(".t2", {duration:SLIDE_DURATION, opacity:0, y:`+=${SLIDE_Y}`}, "t2")


	tl.add("t3", `+=3`)
	tl.from(".peeps_c", {duration:SLIDE_DURATION, opacity:0}, "t3")
	if(w===970 || w===320){
		tl.from(".frame1 .logo-group", {duration:SLIDE_DURATION, opacity:0}, "t3")	
	}
	
	
	tl.add(frame2())
	return tl	
}



function b_970x250(){
	standard()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}

function b_320x50(){
	standard()
}

function b_728x90(){
	standard()
}

export { generic,  b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250   }