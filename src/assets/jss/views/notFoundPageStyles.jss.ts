import image from '../../img/julius-jansson-ElKW9bttYuw-unsplash.jpg';
import { defaultFont, whiteColor } from '../sharedSportEraStyles.jss';

const notFoundPageStyles = {
    container: {
        height: 'calc(100vh - 9.0625rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        '@media (min-width: 576px)': {
            height: 'calc(100vh - 6.5rem)',
        },
        '@media (min-width: 1200px)': {
            height: 'calc(100vh - 7rem)',
        },
        background: `url(${image})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    },
    wrapper: {
        ...defaultFont,
        color: whiteColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    code: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem',
        fontWeight: '700',
        margin: '0.75rem 0',
        width: '100%',
        '&::before': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            minWidth: '35%',
            marginRight: '0.5rem',
            background: 'linear-gradient(to right, rgba(240,240,240,0), #fff)',
        },
        '&::after': {
            content: '" "',
            display: 'block',
            height: '0.15em',
            minWidth: '35%',
            marginLeft: '0.5rem',
            background: 'linear-gradient(to left, rgba(240,240,240,0), #fff)',
        },
    },
    message: {
        fontSize: '2rem',
        fontWeight: '600',
        margin: '0.75rem 0',
    },
    button: {
        fontSize: '0.85rem',
        marginTop: '1rem',
        textTransform: 'uppercase',
        fontWeight: '600',
    },
};

export default notFoundPageStyles;
