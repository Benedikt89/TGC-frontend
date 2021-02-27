import * as React from 'react';
import styled from 'styled-components';
import TournamentItem from '../TournamentItem';
import {IMockedTableData, ITableRow} from './types';

const TournamentTable = styled.div`
  width: 100%;
  max-width: 942px;
  margin: 23px auto 0;
`;

const TournamentTableHead = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7f7f7f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  padding: 10px 27px;
`;

const TournamentTableBody = styled.div``;

const TournamentTableHeadItem = styled.div`
  font-family: 'San Francisco', Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  &:first-child {
    flex-basis: 15%;
  }

  &:nth-child(2) {
    flex-basis: 35%;
  }

  &:nth-child(3) {
    flex-basis: 11%;
  }

  &:nth-child(4) {
    flex-basis: 12%;
  }

  &:last-child {
    flex-basis: 27%;
  }
`;

interface TournamentProps extends IMockedTableData {
    order?: Array<keyof ITableRow>
}

const Tournament: React.FC<TournamentProps> = ({ tableHead, tableBody, order }: TournamentProps) => {
  return (
        <TournamentTable>
          <TournamentTableHead>
            {tableHead.map((item, i) =>
                <TournamentTableHeadItem key={i}>{item}</TournamentTableHeadItem>)}
          </TournamentTableHead>
          <TournamentTableBody>
            {tableBody.map((tournamentData: ITableRow, id) =>
                <TournamentItem key={id} {...tournamentData}
                                order={order ? order : ['tournament','prize','teamSize','registrationInfo']}
                />)}
          </TournamentTableBody>
        </TournamentTable>
  );
};

export default Tournament;
