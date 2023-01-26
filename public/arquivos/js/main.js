
const projects_array     = document.querySelectorAll(".projects-item")
const form               = document.querySelector("#contact-form")
const error_form_toast   = document.querySelector("#error-form-toast")
const sucess_form_toast  = document.querySelector("#sucess-form-toast")
const inputs_container   = document.querySelectorAll(".input-container")

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

projects_array.forEach(project => {
	if(project.dataset.enable == "false") return

	project.addEventListener("mouseover", () => {
		project.classList.add("selected")
		projects_array.forEach(item => {
			if(item.classList[1] !== "selected"){
				item.style.filter = "blur(4px)"
			}
		})
	})

	project.addEventListener("mouseout", () => {
		project.classList.remove("selected")
		projects_array.forEach(item => {
			if(item.classList[1] !== "selected"){
				item.style.filter = "blur(0px)"
			}
		})
	})
})

// form.addEventListener("submit", e => {
// 	e.preventDefault()
// 	const inputs_array = [e.srcElement[0], e.srcElement[1], e.srcElement[2], e.srcElement[3]]

// 	inputs_array.forEach(input => {
// 		const input_name = input.attributes.name.nodeValue

// 		if(formValidation(input_name, input)){
// 			input.style.border = '1px solid #9900ff'			
// 		}else{
// 			error_form_toast.style.display = "initial"
// 			input.style.border = '1px solid red'
// 			errors.push({
// 				input: input,
// 				error: "error"
// 			})
// 			setTimeout(() => {
// 				error_form_toast.style.display = "none"
// 				input.style.border = '1px solid #555555'
// 			}, 3500)
// 		}
// 	})

// 	// if(!errors.length){
// 	// 	inputs_array.forEach(input => {
// 	// 		input.value = ""
// 	// 		input.style.border = "1px solid #555555"
// 	// 	})
// 	// 	sucess_form_toast.style.display = "initial"
// 	// 	setTimeout(() => {
// 	// 		sucess_form_toast.style.display = "none"
// 	// 	}, 4000)
// 	// }

// })

// inputs_container.forEach(container => {
// 	const input = container.children[0]
// 	const toast = container.children[1]
// 	const input_name = input.attributes.name.nodeValue

// 	input.addEventListener("input", () => {
// 		if(formValidation(input_name, input)){
// 			input.style.border = "1px solid #9900ff"
// 			if(toast) toast.style.display = "none"
// 		}else{
// 			input.style.border = "1px solid red"
// 			if(toast) toast.style.display = "initial"
// 		}
// 	})

// 	input.addEventListener("blur", () => {
// 		if(toast) toast.style.display = "none"		
// 	})
// })

// function formValidation(name, input){
// 	const isEmpty = !input.value || input.value == ' '

// 	if(!isEmpty){
// 		if(name == "name" || name == "topic"){
// 			return !input.value.match(/[^a-zA-Z0-9\ ]/)
// 		}
// 		if(name == "email"){
// 			return emailRegex.test(String(input.value).toLowerCase())
// 		}
// 		if(name == "message"){
// 			return true
// 		}
// 	}
// }

scrollTrigger({
	selector: "#about-me-section",
	execute: () => {
		var prompt_number = 0
		const prompt_line = document.querySelectorAll(".prompt-line")


		setInterval(() => {
			if(prompt_number >= prompt_line.length){
				clearInterval()
			}else{
				prompt_line[prompt_number].style.opacity = 1
			}
			prompt_number++
		}, 400)
		
		about_particles.resumeAnimation()
	}
})

const about_particles = Particles.init({
	selector: "#particles-bg",
	maxParticles: 250,
	color: "#9900ff",

	responsive: [
	    {
	     	breakpoint: 768,
	      	options: {
		        maxParticles: 200
		    }
	    },
	    {
	      	breakpoint: 425,
	      	options: {
		      	maxParticles: 100
	    	}
	    },
	    {
	     	breakpoint: 320,
	      	options: {
	      		maxParticles: 0
	    	}
		}
  	]
})
about_particles.pauseAnimation()

window.onresize = () => {
	closePopup()
}

const body = document.querySelector("body")
const stack_popup_container = document.querySelector("#stack-popup-container")
const stack = document.querySelectorAll(".stack-container")

function openPopup(){
	if(window.innerWidth < 870){

		document.querySelectorAll(".skill-box").forEach(skill_box => {

			skill_box.addEventListener("click", () => {
				if(skill_box.dataset.stack == "front"){
					stack[0].style.display = "flex"
					stack[1].style.display = "none"
				}else if(skill_box.dataset.stack == "back"){
					stack[0].style.display = "none"
					stack[1].style.display = "flex"
				}
				body.style.overflow = "hidden"
				stack_popup_container.style.display = "flex"
			})
		})

	}
}
openPopup()

function closePopup(){
	body.style.overflow = "initial"
	stack_popup_container.style.display = "none"
}

const hamburger_button = document.querySelector("#hamburger-button")

hamburger_button.addEventListener("click", () => {
	if(hamburger_button.dataset.state == "close"){
		hamburger_button.classList.add("hamburger-close")
		hamburger_button.dataset.state = "open"

	}else if(hamburger_button.dataset.state == "open"){
		hamburger_button.classList.remove("hamburger-close")	
		hamburger_button.dataset.state = "close"	

	}
})

function getCurrentAge(){
	const date = new Date()
	const currentYear = date.getFullYear()
	const yearOfBirth = 2003

	if(date.getMonth() == 6){
		return currentYear - yearOfBirth
	}else{
		return currentYear - yearOfBirth - 1
	}
}

const idade = document.querySelector("#idade-text")
idade.innerText = getCurrentAge()







