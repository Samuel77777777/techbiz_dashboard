import styled from "styled-components";

const Table = () => {
  return (
    <StyledTable>
      <div>
        <table>
          <thead>
            <tr className="no-shadow">
              <th>
                <span>Name</span>
              </th>
              <th>
                <span>Address</span>
              </th>
              <th>
                <span>City</span>
              </th>
              <th>
                <span>Phone</span>
              </th>
              <th>
                <span>Email</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(25)].map((_, index) => (
              <tr key={index} className="shadow">
                <td>Basha Restaurant</td>
                <td>73 Wilkinson Road</td>
                <td>Freetown Sierra Leone</td>
                <td>(+232)76611000</td>
                <td>john.doe@gmail.com</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;
    background: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    text-align: center;
    border-radius: 12px;
    background: #fff;
    box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .shadow {
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  th,
  td {
    padding: 10px;
  }

  span {
    border-radius: 10px;
    border: 1px solid #c7db00;
    background: #fff;
    color: #000;
    font-family: "Josefin Sans", sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .no-shadow {
    border-radius: 12px;
    text-align: center;
  }
`;

export default Table;
