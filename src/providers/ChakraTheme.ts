// theme
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        keyBlue: '#64B4E6',
    },
    fontSizes: {
        xs: '1.4rem',
        sm: '1.6rem',
        md: '1.8rem',
        lg: '2.4rem',
        xl: '3rem',
    },
    fonts: {
        heading: 'Hiragino Sans, "ヒラギノ角ゴシック", "メイリオ", meiryo, sans-serif',
        body: 'Hiragino Sans, "ヒラギノ角ゴシック", "メイリオ", meiryo, sans-serif',
        mono: 'Avenir, Helvetica, Arial, sans-serif',
    },
    styles: {
        global: () => ({
            body: {
                color: '#323232',
                bg: '#f5f5f5',
                lineHeight: '1',
            },
            '.main': {
                h2: {
                    fontSize: 'md',
                    lineHeight: '1.4',
                },
            },
        }),
    },
    components: {
        Link: {
            baseStyle: { _focus: { boxShadow: 'none' } },
        },
        Button: {
            baseStyle: { _focus: { boxShadow: 'none' } },
        },
        Modal: {
            baseStyle: { dialog: { maxWidth: { sm: '560px', md: '640px' } } },
            // "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full"
        },
        Divider: {
            baseStyle: {
                borderColor: '#e6e6e6',
                opacity: '1',
            },
        },
        Accordion: {
            baseStyle: {
                container: {
                    borderTopWidth: '0',
                    _last: {
                        borderBottomWidth: '0',
                    },
                },
                button: {
                    // transitionProperty: 'common',
                    // transitionDuration: 'normal',
                    // fontSize: '1rem',
                    _focus: {
                        boxShadow: 'none',
                    },
                    // _hover: {
                    //     bg: 'blackAlpha.50',
                    // },
                    // _disabled: {
                    //     opacity: 0.4,
                    //     cursor: 'not-allowed',
                    // },
                    px: 0,
                    py: 0,
                },
                panel: {
                    pt: 0,
                    px: 0,
                    pb: 0,
                },
            },
        },
    },
})

export default theme
