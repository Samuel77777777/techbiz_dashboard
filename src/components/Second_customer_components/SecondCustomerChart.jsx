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
  { name: "2017", react: 32, angular: 37, vue: 60, flutter: 70 },
  { name: "2018", react: 42, angular: 42, vue: 54, flutter: 72 },
  { name: "2019", react: 51, angular: 41, vue: 54, flutter: 50 },
  { name: "2020", react: 60, angular: 37, vue: 28, flutter: 60 },
  { name: "2021", react: 51, angular: 31, vue: 27, flutter: 70 },
  { name: "2022", react: 95, angular: 44, vue: 49, flutter: 60 },
];

const SecondCustomerChart = () => {
  return (
    <Div>
      <h1 className="heading">Frequently Used Page</h1>
      <LineChart width={800} height={350} data={data} className="line">
        <Line
          type="monotone"
          dataKey="react"
          stroke="#C7DB00"
          strokeWidth={2}
        />

        <Line
          type="monotone"
          dataKey="angular"
          stroke="#00ACDB"
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="vue" stroke="#00DB16" strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="flutter"
          stroke="#DB1200"
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

export default SecondCustomerChart;

const Div = styled.div`
  padding-top: 10px;
  margin-top: 30px;
  max-width: 882px;
  height: 400px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);

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
