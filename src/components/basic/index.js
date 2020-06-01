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
  ratio,
} from 'styled-system';
import styled from 'styled-components';

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
  ${ratio}  
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
  display: flex;
  height: 400px;
  width: 400px;
  background: #eee;
`;

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


