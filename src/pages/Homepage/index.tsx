import React from 'react';
import FeaturesBanner from '../../components/FeaturesBanner';
import MainBanner from '../../components/MainBanner';
import RecentWinners from '../../components/RecentWinners';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import Description from '../../components/Description';
import Tournament from '../../components/Tournament';
import PlayersCarousel from '../../components/PlayersCarousel';
import {HeadingH2, LayoutWrapper} from "../../styles/mixins";
import styled from "styled-components";
import {mockedTableData} from "../../components/Tournament/mockedData";

const StyledDescription = styled.div`
  padding: 70px 0;
  background: #000;
`;

const MainBannerWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const Homepage: React.FC = () => {
    const { tableHead, tableBody } = mockedTableData(false);
  return (
    <main>
     <MainBanner />
     <RecentWinners />
     <FeaturesBanner textRight banner={banner1} title='Top 4 Games'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     />
     <FeaturesBanner banner={banner2} title='Payment in 24h'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem lacinia commodo ac egestas dapibus neque. Orci pulvinar mauris viverra auctor egestas cras amet. '
     />
        <StyledDescription>
            <MainBannerWrapper>
                <HeadingH2>Tournament List</HeadingH2>
                <Tournament tableHead={tableHead} tableBody={tableBody}/>
            </MainBannerWrapper>
        </StyledDescription>
     <Description />
     <PlayersCarousel />
    </main>
  );
};

export default Homepage;
