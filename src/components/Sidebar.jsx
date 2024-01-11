import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Div>
      <div className="main">
        <div className="avatar">
          <img src="assets/avatar.png" alt="" className="avatar-img" />
          <div className="info">
            <p>Obinna Browne</p>
            <img src="assets/arrowblackdown.png" alt="" />
          </div>
        </div>
        <div className="sidebar">
          <div className="links">
            <Link to="/">
              <div className="dashboard">
                <img src="assets/solar.png" alt="" />
                <p>Dashboard</p>
              </div>
            </Link>

            <Link to="/customer">
              <div className="dashboard">
                <img src="assets/people.png" alt="" />
                <p>Customer</p>
              </div>
            </Link>

            <Link to="/report">
              <div className="dashboard">
                <img src="assets/brokenline.png" alt="" />
                <p>Reports</p>
              </div>
            </Link>

            <div className="dashboard">
              <img src="assets/share.png" alt="" />
              <p>Share</p>
              <img src="assets/arrowdown.png" alt="" />
            </div>

            <div className="dashboard">
              <img src="assets/notification.png" alt="" />
              <p>Dashboard</p>
              <img src="assets/check.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Sidebar;

const Div = styled.div`
  .sidebar {
    width: 300px;
    border-radius: 25px;
    background: #889508;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-left: 20px;
    height: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 50px;
    cursor: pointer;
  }

  .dashboard img {
    width: 24px;
    height: 24px;
  }
  .dashboard {
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: center;
  }

  .dashboard p {
    color: #fff;
    font: 400 20px "Josefin Sans", sans-serif;
    line-height: normal;
  }

  .avatar {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    align-items: center;
  }

  .avatar-img {
    width: 90px;
    height: 90px;
    border-radius: 90px;
    background: lightgray 50%;
    margin-right: 30px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 5px;
  }

  .info img {
    width: 18px;
    height: 18px;
  }

  .info p {
    color: #000000;
    text-align: center;
    font: 400 16px "Josefin Sans", sans-serif;
  }
`;
