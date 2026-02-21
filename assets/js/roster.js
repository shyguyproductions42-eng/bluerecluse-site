const rosterGrid = document.getElementById("roster-grid");

rosterGrid.innerHTML = `
  <iframe
    src="https://raider.io/guilds/us/whisperwind/Blue%20Recluse/roster?embed=true"
    width="100%"
    height="1000"
    style="border:none; border-radius:8px; overflow:hidden;"
    loading="lazy">
  </iframe>
`;
