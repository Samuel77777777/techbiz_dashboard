import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Range from "../components/Second_customer_components/Range";
import SecondCustomerChart from "../components/Second_customer_components/SecondCustomerChart";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const SecondCustomer = () => {
  return (
    <Div>
      <div className="home-section">
        <Sidebar />
        <div className="nav-section">
          <Navbar /> <br />
          <Searchbar />
          <div>
            <Range />
            <SecondCustomerChart />
          </div>
        </div>
      </div>
    </Div>
  );
};

export default SecondCustomer;

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
