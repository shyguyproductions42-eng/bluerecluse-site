const rosterGrid = document.getElementById("roster-grid");

fetch("https://raider.io/api/v1/guilds/profile?region=us&realm=whisperwind&name=blue-recluse&fields=members")
  .then(response => response.json())
  .then(data => {
    rosterGrid.innerHTML = "";

    const members = data.members;

    members.forEach(memberData => {
      const character = memberData.character;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${character.name}</h3>
        <p><strong>Role:</strong> ${character.role}</p>
        <p><strong>Class:</strong> ${character.class}</p>
        <p><strong>Spec:</strong> ${character.active_spec_name || "N/A"}</p>
      `;

      rosterGrid.appendChild(card);
    });
  })
  .catch(error => {
    rosterGrid.innerHTML = "Failed to load roster.";
    console.error(error);
  });
