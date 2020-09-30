import { boxShadowLight, defaultFont, hexToRgb } from '../sharedSportEraStyles.jss';

const buttonStyles = {
    fullWidth: {
        ...defaultFont,
        ...boxShadowLight,
        fontWeight: '600',
        textTransform: 'uppercase',
        width: '100%',
        marginTop: '1rem',
    },
    blue: {
        background: `linear-gradient(to right top, rgba(${hexToRgb('#005c97')}),
    rgba(${hexToRgb('#363795')}))`,
    },
    red: {},
    green: {},
    rounded: {
        borderRadius: '1rem',
    },
};

export default buttonStyles;
