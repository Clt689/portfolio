import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "이한빈 | Software Engineer",
  description: "안녕하세요, 비판을 사랑하는 소프트웨어 엔지니어 이한빈입니다..",
  canonical: "https://www.naver.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.naver.com/",
    title: "이한빈 | Software Engineer",
    site_name: "이한빈 | Software Engineer",
    images: [
      {
        url: "/public/resume_thumbnail.png",
        width: 686,
        height: 250,
        alt: "이한빈 | Software Engineer",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "이한빈 | Software Engineer",
    },
    {
      name: "msapplication-tooltip",
      content: "이한빈 | Software Engineer",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
