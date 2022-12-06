import React from "react";
import styled from "styled-components";

import { Container } from "../../GolbalStyles.styled";

const Wrapper = styled.div``;
const SideMenu = styled.div``;
const TopSideMenu = styled.div``;
const AvatarWrap = styled.div``;

const Content = styled.div``;

const DashBoard = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <SideMenu>
            <TopSideMenu>
              <AvatarWrap>
                <img
                  src="https://images.unsplash.com/photo-1669406999312-0821a42a3887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80"
                  alt=""
                />
              </AvatarWrap>
              <div>User : lemanh123@gmail.com</div>
              <div>point : 1233</div>
            </TopSideMenu>
            <div>
              <button>Logout</button>
            </div>
          </SideMenu>
          <Content></Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default DashBoard;
