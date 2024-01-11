/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";


const Navbar = () => {
  return (
    <Div>
      <div className="nav">
        {/* this is the section for the person information  and it starts here */}

        {/* information section starts here */}

        <div className="nav_link">
          <div className="resturant">
            <div className="top">
              <p className="title">NGO'S</p>{" "}
              <img src="assets/hands.png" alt="" />
            </div>
            <p className="title-2"> 120 k</p>
          </div>

          <div className="resturant" style={{ background: "#EBFC40" }}>
            <div className="top">
              <p className="title">Restaurant</p>{" "}
              <img src="assets/spoon.png" alt="" />
            </div>
            <p className="title-2"> 120 k</p>
          </div>

          <div className="resturant" style={{ background: "#C7DB00" }}>
            <div className="top">
              <p className="title">Hotel</p> <img src="assets/bed.png" alt="" />
            </div>
            <p className="title-2"> 120 k</p>
          </div>

          <div className="resturant" style={{ background: "#889508" }}>
            <div className="top">
              <p className="title">Pharmarcy</p>{" "}
              <img src="assets/pharmarcy.png" alt="" />
            </div>
            <p className="title-2"> 120 k</p>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  .nav_link {
    width: 100%;
    align-items: center;
    justify-content: space-around;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .resturant {
    margin-left: 20px;
    display: flex;
    width: 200px;
    gap: 30px;
    height: 110px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    background: #f6ff9e;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .top {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .top img {
    width: 25px;
    height: 25px;
  }

  .title {
    color: #000000;
    text-align: left;
    font: 400 21px "Josefin Sans", sans-serif;
  }

  .title-2 {
    color: #000000;
    text-align: left;
    font: 700 21px "Josefin Sans", sans-serif;
  }
`;
