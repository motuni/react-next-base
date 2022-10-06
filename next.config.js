/** @type {import('next').NextConfig} */
/* eslint-disable */
const path = require('path')

module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
}
