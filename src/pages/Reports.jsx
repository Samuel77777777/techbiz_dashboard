import Navbar from "../components/Navbar";
import AppVisitChart from "../components/Report-page-component/App-visit-chart";
import WebVisitChart from "../components/Report-page-component/Web-visit-chart";
import Box from "../components/Report-page-component/box";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Reports = () => {
  return (
    <Div>
      <div className="home-section">
        <Sidebar />
        <div className="nav-section">
          <Navbar /> <br />
          <Searchbar />
          <Box />
          <AppVisitChart />
          <WebVisitChart />
        </div>
      </div>
    </Div>
  );
};

export default Reports;

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
`;
