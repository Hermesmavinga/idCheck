document.addEventListener("DOMContentLoaded", () => {
    const clientIdInput = document.getElementById("clientId");
    const searchBtn = document.getElementById("searchBtn");
    const resultDiv = document.getElementById("result");
    const clientName = document.getElementById("clientName");
    const clientEmail = document.getElementById("clientEmail");
    const clientDate = document.getElementById("clientDate");

    // Simulons une base de données locale avec des clients fictifs
    const clients = {
        "123": { name: "Alice Dupont", email: "alice@example.com", date: "2025-06-20" },
        "456": { name: "Jean Martin", email: "jean@example.com", date: "2025-06-21" },
        "789": { name: "Sophie Durand", email: "sophie@example.com", date: "2025-06-22" }
    };

    searchBtn.addEventListener("click", () => {
        let clientId = clientIdInput.value.trim();
        
        if (!clientId || !clients[clientId]) {
            alert("Client introuvable. Veuillez entrer un ID valide !");
            return;
        }

        // Affichage des informations du client
        clientName.textContent = clients[clientId].name;
        clientEmail.textContent = clients[clientId].email;
        clientDate.textContent = clients[clientId].date;

        resultDiv.classList.remove("hidden");
    });
});
