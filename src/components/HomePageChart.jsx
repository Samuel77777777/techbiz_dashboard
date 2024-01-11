import styled from "styled-components";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", react: 32 },
  { name: "Feb", react: 42 },
  { name: "Mar", react: 51 },
  { name: "Apr", react: 60 },
  { name: "May", react: 51 },
  { name: "Jun", react: 95 },
  { name: "Jul", react: 32 },
  { name: "Aug", react: 42 },
  { name: "Sep", react: 51 },
  { name: "Oct", react: 60 },
  { name: "Nov", react: 51 },
  { name: "Dec", react: 95 },
];

const HomePageChart = () => {
  return (
    <Div>
      <div className="heading">
        <h2>Entry Review</h2>
        <h2>Yearly</h2>
      </div>

      <div>
        <LineChart width={950} height={400} data={data} className="line">
          <Line
            type="monotone"
            dataKey="react"
            stroke="#A6CEE3"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </Div>
  );
};

export default HomePageChart;

const Div = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #fff;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 100px;

  .heading {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  h2 {
    color: #000;
    font-family: "Josefin Sans", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .line {
    width: 100%;
    height: 400px;
  }

  .main_line_chart {
    width: 80%;
  }
`;
