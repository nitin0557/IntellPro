import React from "react";
import styled from "@emotion/styled";

const LoaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

        .spinner {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-left-color: #09f;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
          
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
;`;

export const Loader = () => {
  return (
    <LoaderStyled>
      <div className="spinner"></div>
    </LoaderStyled>
  );
};
