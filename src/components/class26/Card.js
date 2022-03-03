import {
  ProductCardContainer,
  BadgeContainer,
  ProductTupContainer,
  ProductDitielsContainer,
  ProductCatagoreContainer,
  ProductButDetailsCon,
  ProductPricCont,
  ProductlinksCon,
} from "./styles/Container.style";

import StyledTitle from "./styles/Custom.style";
import { H4, A, P, Icon, Img } from "./styles/Element.style";

export default function Card() {
  return (
    <ProductCardContainer>
      <BadgeContainer color="red">Hot</BadgeContainer>
      <ProductTupContainer>
        <Img src="https://i.imgur.com/xdbHo4E.png" />
      </ProductTupContainer>
      <ProductDitielsContainer>
        <ProductCatagoreContainer>Women,bag</ProductCatagoreContainer>
        <H4>
          <A href="https://github.com/learnwithsumit/think-in-a-react-way/blob/lesson-26/src/components/Card.js">
            <StyledTitle
              title="Women leather bag"
              color="#33fb2c"
              hoverColor="#fbb72c"
            />
          </A>
        </H4>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </P>
        <ProductButDetailsCon>
          <ProductPricCont>
            <small>$96.00</small>$230.99
          </ProductPricCont>
          <ProductlinksCon>
            <Icon>
              <i className="fa fa-shopping-cart"></i>
            </Icon>
          </ProductlinksCon>
        </ProductButDetailsCon>
      </ProductDitielsContainer>
    </ProductCardContainer>
  );
}
