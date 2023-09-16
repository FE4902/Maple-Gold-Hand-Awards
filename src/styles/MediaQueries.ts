export const breakpoints = [1280, 640];

export const mq = breakpoints.map(
    (breakpoint) => `@media (max-width: ${breakpoint}px)`
);