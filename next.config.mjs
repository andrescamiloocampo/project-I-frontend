/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'unilimpio.com'
            },            
            {
                protocol: 'https',
                hostname: 'image.cdn2.seaart.me'
            },            
            {
                protocol: 'https',
                hostname: 'w7.pngwing.com'
            },            
        ]
    }
};

export default nextConfig;
