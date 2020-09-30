import { boxShadow, defaultFont, hexToRgb, whiteColor } from '../sharedSportEraStyles.jss';

const footerStyles = {
    footer: {
        ...boxShadow,
        color: `rgba(${hexToRgb(whiteColor)}, 0.5)` + ' !important',
        background: `linear-gradient(to top, rgba(${hexToRgb('#232526')}, 0.5),
          rgba(${hexToRgb('#414345')}, 0.3))`,
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media (min-width: 576px)': {
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0.5rem 2rem',
        },
        '@media (min-width: 1200px)': {
            padding: '0 5rem',
        },
    },
    text: {
        ...defaultFont,
        color: 'inherit !important',
        fontSize: '0.85rem',
        fontWeight: '600',
        textAlign: 'center',
        padding: '0',
        '@media (min-width: 576px)': {
            padding: '0.5rem 0',
            fontSize: '0.85rem',
        },
        '@media (min-width: 1200px)': {
            fontSize: '1rem',
        },
    },
    footerLinks: {
        whiteSpace: 'nowrap',
        '& > *': {
            ...defaultFont,
            color: 'inherit !important',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            position: 'relative',
            '@media (min-width: 1200px)': {
                fontSize: '1rem',
                padding: '1rem 0',
                margin: '0 0.5rem',
                '&::before': {
                    content: '" "',
                    display: 'block',
                    height: '0.2rem',
                    marginBottom: '0.75rem',
                    top: '0',
                    left: '50%',
                    position: 'absolute',
                    background: whiteColor,
                    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
                    width: 0,
                },
                '&:hover::before': {
                    width: '100%',
                    left: '0%',
                },
            },
        },
    },
};

export default footerStyles;
