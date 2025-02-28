import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  images: {
    domains: [
      "cdn.pixabay.com",
      "dummyimage.com",
      "img.freepik.com",
      "images.unsplash.com",
      "cdn.usegalileo.ai",
      "via.placeholder.com",
      "i.postimg.cc",
      "cdn.tuk.dev",
      "i.ibb.co",
      "picsum.photos",
    ],
  },
};
export default config;
