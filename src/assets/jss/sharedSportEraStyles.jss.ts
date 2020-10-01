const hexToRgb = (input: string): string => {
    input += '';
    input = input.replace('#', '');
    const hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error('input is not a valid hex color.');
    }
    if (input.length === 3) {
        const first = input[0];
        const second = input[1];
        const last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase();
    const first = input[0] + input[1];
    const second = input[2] + input[3];
    const last = input[4] + input[5];
    return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(last, 16)}`;
};

const containerFluid = {
    paddingRight: '1rem',
    paddingLeft: '1rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
};

const container = {
    ...containerFluid,
    '@media (min-width: 576px)': {
        maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
        maxWidth: '720px',
    },
    '@media (min-width: 992px)': {
        maxWidth: '960px',
    },
    '@media (min-width: 1200px)': {
        maxWidth: '1140px',
    },
};

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    lineHeight: '1.5em',
};

const blackColor = '#000000';
const whiteColor = '#ffffff';

const boxShadow = {
    boxShadow: `0 10px 30px -12px rgba(${hexToRgb(blackColor)}, 0.72), 
                0 4px 25px 0px rgba(${hexToRgb(blackColor)}, 0.72), 
                0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.8)`,
};

const boxShadowLight = {
    boxShadow: `0 10px 30px -12px rgba(${hexToRgb(blackColor)}, 0.1), 
                0 4px 25px 0px rgba(${hexToRgb(blackColor)}, 0.1), 
                0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.1)`,
};

const blueButton = {
    background: `linear-gradient(to right top, rgba(${hexToRgb('#005c97')}),
    rgba(${hexToRgb('#363795')}))`,
};

export {
    hexToRgb,
    container,
    containerFluid,
    defaultFont,
    blueButton,
    boxShadow,
    blackColor,
    whiteColor,
    boxShadowLight,
};
