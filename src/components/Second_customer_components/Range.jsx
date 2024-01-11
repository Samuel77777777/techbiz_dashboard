import styled from "styled-components";

const Range = () => {
  return (
    <Div>
      <div className="container">
        <h1 className="age-demography">Age Demography</h1>

        <div className="range-container">
          <div className="black-line">
            <img src="assets/line.png" alt="" />
          </div>
          <div className="range">
            <h3>18 - 35</h3>
            <input type="range" className="range-input" />
            <h3>35 - 50</h3>
            <input type="range" className="range-input" />
            <h3>50 - 70</h3>
            <input type="range" className="range-input" />
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Range;

const Div = styled.div`
  .container {
    margin-top: 30px;
    max-width: 882px;
    height: 373px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .age-demography {
    padding-top: 50px;
    padding-left: 160px;
    color: #000;
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .range-container {
    padding-top: 50px;
    padding-left: 160px;
    display: flex;
    gap: 20px;
  }
  .range h3 {
    color: #000;
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
  }

  input[type="range"]::-webkit-track {
    background-color: #889508;
    height: 20px;
    border-radius: 5px;
  }

  input[type="range"]::-moz-range-track {
    background-color: #889508;
    height: 20px;
    border-radius: 5px;
  }

  input[type="range"]::-ms-track {
    background-color: #889508;
    height: 20px;
    border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background-color: #04aa6d;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    background-color: #04aa6d;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
  }

  input[type="range"]::-ms-thumb {
    background-color: #04aa6d;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    cursor: pointer;
  }

  

  
  input[type="range"]:focus {
    -webkit-box-shadow: 0 0 0 3px #000000;
    box-shadow: 0 0 0 3px #000000;
  }
`;
