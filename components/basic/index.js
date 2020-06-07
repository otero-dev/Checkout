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
`;

export const Container = styled.div`
  width: 65%;
  margin: auto;
`;

export const NavBar = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background: #fff;
`;

// product summary 
export const ProductSummaryWrapper = styled.div`
  margin-top: 10px;
  min-height: 200px;
  padding: 40px;
  border: 2px dashed black;
  display: flex;
  background: #fff;
`;

export const ProductImage = styled.div`
  width: 400px;
  height: 400px;
  align-items: center;
  display: flex;
  overflow-y: auto;
  padding: 1px;
  border: 0.5px solid #efefef;
`;

export const ProductGallary = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 200px;
  display: flex;
  overflow-x: auto;
`;

export const GallaryCell = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const ProductDescription = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  background: #efefef;
`;


// Select Quantity
export const Card = styled.div`
  padding: 15px;  
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const CheckOff = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid black;
`;

export const MenuItem = styled.div`
  height: 70px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;
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


