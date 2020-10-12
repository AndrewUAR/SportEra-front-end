import { hexToRgb } from '../sharedSportEraStyles.jss';

const loadingComponentStyles = {
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
    },
    box: {
        position: 'relative',
        width: '7.6875rem',
        height: '7.6875rem',
        backgroundColor: `${hexToRgb('#10ac84')}`,
        border: '5px solid #33d9b2',
        boxShadow: '0px 0px 10px rgba(0,0,0,.2)',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center',
        transform: 'rotate(45deg)',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'content-box',
        '& > *': {
            width: '2.5rem',
            height: '2.5rem',
            background: '#fff',
            boxSizing: 'content-box',
            margin: '0.03rem',
            transformStyle: 'preserve-3d',
            transformOrigin: 'center',
            animation: '$Loader 2s linear infinite',
        },
        '& > :nth-child(3)': {
            animationDelay: '.8s',
        },
        '& > :nth-child(2),& > :nth-child(6)': {
            animationDelay: '.6s',
        },
        '& > :nth-child(1),& > :nth-child(5),& > :last-child': {
            animationDelay: '.6s',
        },
        '& > :nth-child(4),& > :nth-child(8)': {
            animationDelay: '.2s',
        },
        '& > :nth-child(7)': {
            animationDelay: '0s',
        },
    },
    '@keyframes Loader': {
        '0%, 100%': {
            transform: 'scale(1)',
        },
        '30%': {
            transform: 'scale(0)',
        },
        '50%': {
            transform: 'scale(0)',
        },
        '75%': {
            transform: 'scale(1)',
        },
    },
};

export default loadingComponentStyles;
