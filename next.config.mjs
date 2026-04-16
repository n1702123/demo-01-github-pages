/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // 輸出靜態檔案，讓 GitHub Pages 可以讀
  basePath: '/demo-01-github-pages', // 對應 GitHub repo 名稱
  images: {
    unoptimized: true,      // 靜態輸出不支援 Next.js Image Optimization
  },
}

export default nextConfig
