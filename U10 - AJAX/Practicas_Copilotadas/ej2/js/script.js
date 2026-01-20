const log = (msg, type="info") => {
            const div = document.getElementById("log");
            const p = document.createElement("p");
            p.className = type;
            p.textContent = msg;
            div.appendChild(p);
        };

        document.getElementById("btn-cargar").addEventListener("click", () => {
            document.getElementById("log").innerHTML = "";
            document.getElementById("tabla-usuarios").innerHTML = "";

            log("1️⃣ Fetch iniciado...", "info");

            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    log("2️⃣ Respuesta recibida del servidor", "info");
                    log("   - Status: " + response.status, "info");

                    if (!response.ok) {
                        log("❌ Error HTTP detectado", "error");
                        throw new Error("Error HTTP: " + response.status);
                    }

                    log("3️⃣ Convirtiendo respuesta a JSON...", "info");
                    return response.json();
                })
                .then(data => {
                    log("4️⃣ JSON recibido correctamente ✔", "ok");

                    const tbody = document.getElementById("tabla-usuarios");

                    data.forEach(user => {
                        const tr = document.createElement("tr");
                        tr.innerHTML = `
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                        `;
                        tbody.appendChild(tr);
                    });

                    log("5️⃣ Usuarios añadidos a la tabla ✔", "ok");
                })
                .catch(error => {
                    log("❌ Error en la petición: " + error.message, "error");
                })
                .finally(() => {
                    log("🔚 Petición finalizada", "info");
                });
        });