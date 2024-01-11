import styled from "styled-components";

const Box = () => {
  return (
    <Div>
      <div className="boxes">
        <div className="total-app-download">
          <h2>Total App Download</h2>
          <p>120k</p>
        </div>

        <div className="total-app-visitors">
          <h2>Total App Download</h2>
          <p>120k</p>
        </div>

        <div className="total-webapp-visitors">
          <h2>Total App Download</h2>
          <p>120k</p>
        </div>
      </div>
    </Div>
  );
};

export default Box;

const Div = styled.div`
  .boxes {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .boxes div {
    width: 250px;
    height: 150px;
    text-align: center;
    align-items: center;
    padding: 5px;
    border-radius: 12px;
    background: #889508;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .boxes div h2 {
    color: #fff;
    font-family: "Josefin san", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: normal;
    margin-top: 40px;
  }

  .boxes div p {
    color: #fff;
    font-family: "Josefin san", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-top: 5px;
    line-height: normal;
  }
`;
