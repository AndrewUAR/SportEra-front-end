import { blueButton, boxShadowLight, defaultFont, hexToRgb } from '../../sharedSportEraStyles.jss';
import image from '../../../img/peter-osmenda-20K-JZ2ppbE-unsplash.jpg';

const formStyles = {
    container: {
        minHeight: '50vh',
        height: 'auto',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${image})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        paddingTop: '1.5rem',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(to right, rgba(${hexToRgb('#8e9eab')}, 0.9), rgba(${hexToRgb('#eef2f3')}, 0.8))`,
        padding: '1rem 1rem 2rem 1rem',
        '@media (min-width: 992px)': {
            width: '50vw',
        },
        '@media (min-width: 1200px)': {
            width: '30vw',
        },
    },
    form: {
        width: '90%',
    },
    searchButton: {
        ...defaultFont,
        ...boxShadowLight,
        ...blueButton,
        fontWeight: '600',
        textTransform: 'uppercase',
        width: '100%',
        border: 'none',
        marginTop: '1rem',
    },
    buttonWrapper: {
        width: '90%',
    },
    divider: {
        ...defaultFont,
        fontSize: '1rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
        width: '100% !important',
        '&::before': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            width: '40%',
            marginRight: '0.5rem',
            background: 'linear-gradient(to right, rgba(240,240,240,0), #000)',
        },
        '&::after': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            width: '40%',
            marginLeft: '0.5rem',
            background: 'linear-gradient(to left, rgba(240,240,240,0), #000)',
        },
    },
    textWrapper: {
        ...defaultFont,
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
};

export default formStyles;
