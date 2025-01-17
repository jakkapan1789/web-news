import Head from "next/head";
import NewsLayout from "@/components/Layout";
import Hero from "@/components/Hero";
import SlideNews from "@/components/SlideNews";
import ContentNews from "@/components/ContentNews";
import RecentNews from "@/components/RecentNews";
import AdDisplay from "@/components/AdDisplay";
import SlideVideos from "@/components/SlideVideos";
export default function Home() {
  return (
    <>
      <Head>
        <title>Web News</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsLayout>
        <Hero />
        <SlideNews />
        {/* <AdDisplay /> */}
        <ContentNews />
        <SlideVideos />

        <RecentNews />
      </NewsLayout>
    </>
  );
}

// import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";

// function LinearIndeterminate() {
//   return (
//     <Box sx={{ width: "100%" }}>
//       <LinearProgress />
//     </Box>
//   );
// }
