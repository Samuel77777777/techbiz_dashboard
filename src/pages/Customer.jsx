import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import DataTable from "../components/Table";

const Customer = () => {
  return (
    <Div>
      <div className="home-section">
        <Sidebar />
        <div className="nav-section">
          <Navbar /> <br />
          <Searchbar />
          <DataTable />
        </div>
      </div>
    </Div>
  );
};

export default Customer;

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
