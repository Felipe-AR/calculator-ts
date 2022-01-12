/* eslint-disable indent */
import styled from 'styled-components';

interface KeyProps {
  math?: boolean;
  width?: number;
  height?: number;
}

export const Key = styled.button<KeyProps>`
  background: ${(props) =>
    props.math ? 'var(--bg-secundary)' : 'var(--bg-primary)'};
  color: ${(props) =>
    props.math ? 'var(--text-secundary)' : 'var(--text-primary)'};
  border-radius: 8px;
  margin: 10px 2px;
  padding: 10px;
  font-size: 1.25rem;
  grid-column: ${(props) => (props.width ? `span ${props.width}` : 'initial')};
  grid-row: ${(props) => (props.height ? `span ${props.height}` : 'initial')};
  transition: 0.25s ease all;

  &:active,
  &:hover {
    background: ${(props) =>
      props.math ? 'var(--text-secundary)' : 'var(--text-primary)'};
    color: ${(props) =>
      props.math ? 'var(--bg-secundary)' : 'var(--bg-primary)'};
  }
`;
