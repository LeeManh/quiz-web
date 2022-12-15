import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
`;
export const TableHead = styled.thead`
  display: block;
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  padding: 2rem 2rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`;
export const TableCell = styled.td`
  text-align: ${(props) => (props.align ? props.align : "left")};
  grid-column: ${(props) =>
    props.colSpan ? `span ${props.colSpan}` : "span 1"};
  font-size: 1.6rem;
  min-width: 10rem;

  /* lineClamp */
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lineClamp && props.lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ButtonActionsWrap = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    &:hover svg {
      color: black;
    }
  }

  svg {
    transition: 0.3s;
    color: gray;
    font-size: 2rem;
  }
`;
