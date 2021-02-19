import baseStyled, { css } from "styled-components";

const sizes = {
  desktop: 1167,
  tablet: 778,
  phone: 576,
};

const media = {
  desktop: (...args) => undefined,
  tablet: (...args) => undefined,
  phone: (...args) => undefined,
};

Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(args.shift(), ...args)}
    }
  `;
  return acc;
}, media);

// const windowInnerHeight = window ? window.innerHeight : null;

const color = {
  grey_1: "#f8f9fa",
  grey_2: "#f1f3f5",
  grey_3: "#e9ecef",
  grey_4: "#dee2e6",
  grey_5: "#ced4da",
  grey_6: "#adb5bd",
  grey_7: "#868e96",
  grey_8: "#495057",
  grey_9: "#343a40",
  grey_10: "#212529",
  blue_1: "#7fade3",
  blue_2: "#3d87cb",
  green_1: "#8ce2d0",
  green_2: "#30d1a6",
  green_3: "#3FB988",
  red_1: "#e89cae",
  red_2: "#df4661",
};

const theme = {
  color,
  media,
  // windowInnerHeight,
};

export const styled = baseStyled;
export default theme;
