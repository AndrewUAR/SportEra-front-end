import { defaultFont } from '../sharedSportEraStyles.jss';

const registerPageStyle = () => ({
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
        fontSize: '1.25rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '&::before': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            minWidth: '20vw',
            marginRight: '0.5rem',
            background: 'linear-gradient(to right, rgba(240,240,240,0), #000)',
        },
        '&::after': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            minWidth: '20vw',
            marginLeft: '0.5rem',
            background: 'linear-gradient(to left, rgba(240,240,240,0), #000)',
        },
    },
    loginRegisterTitle: {
        '&::before': {
            '@media (min-width: 768px)': {
                minWidth: '15vw',
            },
            '@media (min-width: 992px)': {
                minWidth: '7vw',
            },
            '@media (min-width: 1200px)': {
                minWidth: '4vw',
            },
        },
        '&::after': {
            '@media (min-width: 768px)': {
                minWidth: '15vw',
            },
            '@media (min-width: 992px)': {
                minWidth: '7vw',
            },
            '@media (min-width: 1200px)': {
                minWidth: '4vw',
            },
        },
    },
    forgotResetTitle: {
        '&::before': {
            '@media (min-width: 768px)': {
                minWidth: '10vw',
            },
            '@media (min-width: 992px)': {
                minWidth: '5.25vw',
            },
            '@media (min-width: 1200px)': {
                minWidth: '4vw',
            },
        },
        '&::after': {
            '@media (min-width: 768px)': {
                minWidth: '10vw',
            },
            '@media (min-width: 992px)': {
                minWidth: '5.25vw',
            },
            '@media (min-width: 1200px)': {
                minWidth: '4vw',
            },
        },
    }
});

export default registerPageStyle;
