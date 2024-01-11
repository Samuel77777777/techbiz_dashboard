import Calendar from "../components/Calendar";
import CustomActiveShapeDoughnutChart from "../components/HomePageChart";
import Navbar from "../components/Navbar";
import PieChart from "../components/PieChart/PieChart";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Div>
      <div className="home-section">
        <Sidebar />
        <div className="nav-section">
          <Navbar /> <br />
          <Searchbar />
          <div className="calendar-piechart">
            <Calendar />
            <PieChart />
          </div>
          <CustomActiveShapeDoughnutChart />
        </div>
      </div>
    </Div>
  );
};

export default HomePage;

const Div = styled.div`
  margin: 0 10px;

  .home-section {
    display: flex;
    gap: 50px;
  }

  .nav-section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .calendar-piechart {
    display: flex;
    gap: 50px;
    justify-content: center;
    margin-right: 30px;
    margin-left: 20px;
    margin-bottom: 40px;
  }
`;
