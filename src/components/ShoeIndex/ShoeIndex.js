import React from "react";
import styled from "styled-components/macro";

import { MEDIA_QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeBreadCrumbs = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
  </Breadcrumbs>
);

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadCrumbs>
              <ShoeBreadCrumbs />
            </MobileBreadCrumbs>
            <Title>Running</Title>
          </div>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadCrumbs>
          <ShoeBreadCrumbs />
        </DesktopBreadCrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  display: none;
  flex-basis: 248px;

  @media ${MEDIA_QUERIES.laptop} {
    display:revert;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopBreadCrumbs = styled.div`
  display: none;

  @media ${MEDIA_QUERIES.laptop} {
    display: flex;
  }
`;

const MobileBreadCrumbs = styled.div`
  display: block;

  @media ${MEDIA_QUERIES.laptop} {
    display: none;
  }
`;

export default ShoeIndex;
