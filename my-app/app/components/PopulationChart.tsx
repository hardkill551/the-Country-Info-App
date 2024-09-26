import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PopulationChartProps {
  populationData: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: { year: number; value: number }[];
  } | undefined;
}

export default function PopulationChart({ populationData }: PopulationChartProps) {
  if (!populationData || !Array.isArray(populationData.populationCounts)) {
    return <div className="text-center">No population data available.</div>;
  }

  const data = {
    labels: populationData.populationCounts.map((data) => data.year),
    datasets: [
      {
        label: "Population",
        data: populationData.populationCounts.map((data) => data.value),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full max-w-3xl mt-8">
      <h2 className="text-xl font-semibold mb-4">Population Over Time</h2>
      <Line data={data} />
    </div>
  );
}
