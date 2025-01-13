import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  width: 400px;
  height: 300px;
  top: 70px;
  right: 182px;
  position: absolute;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%);
  padding: 16px;
  border: 1px solid #ececec;
  background: #fff;
  border-radius: 12px;
  z-index: 999;

  @media (max-width: 768px) {
    width: 400px;
    height: 300px;
    top: 52px;
    left: 180px;
    position: absolute;
    box-shadow: 0 3px 6px rgb(0 0 0 / 20%);
    padding: 16px;
    border: 1px solid #ececec;
    background: #fff;
    z-index: 999;
    opacity: ${(props: { isMobileNavOpen: boolean }) =>
      props.isMobileNavOpen ? "0" : "1"};
  }
`;

export const SearchField = styled.div`
  input {
    border: 1px solid #bce3c9;
    margin-bottom: 12px;
    border-radius: 5px;
    height: 40px;
    padding-left: 20px;
    width: 100%;
    height: 50px;
    outline: none !important;
  }
`;
export const SearchResults = styled.ul`
  padding-left: 0px;
  width: 100%;
  margin: 0px;
  margin-top: 10px;
  max-height: 220px;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    width: 7px !important;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc !important;
  }

  li {
    list-style: none;
    padding: 6px;
    color: #7e7e7e;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    &:hover {
      background: #0f406e;
      color: #fff;
    }

    &.active {
      background: #f1f1f1;
      color: #000;
    }
  }
`;
