document.getElementById("btnX").addEventListener("click", 
function() { 
    let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "mochilas.html", true); 
    xhr.onload = function() { 
        if (xhr.status === 200) { 
            let mochilas = JSON.parse(xhr.responseText); 
            document.getElementById("row").innerText= 
            `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                    <img src="img/1517932601.jpg" class="card-img-top" alt="${nombre.mochilas}"
                        style="height: 180px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${nombre.mochilas}</h5>
    
                        <p class="card-text small text-muted">
                            Uso: Office · Género: Male
                        </p>
    
                        <p class="card-text">
                            Este modelo destaca por su amplio espacio y diseño moderno.
                        </p>
    
                        <div class="mt-auto">
                            <p class="fw-bold mb-2">109 €</p>
                            <a href="#" class="btn btn-primary btn-sm w-100">
                                Ver en Amazon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else { 
            document.getElementById("row").innerText = "Error al cargar los datos."; 
        } 
    }; 
    xhr.send(); 
}); 
document.getElementById("btnF").addEventListener("click", 
function() { 
    fetch("mochilas.json") 
        .then(response => response.json()) 
        .then(mochilas => { 
            let lista = "<ul>"; 
            mochilas.forEach(m => { 
                lista += `<li>${m.nombre} - ${m.gender} gender</li>`; 
            }); 
            lista += "</ul>"; 
            document.getElementById("row").innerHTML = lista; 
        }) 
        .catch(error => console.error("Error:", error)); 
}); 