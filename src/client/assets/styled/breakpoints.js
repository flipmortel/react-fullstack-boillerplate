export function mediaMin(breakpoint, rules) {
  return (`
    @media (min-width: ${breakpoint}px) {
    ${rules}
    }
  `);
}

export function mediaMax(breakpoint, rules) {
  return (`
    @media (max-width: ${breakpoint}px) {
    ${rules}
    }
  `);
}

export function mediaMinMax(breakpointMin, breakpointMax, rules) {
  return (`
    @media (min-width: ${breakpointMin}px) and (max-width: ${breakpointMax}px) {
    ${rules}
    }
  `);
}

export const mediaQueries = {
  mediaMin,
  mediaMax,
  mediaMinMax,
};

export const BREAKPOINTS = {
  XS: {
    min: 0,
    max: 640,
  },
  SM: {
    min: 641,
    max: 1023,
  },
  MD: {
    min: 1024,
    max: 1239,
  },
  LG: {
    min: 1240,
    max: 1599,
  },
  XL: {
    min: 1600,
    max: 2339,
  },
  XXL: {
    min: 2340,
    max: 99999,
  },
};

export const VIEWPORT_BREAKPOINT_NAMES = {
  viewport: {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    XXL: 'xxl',
  },
};

export const GUTTERS = {
  viewport: {
    XS: 10,
    SM: 20,
    MD: 20,
    LG: 20,
    XL: 20,
    XXL: 20,
  },
};