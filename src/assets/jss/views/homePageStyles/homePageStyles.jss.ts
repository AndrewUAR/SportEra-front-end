import { boxShadow, whiteColor } from '../../sharedSportEraStyles.jss';

const homePageStyles = {
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
        background: whiteColor,
    },
    sliderContainer: {
        ...boxShadow,
    },
    slideImage: {
        composes: 'd-block w-100',
        height: '50vh',
        width: 'auto',
        objectFit: 'cover',
        objectPosition: 'center bottom',
        '@media (min-width: 1200px)': {
            height: '60vh',
        },
    },
};

export default homePageStyles;
