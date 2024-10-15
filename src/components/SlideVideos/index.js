import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Stack,
  Grid,
} from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoItems = [
  {
    title: "Learning React - Intro",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/0.jpg",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "JavaScript Fundamentals",
    thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/0.jpg",
    videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "CSS Grid Layout",
    thumbnail: "https://img.youtube.com/vi/jV8B24rSN5o/0.jpg",
    videoUrl: "https://www.youtube.com/embed/jV8B24rSN5o",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "Learning React - Intro",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/0.jpg",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "JavaScript Fundamentals",
    thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/0.jpg",
    videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "CSS Grid Layout",
    thumbnail: "https://img.youtube.com/vi/jV8B24rSN5o/0.jpg",
    videoUrl: "https://www.youtube.com/embed/jV8B24rSN5o",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "Learning React - Intro",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/0.jpg",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "JavaScript Fundamentals",
    thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/0.jpg",
    videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
    date: "1 ตุลาคม 2567",
  },
  {
    title: "CSS Grid Layout",
    thumbnail: "https://img.youtube.com/vi/jV8B24rSN5o/0.jpg",
    videoUrl: "https://www.youtube.com/embed/jV8B24rSN5o",
    date: "1 ตุลาคม 2567",
  },
];

const SlideVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoItems[0].videoUrl);

  return (
    <Box sx={{ py: 2, mb: 1 }}>
      <Container maxWidth="lg">
        <Grid item xs={12} sm={12}>
          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
          >
            <Typography variant="body1" component="div">
              วิดีโอล่าสุด
            </Typography>

            <Typography
              sx={{ cursor: "pointer" }}
              variant="body1"
              component="div"
            >
              ดูทั้งหมด
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {videoItems.map((video, index) => (
              <SwiperSlide key={index}>
                <Card
                  onClick={() => setSelectedVideo(video.videoUrl)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: 0,
                    overflow: "hidden",
                    "&:hover": { transform: "scale(1.01)" },
                    transition: "transform 0.3s",
                    cursor: "pointer",
                    mb: 4,
                    position: "relative",
                  }}
                >
                  {/* Video Thumbnail with Play Icon */}
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="150"
                      image={video.thumbnail}
                      alt={video.title}
                    />
                    {/* Play Icon centered on the thumbnail */}
                    <PlayCircleOutline
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: 48,
                        color: "white",
                        opacity: 0.8,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        ml: -1,
                      }}
                    >
                      {video.title}
                    </Typography>
                    <Stack sx={{ position: "absolute", bottom: 3, left: 8 }}>
                      <Typography variant="body2" color="textSecondary">
                        {video.date}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Container>
    </Box>
  );
};

export default SlideVideos;
