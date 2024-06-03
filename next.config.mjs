/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader:'custom',
        loaderFile: './lib/loader.js'
    }
};

export default nextConfig;
