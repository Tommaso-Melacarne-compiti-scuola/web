import {updateChart} from "./chart.js";
import {teams, updateVotesOrCreate} from "./index.js";

document.getElementById("addTeamShowForm").addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("addTeamContainer").classList.remove("d-none");
    document.getElementById("addTeamShowFormParagraph").classList.add("d-none");
});

document.getElementById("addTeamForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const teamName = formData.get("teamName");
    const teamVotes = formData.get("teamVotes");
    const teamColor = formData.get("teamColor");

    const teamNameFormatted = teamName.charAt(0).toUpperCase() + teamName.slice(1).toLowerCase();

    updateVotesOrCreate(teamNameFormatted, parseInt(teamVotes), teamColor);

    updateChart(teams);
});
