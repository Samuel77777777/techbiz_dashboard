import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Resturant", "Hotel", "Pharmarcy", "NGO's"],
    datasets: [
      {
        label: "Poll",
        data: [3, 6, 9, 5],
        backgroundColor: ["#535B0C", "#889508", "#C7DB00", "#DFF413"],
        borderColor: ["#535B0C", "#889508", "#C7DB00", "#DFF413"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 20,
          padding: 20,
        },
      },
    },
  };

  return (
    <Div>
      <div className="donut">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </Div>
  );
};

export default PieChart;

const Div = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 450px;
  margin-top: 20px;

  .donut {
    width: 400px;
    height: 400px;
    align-items: center;
    margin: 10px auto;
    justify-content: center;
  }
`;
