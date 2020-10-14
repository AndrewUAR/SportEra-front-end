import { blueButton, boxShadowLight, defaultFont } from '../sharedSportEraStyles.jss';

const registerPageStyle = {
    pageHeader: {
        height: 'calc(100vh - 9.0625rem)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        '@media (min-width: 576px)': {
            height: 'calc(100vh - 6.5rem)',
        },
        '@media (min-width: 1200px)': {
            height: 'calc(100vh - 7rem)',
        },
    },
    row: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        ...defaultFont,
        fontSize: '1rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100% !important',
        '&::before': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            width: '30%',
            marginRight: '0.5rem',
            background: 'linear-gradient(to right, rgba(240,240,240,0), #000)',
        },
        '&::after': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            width: '30%',
            marginLeft: '0.5rem',
            background: 'linear-gradient(to left, rgba(240,240,240,0), #000)',
        },
    },
    submitButton: {
        ...defaultFont,
        ...boxShadowLight,
        ...blueButton,
        fontWeight: '600',
        textTransform: 'uppercase',
        width: '100%',
        marginTop: '1rem',
        borderRadius: '1rem',
        border: 'none',
    },
    forgotResetTitle: {
        '&::before': {
            width: '20%',
        },
        '&::after': {
            width: '20%',
        },
    },
    error: {
        ...defaultFont,
        color: 'red',
    },
};

export default registerPageStyle;
