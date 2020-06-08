import {
  space,
  height,
  width,
  fontSize,
  color,
  display,
  flex,
  flexWrap,
  flexDirection,
  flexBasis,
  alignSelf,
  justifySelf,
  alignItems,
  justifyContent,
  background,
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  borderRadius,
  borderColor,
  borders,
  boxShadow,
  opacity,
  overflow,
  position,
  zIndex,
  top,
  left,
  bottom,
  right,
  fontFamily,
  fontWeight,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  textAlign,
  size,
} from 'styled-system';
import styled, {keyframes} from 'styled-components';

export const Box = styled.div`
  ${space}
  ${height}
  ${width}
  ${fontSize}
  ${color}
  ${display}
  ${alignSelf}
  ${justifySelf}
  ${alignItems}
  ${justifyContent}
  ${flex}
  ${flexWrap}
  ${flexDirection}
  ${flexBasis}
  ${background}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundRepeat}
  ${borderRadius}
  ${borderColor}
  ${borders}
  ${boxShadow}
  ${opacity}
  ${overflow}
  ${position}
  ${zIndex}
  ${top}
  ${left}
  ${bottom}
  ${right}
  ${fontFamily}
  ${fontWeight}
  ${minWidth}
  ${maxWidth}
  ${minHeight}
  ${maxHeight}
  ${size}
  ${textAlign}
`;

export const Container = styled.div`
  width: 60%;
  margin: auto;

  @media only screen and (max-width: 1024px) {
     width: 100%;
  }
`;

export const NavBar = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background: #fff;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

// product summary 
export const ProductSummaryWrapper = styled.div`
  margin-top: 10px;
  min-height: 200px;
  padding: 30px;
  border: 2px dashed black;
  display: flex;
  justify-content: space-between;
  background: #fff;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

export const ProductOverview = styled.div`
  width: 50%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  };
`

export const Headline = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  & h1 {
    text-align: center;
  }
`;

export const FeatureLine = styled.div`
  margin-left: 15px;
`

export const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.div`
  width: 400px;
  height: 400px;
  align-items: center;
  display: flex;
  overflow-y: auto;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  };
`;

export const ProductGallary = styled.div`
  margin-top: 20px;
  width: 400px;
  display: flex;
  overflow-x: auto;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  };
`;

export const GallaryCell = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const ProductDescription = styled.div`
  width: 50%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  };
`;


export const Wrapper = styled.div`
  width: 48%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  };
`;

export const SuperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 1024px) {
    display: block;
  };
`;


// Select Quantity
export const Card = styled.div`
  padding: 15px;  
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const BumpCard = styled.div`
  padding: 15px;
  background: whitesmoke;
  border-radius: 5px;
  border: 1px solid #ccc;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #777;
  }
`;

export const CheckOff = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1.5px solid #172969;
  position: relative;
`;

export const CheckOn = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #172969;
  border: 1.5px solid #172969;
  position: relative;
`;

export const MenuItem = styled.div`
  height: 70px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;
`;


export const DiscountMenuItem = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background: #efefef;
  }
`;

// Custom Input Field
export const InputField = styled.input`
  width: calc(100% - 35.2px);
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 17.6px;
  background-color: whitesmoke;
  padding: 17.6px;
  font-size: 16px;
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(26,178,44,0.5);
  }
`;

export const SelectBox = styled.select`
  height: 53.2px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 17.6px;
  background-color: whitesmoke;
  padding: 17.6px;
  font-size: 16px;
  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(26,178,44,0.5);
  }
`

export const DiscountBrand = styled.div`
    width: 100px;
    min-width: 100px;
    height: 100px;
    background-color: #c91f3f;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 22px;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 110%;
`;

const spin = keyframes`  
  100% {
    transform:rotate(-360deg); 
  }
`

export const DiscoundDash = styled.div`
    width: 84px;
    height: 84px;
    border: 2px dashed white;
    position: absolute;
    border-radius: 100%;
    animation-name: ${spin};
    animation-duration: 12s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: 0s;
`

export const DiscountDescription = styled.div`
  text-align: center;
  padding: 0 20px;
  & h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #c91f3f;
  }
  & h4 {
    font-weight: normal;
    font-size: 16px;
    margin: 8.8px 0 0 0;
    line-height: 140%;
  }
`;

const bump = keyframes`  
  0% {
    left: -40px;
  }
  10% {
    left: -50px;
  }

  18% {
    left: -34px;
  }
  25% {
    left: -40px;
  }
`

export const Arrow = styled.div`
  position: absolute;
  top: -3px;
  left: -40px;
  animation: ${bump} 3s infinite;
`;

export const ContactUs = styled.div`
  text-align: center;
  margin-left: 10px;
  
  @media only screen and (max-width: 1024px) {
    display: none;
  };
`

export const StoreLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;  
`;

export const SSLLogo = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }; 
`;

export const CreditOrderDetail = styled.div`
    display: flex;
    align-items: center;
    padding: 18px 5px 18px 10px;
    border-radius: 5px;
    justify-content: space-between;
`;

export const CreditOrderShip = styled.div`
    display: flex;
    align-items: center;
    padding: 18px 5px 18px 10px;
    border-radius: 5px 5px 0 0;
    justify-content: space-between;
    background: whitesmoke;
`;

export const CreditOrderTotal = styled.div`
    display: flex;
    align-items: center;
    padding: 18px 5px 18px 10px;
    border-radius: 0 0 5px 5px;
    justify-content: space-between;
    background: whitesmoke;
`;

export const CardPayButton = styled.button`
    transition: all 600ms cubic-bezier(0, 0.3, 0.7, 1);
    background-color: #1ab22c;
    color: white;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: bold;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    line-height: 150%;
    height: initial;
    padding: 13.1px;
    margin-top: 17.6px;
    width: 100%;
    border-radius: 5px;
    border: none;
    &:hover {
      background-color: #159324;
    }
`

export const PaypalButton = styled.button`
    transition: all 300ms ease-out;
    width: 100%;
    height: 50px;
    background-color: #ffbd03;
    border-radius: 5px;
    margin: 17.6px auto 0 auto;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    &:hover {
      background-color: #e9ac00;
    }
`;
