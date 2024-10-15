import React from "react";
import { Box, Paper, Typography, Grid, Avatar, Container } from "@mui/material";

const ads = [
  {
    title: "ลดราคาสินค้า",
    description: "รับส่วนลด 20% สำหรับสินค้าทุกชิ้นในร้านของเรา",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "โปรโมชันสุดพิเศษ",
    description: "ซื้อ 1 แถม 1 สำหรับทุกรายการ",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "ฟรีค่าจัดส่ง",
    description: "เมื่อสั่งซื้อสินค้ามากกว่า 500 บาท",
    image: "https://via.placeholder.com/100",
  },
];
const AdDisplay = () => {
  return (
    <Box sx={{ py: 4, mt: 6, backgroundColor: "#87A2FF" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" gutterBottom>
          รายการโฆษณา
        </Typography>
        <Grid container spacing={2}>
          {ads.map((ad, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={2} sx={{ padding: 2, border: "none" }}>
                <Avatar
                  alt="Ad Image"
                  src={ad.image}
                  sx={{ width: 100, height: 100, marginBottom: 2 }}
                />
                <Typography variant="h6">{ad.title}</Typography>
                <Typography variant="body2">{ad.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdDisplay;
