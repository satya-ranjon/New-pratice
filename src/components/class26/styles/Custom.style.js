import styled from "styled-components";

import Title from "../Title";

const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.color};
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.Themecolor};
  }
`;
export default StyledTitle;
