import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import sourceData from "../../data/sourceData.json";
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 24;
defaults.plugins.title.color = "black";


const PieChart = () => {
  return (
    <div className="categoryCard h-96 shadow-md p-4 ">
    <Doughnut
      data={{
        labels: sourceData.map((data) => data.label),
        datasets: [
          {
            label: "Count",
            data: sourceData.map((data) => data.value),
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Revenue Sources",
          },
        },
      }}
    />
  </div>
  )
}

export default PieChart