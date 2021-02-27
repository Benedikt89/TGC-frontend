import React from 'react';
import styled from 'styled-components';
import arrowIcon from "../../images/arrow-down.svg";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 33px 0;
`;

const UserAccount = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  margin: 0;

  &::after {
    content: url(${arrowIcon});
    display: inline-block;
    margin-left: 10px;
  }
`;

const UserOptionsComponent: React.FC = () => {
    return (
        <ContentWrapper>
            <UserAccount>Francis Green</UserAccount>
        </ContentWrapper>
    );
};

export default UserOptionsComponent;