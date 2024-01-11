import styled from "styled-components";

const Calendar = () => {
  return (
    <Div>
      <div className="calendar">
        <img src="assets/calen.png" alt="" />
      </div>
    </Div>
  );
};

export default Calendar;

const Div = styled.div`
  .calendar {
    margin-top: 20px;

    border-radius: 12px;
    background: #fff;
    box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);
    text-align: center;
    align-items: center;
    max-width: 500px;
    height: 450px;
  }
`;
