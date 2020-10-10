import { boxShadowLight, defaultFont, hexToRgb, whiteColor } from '../sharedSportEraStyles.jss';

const formInputStyles = {
    formGroup: {
        margin: '0',
    },
    input: {
        border: 'none',
        boxShadow: 'inset 0px 0px 5px 0px rgba(0,0,0,0.5)',
        '&::-webkit-input-placeholder': {
            color: whiteColor,
        },
        '&,&:focus': {
            ...defaultFont,
            fontSize: '0.75rem',
            fontWeight: '500',
            color: whiteColor,
        },
    },
    label: {
        ...defaultFont,
        fontSize: '0.75rem',
        fontWeight: '600',
        color: whiteColor,
        margin: '0 0 0 0.5rem',
    },
    inputIcon: {
        ...boxShadowLight,
        background: `linear-gradient(to right top, rgba(${hexToRgb('#00c6ff')}, 0.8),
        rgba(${hexToRgb('#0072ff')}, 0.7))`,
        margin: '0',
        padding: '0 0.5rem',
        border: 'none',
        color: `rgba(${hexToRgb(whiteColor)}, 0.7)`,
    },
    feedback: {
        ...defaultFont,
        fontSize: '0.75rem',
        fontWeight: '600',
        display: 'inline-block',
        margin: '0 0 0 2.25rem',
        whiteSpace: 'break-spaces',
    },
    blue: {
        '&,&:focus': {
            background: `linear-gradient(to right top, rgba(${hexToRgb('#00c6ff')}, 0.8),
            rgba(${hexToRgb('#0072ff')}, 0.7))`,
        },
    },
    dark: {
        '&,&:focus': {
            background: `linear-gradient(to right top, rgba(${hexToRgb('#606c88')}, 0.8),
                rgba(${hexToRgb('#3f4c6b')}, 0.7))`,
        },
    },
};

export default formInputStyles;
