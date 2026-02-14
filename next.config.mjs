/** @type {import('next').NextConfig} */
const nextConfig = {
    module.exports = {
        async headers() {
            return [{
                source: '/audio/(.*)'
                headers: [{
                    key: 'Cache-Control'
                    value: 'public, max-age=31536000, immutable'
                }]
            }]
        }
    }
};

export default nextConfig;
