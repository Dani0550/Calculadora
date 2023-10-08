const resultado = document.querySelector(".resultado");
const operacion = document.querySelector(".operacion");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
	boton.addEventListener("click", e => {
		let botonApretado = boton.textContent;
		if(boton.id === "c"){
			operacion.textContent = "0";
			resultado.textContent = "0";
			return
		}
		if(boton.id === "flecha"){
			if(operacion.textContent.length === 1){
				operacion.textContent = "0";
			}
			else{
				operacion.textContent = operacion.textContent.slice(0, -1);
			}
			return;
		}
		if(boton.id == "col-2"){
			try{
				resultado.textContent = eval(operacion.textContent);
				operacion.textContent = "0";
			}
			catch{
				resultado.textContent = "ERROR";
				operacion.textContent = "0";
			}
			return;
		}

		if (operacion.textContent === "0"){
			operacion.textContent = botonApretado;
		}
		else{
			operacion.textContent += botonApretado;
		}
	})
})