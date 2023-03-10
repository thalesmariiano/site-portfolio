
const feedback_container = document.querySelector("#form-feedback-container")

$("#contact-form").submit(e => {
	e.preventDefault()

	if(!verifyInputs()){
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});

		$.ajax({
			url: "/sendmail",
			type: "post",
			dataType: "json",
			data: $("#contact-form").serialize(),
			beforeSend: () => {
				createtoast("sending-toast", "Enviando email, por favor aguarde...")
			}
		})
		.done(response => {
			getResponse(JSON.parse(response))
		})
	}
})

function verifyInputs(){
	const empty_inputs = []

	inputs_array.forEach(input => {
		if(!input.value || input.value == " "){
			empty_inputs.push(input)
			input.style.border = "1px solid red"
			createtoast("error-toast", "Preencha todos os campos.")

			setTimeout(() => {
				feedback_container.innerHTML = " "
				feedback_container.innerHTML = "<p id='or-send-mail'>Ou envie um email</p>"
				input.style.border = "1px solid #555555"
			}, 4000)
		}else{
			input.style.border = "1px solid #9900ff"
		}

		input.addEventListener("input", () => {
			if(!input.value || input.value == " "){
				input.style.border = "1px solid #555555"
			}
		})
	})

	return empty_inputs.length
}

function getResponse(response){
	if(response){
		if(response.sucess){
			createtoast("sucess-toast", response.sucess)

			inputs_array.forEach(input => {
				input.value = ""
				input.style.border = "1px solid #555555"
			})
		}else if(response.error){
			createtoast("error-text", response.error)
		}
	}
}

function createtoast(type, text){
	const toast_container = document.createElement("div")
	const toast_content  = document.createElement("div")
	const toast_text = document.createElement("p")

	toast_container.classList.add("toast-container", "form-toast", `${type}`)
	toast_content.classList.add("toast-content")
	toast_text.classList.add("toast-text")

	toast_text.textContent = text

	toast_container.appendChild(toast_content)
	toast_content.appendChild(toast_text)

	feedback_container.innerHTML = ""
	feedback_container.appendChild(toast_container)
}










