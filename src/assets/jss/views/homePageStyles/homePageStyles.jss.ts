import { blackColor, boxShadow, defaultFont, hexToRgb, whiteColor } from '../../sharedSportEraStyles.jss';
import image from '../../../img/peter-osmenda-20K-JZ2ppbE-unsplash.jpg';
import image2 from '../../../img/textBackground/jeremy-bishop-G9i_plbfDgk-unsplash.jpg';

const homePageStyles = {
    pageHeader: {
        height: '50vh',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: `black`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        '@media (min-width: 1200px)': {
            height: '60vh',
        },
    },
    container: {
        height: '100%',
        width: 'auto',
        padding: '0',
    },
    shade: {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: '0.1rem',
        background: `rgba(${hexToRgb(blackColor)}, 0.3)`,
        '@media (min-width: 1200px)': {
            margin: '0',
        },
    },
    group: {
        height: 'inherit',
        margin: '0',
    },
    imageContainer: {
        height: 'auto',
        padding: '0.1rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& > :first-child': {
            paddingRight: '0.2rem',
        },
        '& > :last-child': {
            paddingLeft: '0.2rem',
        },
        '@media (min-width: 1200px)': {
            padding: '0',
            '& > :first-child': {
                paddingRight: '0.5rem',
            },
            '& > :last-child': {
                paddingLeft: '0.5rem',
            },
        },
    },
    image: {
        ...boxShadow,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        '@media (min-width: 1200px)': {
            height: '100%',
        },
    },
    diamondOuter: {
        position: 'absolute',
        background: `rgba(${hexToRgb(whiteColor)}, 0.5)`,
        filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
        height: '70%',
        width: '90%',
        top: '15%',
        left: '5%',
        bottom: '15%',
        right: '5%',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        '@media (min-width: 1200px)': {
            width: '60%',
            left: '20%',
        },
    },
    diamondInner: {
        position: 'absolute',
        background: `rgba(${hexToRgb(whiteColor)}, 0.5)`,
        filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
        height: '70%',
        width: '70%',
        top: '15%',
        left: '15%',
        bottom: '15%',
        right: '15%',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    },
    brandWrapper: {
        position: 'absolute',
        display: 'block',
        margin: 'auto',
        width: '100%',
        top: '44%',
        '@media (min-width: 1200px)': {
            top: '40%',
        },
    },
    brand: {
        ...defaultFont,
        fontSize: '2rem',
        letterSpacing: '1rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700',
        width: '100%',
        paddingLeft: '1rem',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        background: `url(${image2})`,
        backgroundSize: 'cover',
        '@media (min-width: 1200px)': {
            fontSize: '7rem',
            letterSpacing: '2.5rem',
            paddingLeft: '2rem',
        },
    },
    slogan: {
        ...defaultFont,
        fontSize: '0.95rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        fontWeight: '700',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        background: `url(${image2})`,
        backgroundSize: 'cover',
        '& > *': {
            margin: '0 0.25rem',
        },
        '@media (min-width: 1200px)': {
            fontSize: '2rem',
            letterSpacing: '0.5rem',
        },
    },
};

export default homePageStyles;
