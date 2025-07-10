document.addEventListener("DOMContentLoaded", () => {
  const clientIdInput = document.getElementById("clientId");
  const searchBtn = document.getElementById("searchBtn");
  const resultDiv = document.getElementById("result");
  const clientName = document.getElementById("clientName");
  const clientEmail = document.getElementById("clientEmail");
  const clientDate = document.getElementById("clientDate");
  const clientReservation = document.getElementById("clientReservation");
  const clientPhone = document.getElementById("clientPhone");
  const clientTicketType = document.getElementById("clientTicketType");
  const clientPrice = document.getElementById("clientPrice");
  const historiqueDiv = document.getElementById("historiqueDiv");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");

  // Charger les clients depuis localStorage ou créer vide
  let clients = {};
  if (localStorage.getItem("clients")) {
    clients = JSON.parse(localStorage.getItem("clients"));
  }

  function afficherClient(clientId) {
    if (!clients[clientId]) return;

    const client = clients[clientId];

    clientName.textContent = client.nomClient;
    clientEmail.textContent = client.email;
    clientDate.textContent = client.dateReservation;
    clientReservation.textContent = client.nomReservation;
    clientPhone.textContent = client.numeroTelephone;
    clientTicketType.textContent = client.typeBillet;
    clientPrice.textContent = client.prixBillet;

    resultDiv.classList.remove("hidden");
  }

  function afficherHistorique() {
    const historique = JSON.parse(localStorage.getItem("historique")) || [];
    if (historique.length > 0) {
      historiqueDiv.innerHTML =
        "<strong>Historique des ID consultés :</strong> ";

      historique.forEach((id, index) => {
        const span = document.createElement("span");
        span.textContent = id;
        span.style.cursor = "pointer";
        span.style.color = "#2563eb";
        span.style.marginRight = "8px";
        span.style.textDecoration = "underline";

        span.addEventListener("click", () => {
          clientIdInput.value = id;
          afficherClient(id);
        });

        historiqueDiv.appendChild(span);

        if (index < historique.length - 1) {
          const comma = document.createTextNode(", ");
          historiqueDiv.appendChild(comma);
        }
      });
    } else {
      historiqueDiv.innerHTML = "";
    }
  }

  searchBtn.addEventListener("click", () => {
    const clientId = clientIdInput.value.trim();

    if (!clientId || !clients[clientId]) {
      alert("Client introuvable. Veuillez entrer un ID valide !");
      return;
    }

    afficherClient(clientId);

    let historique = JSON.parse(localStorage.getItem("historique")) || [];
    if (!historique.includes(clientId)) {
      historique.push(clientId);
      localStorage.setItem("historique", JSON.stringify(historique));
    }

    afficherHistorique();
  });

  clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem("historique");
    afficherHistorique();
    resultDiv.classList.add("hidden");
    clientIdInput.value = "";
  });

  afficherHistorique();
});
