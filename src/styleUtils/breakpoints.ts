const BREAKPOINTS = {
	tabletMin: 550,
	laptopMin: 1100,
	desktopMin: 1500,
};

const QUERIES = {
	tabletAndUp: `min-width: ${BREAKPOINTS.tabletMin / 16}rem`,
	laptopAndUp: `min-width: ${BREAKPOINTS.laptopMin / 16}rem`,
	desktopAndUp: `min-width: ${BREAKPOINTS.desktopMin / 16}rem`,
};

export { BREAKPOINTS, QUERIES };
