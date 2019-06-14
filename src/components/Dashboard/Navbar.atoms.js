import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  display: block;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 8px solid #8064A2;
`;

const LogoutButton = styled.button`
  background-color: orange;
  border: none;
  font-size: 0.9em;
  margin-bottom: 0;
  align-self: flex-end;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: lighter;
  margin: 0;
  padding: 4px 0 8px 8px;
  font-size: 32px;
  line-height: 32px;
  @media screen and ( max-width: 700px ) {
    font-size: 24px;
  }
`;

const UserMenuButton = styled.button`
  background-color: transparent;
  border: none;
`;

const UserMenuContainer = styled.div`
  position: relative;
  padding: 0 4px;
  width: 150px;
  display: flex;
  justify-content: flex-end;
`;

const UserMenuContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 8px 8px 8px;
  display: flex;
  flex-flow: column nowrap;
`;

export {
  Avatar,
  Bar,
  LogoutButton,
  Title,
  UserMenuButton,
  UserMenuContainer,
  UserMenuContent,
};
