/**
 * @typedef {import("chart.js").Chart} Chart
 */

/**
 * @typedef {Object} Team
 * @property {string} name - The name of the team
 * @property {number} votes - The number of votes for the team
 * @property {string} color - The color of the team
 */
import {updateChart} from "./chart.js";

/**
 * @type {Team[]}
 */
export let teams = [
    {
        name: "Inter",
        votes: 0,
        color: "#001E9D",
    },
    {
        name: "Viola",
        votes: 0,
        color: "#61328C",
    },
    {
        name: "Juve",
        votes: 0,
        color: "#FFFFFF",
    },
    {
        name: "Milan",
        votes: 0,
        color: "#E50027",
    },
];

document.getElementById("votesForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const votesUnparsed = {
        inter: formData.get("inter"),
        viola: formData.get("viola"),
        juve: formData.get("juve"),
        milan: formData.get("milan"),
    };

    for (const [name, votes] of Object.entries(votesUnparsed)) {
        updateVotesOrCreate(
            name,
            parseInt(votes) || 0,
            undefined,
        )
    }

    updateChart(teams);
});

/**
 * Create or replace a team in the teams array
 *
 * @param name {string} The name of the team
 * @param votes {number} The number of votes for the team
 * @param color {string | undefined} The color of the team
 */
export function updateVotesOrCreate(name, votes, color) {
    const existingTeamIndex = teams.findIndex((team => team.name.toLowerCase() === name.toLowerCase()));

    if (existingTeamIndex !== -1) {
        // Update the existing team's votes
        teams[existingTeamIndex].votes = votes;
    } else {
        // Add the new team to the array
        teams.push({
            name,
            votes,
            color: color ? color : getColorByTeamName(name),
        });
    }
}

/**
 * Get the color of a team by name
 *
 * @param name {string} The name of the team
 * @returns {string} The color of the team
 */
function getColorByTeamName(name) {
    const team = teams.find((t) => t.name.toLowerCase() === name.toLowerCase());
    return team ? team.color : "#000000";
}
