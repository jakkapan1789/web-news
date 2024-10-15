import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Stack,
  Grid,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsItems = [
  {
    title:
      "แอลลี่ โชว์สกิลแต่งเพลงพร้อมดึง โฟร์ท เป็นพระเอกเอ็มวี เคมีที่ตามหา",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3L8pqMLSPryznPNl5LtREG8smAt1SXdQzLr3YRoC5rkHTRU.webp",
    date: "6 ตุลาคม 2567",
  },
  {
    title:
      "คนจริง2024 หนุ่ม กรรชัย สุดทน ยื่นฟ้องเน็ตไอดอล 4 คดี โชเชียลแห่เมนต์รัวๆ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3LugnqTDHPSvQ4o7lvUU37XNkFSkH91rHMcLGSGxUhLpTKi.webp",
    date: "6 ตุลาคม 2567",
  },
  {
    title:
      "เปิดยอดบริจาค เบนซ์ พริกไทย นำทีมศิลปิน จัดคอนเสิร์ตการกุศล ช่วยน้ำท่วมภาคเหนือ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3ML8arjqV2GCjh1ZtP4z9udE6Soj5RJB87Ak2jeGpyVqdFR.webp",
    date: "16 ตุลาคม 2567",
  },
  {
    title:
      "สงกรานต์ ควง มายด์ สวมชุดขาวสวยสง่า ออร่าออกทันที ชาวเน็ตตกใจหรือมีข่าวดี",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3MBV1PTEkRuXa2GF474wR98BFtY5H7CcFGesLAuaK8dkg1A.webp",
    date: "3 ตุลาคม 2567",
  },
  {
    title:
      "ชื่นชมน้ำใจ เอวา และครอบครัว มอบยาช่วยเหลือน้ำท่วมภาคเหนือ 2 ล้านบาท",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3MJNxSEykUoitn70e4bLX7Eew82itZsW6dUbg1WDRPaWm5w.webp",
    date: "6 ตุลาคม 2567",
  },
  {
    title:
      "คริส หอวัง เผยประสบการณ์ตรง รอดจากหมอดู #ทำไมดูเป็นคนดีจัง รับกลัวถูกทำของใส่",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3MEhRMVzDGTcoINKEXQjmhqkd6ba7ovoAw2JNoRWYgjXrEh.webp",
    date: "1 ตุลาคม 2567",
  },
  {
    title:
      "เป๊ก-ธัญญ่า ควง น้องลียา เปิดใจค่ายดังเกาหลีเรียกไปออดิชัน แต่พ่อไม่ให้ไป",
    image:
      "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbQVogI7aPfxDe4PK00JvKC5PE4dZEiH4iZHbAtv8iZmPH4zSzCgxu.webp",
    date: "8 ตุลาคม 2567",
  },
];

const SlideNews = () => {
  return (
    <Box sx={{ py: 2, mb: 1 }}>
      <Container maxWidth="lg">
        <Grid item xs={12} sm={12}>
          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
          >
            <Typography variant="body1" component="div">
              ข่าวล่าสุด
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
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 1800 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {newsItems.map((news, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: 0,
                    overflow: "hidden",
                    "&:hover": { transform: "scale(1.01)" },
                    transition: "transform 0.3s",
                    position: "relative",
                    cursor: "pointer",
                    mb: 4,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={news.image}
                    alt={news.title}
                  />
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
                      {news.title}
                    </Typography>
                    <Stack sx={{ position: "absolute", bottom: 3, left: 8 }}>
                      <Typography variant="body2" color="textSecondary">
                        {news.date}
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

export default SlideNews;
