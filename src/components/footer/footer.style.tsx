import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 32px;
  background: #072851;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 48px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }

  .col1, .col2, .col3 {
    width: 33%;
    padding-left: 40px;
    margin-left: 35px;

    @media (max-width: 768px) {
      width: 100%;
      padding-left: 0;
      margin-left: 0;
      margin-bottom: 32px;
    }

    h4 {
      margin-bottom: 32px;
      font-size: 21px;
      color: #fff;


      @media (max-width: 768px) {
        font-size: 18px;
      }
    }

    p, ul li a {
      font-size: 12px;
      color: #fff;
      text-decoration: none;
      display: flex;
      justify-items: center;
      align-items: center;
      list-style: none;
      line-height: 1.8;


      @media (max-width: 768px) {
        font-size: 11px;
        text-decoration: none;

      }
    }
      a {
      font-size: 12px;
      color: #fff;
      text-decoration: none;
      display: flex;
      justify-items: center;
      align-items: center;

      @media (max-width: 768px) {
        font-size: 11px;
        text-decoration: none;
        display: flex;
        justify-items: center;
        align-items: center;

      }
    }
  }

  .col2 {
     h4{
      text-align: center;
      }
    .icon-list {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;

      .icon {
        margin-right: 24px;
        width: 40px;
        height: 40px;

        @media (max-width: 768px) {
          width: 30px;
          height: 30px;
          margin-right: 16px;
        }
      }
      
      svg {
        fill: #fff;
      }
    }

    @media (max-width: 768px) {
      justify-content: flex-start;
      ul {
        justify-content: flex-start;
      }
    }
  }

  .col3 {
    .footer-list {
      list-style: none;
      .icon {
        margin-right: 16px;

        svg {
          fill: #fff;
        }
      }
    }
  }
`;

export const LastStrip = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #002f5e;
  width: 100%;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 12px;
  }

  .inline-text {
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      margin-right: 10px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
