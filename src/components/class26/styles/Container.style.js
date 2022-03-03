import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 380px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 50px auto;
  background: ${(props) => props.theme.CardBackground};
`;

export const BadgeContainer = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: ${(props) => props.color};
  color: #fff;
  padding: 3px 10px;
`;

export const ProductTupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 50px;
  background: #f0f0f0;
`;

export const ProductDitielsContainer = styled.div`
  padding: 30px;
`;

export const ProductCatagoreContainer = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
`;

export const ProductButDetailsCon = styled.div`
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

export const ProductPricCont = styled.div`
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
`;

export const ProductlinksCon = styled.div`
  text-align: right;
`;
