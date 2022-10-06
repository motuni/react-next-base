import { createTheme } from '@mui/material/styles'

const themeOptions = {
    palette: {
        primary: {
            light: '#eff4f9',
            main: '#187fc4',
        },
        divider: '#e6e6e6',
        shape: {
            borderRadius: 6,
        },
    },
    typography: {
        fontFamily: ['Hiragino Sans, "ヒラギノ角ゴシック", "メイリオ", meiryo, sans-serif'].join(
            ','
        ),
        htmlFontSize: 10, // 62.5%
        fontSize: 16, // 1.6rem
        '@media (max-width: 800px)': {
            htmlFontSize: 8, // 50%
        },
    },
    spacing: [0, 4, 8, 16, 32, 64],
    breakpoints: {
        values: {
            xs: 375,
            sm: 500,
            md: 768,
            lg: 980,
            xl: 1280,
        },
    },
    components: {
        MuiModal: {
            styleOverrides: {
                root: {
                    zIndex: '9999',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    width: '100%',
                    margin: '16px',
                },
                container: {
                    paddingRight: '15px',
                    '@media (max-width: 768px)': {
                        paddingRight: '0',
                    },
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: 'rgba(0, 0, 0, 0.4)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: '1.6rem',
                    borderRadius: 0,
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    fontSize: '1.6rem',
                },
            },
        },
    },
}

export const MuiTheme = createTheme(themeOptions)
