import { boxShadowLight, defaultFont, hexToRgb, whiteColor } from '../sharedSportEraStyles.jss';

const cardStyles = {
    card: {},
    loginRegisterCard: {
        background: `linear-gradient(to right top, rgba(${hexToRgb('#00c6ff')}, 0.6),
      rgba(${hexToRgb('#0072ff')}, 0.5))`,
        '&::after': {
            content: '" "',
            display: 'block',
            background: 'inherit',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: '-1',
            position: 'absolute',
            boxShadow: 'inset 0 0 125rem rgba(255, 255, 255, .0)',
            filter: 'blur(5px)',
        },
    },
    loginRegisterHeader: {
        ...boxShadowLight,
        background: `linear-gradient(to right top, rgba(${hexToRgb('#00c6ff')}, 0.7),
      rgba(${hexToRgb('#0072ff')}, 0.8))`,
    },
    loginRegisterFooter: {
        ...boxShadowLight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > *': {
            ...defaultFont,
            fontSize: '0.75rem',
            fontWeight: '600',
            margin: '0',
            color: whiteColor,
            textTransform: 'uppercase',
        },
    },
};

export default cardStyles;
