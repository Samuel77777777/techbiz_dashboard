import styled from "styled-components";

const Searchbar = () => {
  return (
    <Div>
      <div className="search-box">
        <label htmlFor="search">
          <img src="assets/search.png" alt="" />
        </label>
        <input type="text" name="" id="search" placeholder="Search" />
      </div>
    </Div>
  );
};

export default Searchbar;

const Div = styled.div`
  .search-box {
    max-width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 20px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);
    margin: 0 15px;
  }

  .search-box input {
    width: 100%;
    height: 60px;
    tex-align: center;
    border: none;
    outline: none;
  }
`;
