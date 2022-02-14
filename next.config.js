const isProd = process.env.NODE_ENV === "production";

module.exports = {
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  basePath: '/nextjs-portfolio/',
  assetPrefix: isProd ? "/nextjs-portfolio/" : "",
};
