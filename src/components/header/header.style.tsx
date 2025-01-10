import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 8px 0;
  background: #0f406e;
  position: sticky;
  top: 0;
  z-index: 99;
  transition: all 0.5s ease-in-out;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 16px;
    .search {
      width: 250px;
      height: 40px;
      border: 1px solid #000;
      padding-left: 12px;
      font-size: 14px;
      border-radius: 12px;
      margin-left: 12px;
    }
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: auto;
  padding: 12px;
  width: 10%;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const Nav = styled.nav<{
  isDeskOpen: boolean;
  isMobileNavOpen: boolean;
}>`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 75%;
  padding: 12px 0;
  display: ${({ isDeskOpen }) => (isDeskOpen ? "none" : "flex")};

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0 16px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: none;
    }
    &.qualification {
      position: relative;
      .sub-menu {
        display: none;
        width: 200px;
        position: absolute;
        top: 100%;
        right: -88px;
        background: #fff;
        padding: 8px;
        border: 1px solid #ececec;
        border-radius: 12px;
        height: auto;
        z-index: 999;
      }

      &:hover {
        .sub-menu {
          display: block;
          list-style: none;
          li {
            padding: 14px;
            color: #101217;
            &:hover {
              background: #0f406e;
              color: #0f406e;
              a {
                color: #fff;
              }
            }
          }
          a {
            text-decoration: none;
          }
        }
      }
    }
    &.organization {
      position: relative;
      .sub-menu {
        display: none;
        width: 200px;
        position: absolute;
        top: 100%;
        right: -88px;
        background: #fff;
        padding: 8px;
        border: 1px solid #ececec;
        border-radius: 12px;
        height: auto;
        z-index: 999;
      }

      &:hover {
        .sub-menu {
          display: block;
          list-style: none;
          li {
            padding: 14px;
            color: #101217;
            &:hover {
              background: #0f406e;
              color: 0f406e;
              a {
                color: #fff;
              }
            }
          }

          a {
            text-decoration: none;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: ${({ isMobileNavOpen }) => (isMobileNavOpen ? "none" : "flex")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: #0f406e;

    .nav-item {
      width: 100%;
      padding: 16px;
      justify-content: flex-start;

      &.qualification {
        position: relative;

        &:hover {
          .sub-menu {
            display: block;
            list-style: none;
            position: absolute;
            top: 80%;
            left: 16px;
            li {
              padding: 14px;
              color: #101217;
              &:hover {
                background: #0f406e;
                color: #0f406e;
                a {
                  color: #fff;
                }
              }
            }
            a {
              text-decoration: none;
            }
          }
        }
      }

      &.organization {
        position: relative;

        &:hover {
          .sub-menu {
            display: block;
            list-style: none;
            position: absolute;
            top: 80%;
            left: 16px;
            li {
              padding: 14px;
              color: #101217;
              &:hover {
                background: #0f406e;
                color: #0f406e;
                a {
                  color: #fff;
                }
              }
            }
            a {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;

export const Search = styled.div`
  margin-right: 26px;
  margin-top: 1px;
  width: 2%;

  @media (max-width: 768px) {
      position: absolute;
      top: -56px;
      right: 40px;
      
     opacity: ${(props: { isSearchOpen: boolean }) =>
       props.isSearchOpen ? "1" : "0"};
  }

  }
;`;

export const Button = styled.div<{ isDeskOpen: boolean; isNavOpen: boolean }>`
  width: 10%;

  .btn {
    background: #fff;
    color: #0f406e;
    padding: 12px 24px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.1);

    opacity: ${(props: { isDeskOpen: boolean }) =>
      props.isDeskOpen ? "0" : "1"};

    &:hover {
      background: #fff;
      color: #0f406e;

      opacity: ${(props: { isDeskOpen: boolean }) =>
        props.isDeskOpen ? "0" : "1"};
    }
  }

  @media (max-width: 768px) {
    width: 30%;
    margin-right: auto;
    padding-left: 14px;

    .btn {
      background: #fff;
      color: #0f406e;
      padding: 12px 24px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      border: 1px solid rgba(0, 0, 0, 0.1);

      opacity: ${(props: { isNavOpen: boolean }) =>
        props.isNavOpen ? "1" : "0"};

      &:hover {
        background: #fff;
        color: #0f406e;
        opacity: ${(props: { isNavOpen: boolean }) =>
          props.isNavOpen ? "1" : "0"};
      }
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
  }
`;

export const SearchBar = styled.input<{ isMobileNavOpen: boolean }>`
  padding: 8px;
  border: 2px solid #0f406e;
  background-color: white;
  border-radius: 8px;
  transition: width 0.3s ease;
  width: 250px;
  color: #333;
  position: absolute;
  left: -1110px;

  @media (max-width: 768px) {
    padding: 8px;
    border: 2px solid #0f406e;
    background-color: white;
    border-radius: 8px;
    transition: width 0.3s ease;
    width: 250px;
    color: #333;
    position: absolute;
    left: 10px;
  }
`;
