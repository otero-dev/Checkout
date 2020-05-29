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
  display: flex;
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
  width: 100%;
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
  background: #eee;
`;


// Select Quantity
export const SelectQuantity = styled.div`
  margin-top: 10px;
  min-height: 200px;
  padding: 20px;
  border: 2px dashed black;
  display: flex;
  width: 100%;
  background: #fff;
`;

