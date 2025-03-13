import { isArrayAllZero } from "./utils.js";

const chart = document.getElementById("chart");

const chartInstance = new Chart(chart, {
  type: "pie",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

export function updateChart(teams) {
  if (!isArrayAllZero(teams.map((team) => team.votes))) {
    chart.classList.remove("d-none");
  }

  chartInstance.data.datasets[0].data = teams.map((team) => team.votes);
  chartInstance.data.labels = teams.map((team) => team.name);
  chartInstance.data.datasets[0].backgroundColor = teams.map(
    (team) => team.color,
  );

  chartInstance.update();
}
