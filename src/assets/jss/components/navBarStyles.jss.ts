import { boxShadow, defaultFont, hexToRgb } from '../sharedSportEraStyles.jss';

const navBarStyles = {
    navBar: {
        ...boxShadow,
        whiteSpace: 'nowrap',
        composes: 'justify-content-between',
        zIndex: 1,
        padding: '0 1rem',
        background: `linear-gradient(to right top, rgba(${hexToRgb('#00c6ff')}, 0.7),
          rgba(${hexToRgb('#0072ff')}, 0.8))`,
        '@media (min-width: 576px)': {
            padding: '0rem 4rem',
        },
    },
    brand: {
        ...defaultFont,
        fontSize: '1.5rem',
        padding: '0.5rem 0',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    navLinks: {
        whiteSpace: 'nowrap',
        '& > *': {
            ...defaultFont,
            fontSize: '1rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            position: 'relative',
            '@media (min-width: 1200px)': {
                padding: '1rem 0',
                margin: '0 0.5rem',
                '&::after': {
                    content: '" "',
                    display: 'block',
                    height: '0.2rem',
                    bottom: '0',
                    left: '50%',
                    position: 'absolute',
                    background: '#fff',
                    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
                    width: 0,
                },
                '&:hover::after': {
                    width: '100%',
                    left: '0%',
                },
            },
        },
    },
};

export default navBarStyles;
