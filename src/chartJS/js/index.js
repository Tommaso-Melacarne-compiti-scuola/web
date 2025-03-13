const chart = document.getElementById("chart");

const chartInstance = new Chart(chart, {
    type: "pie",
    data: {
        labels: ["Inter", "Fiorentina", "Juventus", "Milan"],
        datasets: [
            {
                data: [0, 0, 0, 0],
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

/**
 * Check if all values in an array are 0
 *
 * @param arr {Array<number>} Array to check
 * @returns {boolean} True if all values are 0, false otherwise
 */
function isArrayAllZero(arr) {
    return arr.every((el) => el === 0);
}

document.getElementById("votesForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const votesUnparsed = {
        inter: formData.get("inter"),
        viola: formData.get("viola"),
        juve: formData.get("juve"),
        milan: formData.get("milan"),
    };

    // noinspection JSCheckFunctionSignatures
    const votes = Object.entries(votesUnparsed).map(([team, votes]) => [
        team,
        parseInt(votes),
    ]);

    if (!isArrayAllZero(votes.map(([_, votes]) => votes))) {
        chart.classList.remove("d-none");
    }

    updateChart(votes);
});

function updateChart(votes) {
    chartInstance.data.datasets[0].data = votes.map(([_, votes]) => votes);
    chartInstance.update();
}
