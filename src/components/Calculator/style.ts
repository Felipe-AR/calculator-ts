import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 475px;
  background: var(--bg-primary);
`;

export const Header = styled.div`
  width: 350px;
  height: 125px;
  background: var(--bg-secundary);
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: var(--text-secundary);
`;

export const Formula = styled.span`
  font-size: 1.8rem;
  color: var(--text-secundary);
`;

export const NumPad = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
