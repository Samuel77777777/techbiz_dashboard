import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";

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

const WebVisitChart = () => {
  return (
    <Div>
      <h1 className="heading">Visitors to the Website</h1>
      <LineChart width={900} height={400} data={data} className="line">
        <Line
          type="monotone"
          dataKey="react"
          stroke="#C7DB00"
          strokeWidth={2}
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />

        <Tooltip />
        <Legend />
      </LineChart>
    </Div>
  );
};

export default WebVisitChart;

const Div = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);
  height: 430px;
  margin-top: 20px;

  .line {
    margin: 10px auto;
    width: 100%;
  }
  .heading {
    color: #000;
    font-family: "Josefin Sans", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 15px 0px 10px 40px;
  }
`;

// const data = [
//   { name: "2017", react: 32, angular: 37, vue: 60 },
//   { name: "2018", react: 42, angular: 42, vue: 54 },
//   { name: "2019", react: 51, angular: 41, vue: 54 },
//   { name: "2020", react: 60, angular: 37, vue: 28 },
//   { name: "2021", react: 51, angular: 31, vue: 27 },
//   { name: "2022", react: 95, angular: 44, vue: 49 },
// ];
