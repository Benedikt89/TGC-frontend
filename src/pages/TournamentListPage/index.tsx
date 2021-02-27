import React, {useState} from 'react';
import Tournament from '../../components/Tournament';
import styled from "styled-components";
import {BackGroundImage, BasicButton, ColumnDiv} from "../../styles/mixins";
import UserOptionsComponent from "../../components/UserOptionsComponent";
import {mockedTableData} from "../../components/Tournament/mockedData";

const TournamentTableWrapper = styled.div`
    min-width: 942px;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    font-family: 'San Francisco',Arial,sans-serif;
  
  @media (max-width: 960px) {
    min-width: 600px;
  }
`;

const GreyBorderOverlay = styled(ColumnDiv)`
    width: 100%;
    align-items: center;
    padding: 23px;
    background: #3F3F3F;
    opacity: 70%;
    border-radius: 8px;
`;

const MainBannerWrapper = styled(ColumnDiv)`
  align-items: center;
    padding: 0;
`;
const TournamentTableSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 60px;
  font-family: Russo One;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
`;
const TournamentTableSwitcherButton = styled.button.attrs(props => ({
    color: props && props.color ? props.color : '#fff',
}))`
    margin: 9px 15px;
    outline: none;
    border: none;
    cursor: pointer;
    color: ${props => props.color};
    background: transparent;
    
    &:hover {
    color: #d3d3d3;
  }
`;

const TournamentCheckOutButton = styled(BasicButton)`
    margin: 40px;
    max-width: 244px;
    background: linear-gradient(0deg, #232323, #232323);
    backdrop-filter: blur(8px);
    border-radius: 4px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    order: 1;
    padding: 10px 53px;
`;


type listFiltersType = 'MY_LIST' | 'ALL_LIST';
type optionType = { value: listFiltersType, title: string, filter: string }
const options: Array<optionType> = [
    {value: 'ALL_LIST', title: 'All Tournaments', filter: ''},
    {value: 'MY_LIST', title: 'My Tournaments', filter: ''},
];

const TournamentListPage: React.FC = () => {
    const [currentList, setCurrentList] = useState<listFiltersType>('ALL_LIST');
    const { tableHead, tableBody } = mockedTableData(true);
    return (
        <BackGroundImage>
            <MainBannerWrapper>
                <UserOptionsComponent/>

                <TournamentTableWrapper>
                    <TournamentTableSwitcher>
                        {options.map(o =>
                            <TournamentTableSwitcherButton
                                key={o.value}
                                onClick={() => setCurrentList(o.value)}
                                color={currentList === o.value ? 'red' : '#fff'}
                            >
                                {o.title}
                            </TournamentTableSwitcherButton>)}
                    </TournamentTableSwitcher>
                    <GreyBorderOverlay>
                        <Tournament
                            tableHead={tableHead}
                             tableBody={tableBody
                                 .filter(b =>
                                     currentList === 'ALL_LIST'  ? true : b.status === 'open')
                             }
                            order={['tournament', 'ranking', 'prize','registrationInfo']}
                        />
                        <TournamentCheckOutButton>
                            Check out all tournaments
                        </TournamentCheckOutButton>
                    </GreyBorderOverlay>

                </TournamentTableWrapper>

            </MainBannerWrapper>
        </BackGroundImage>
    );
};

export default TournamentListPage;
