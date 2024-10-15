import { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CookieBanner = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  width: "100%",
  maxWidth: "100%", // Ensure it doesn't overflow horizontally
  backgroundColor: "black",
  color: "white",
  padding: theme.spacing(2),
  boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  boxSizing: "border-box", // Include padding within the width
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(1.5), // Adjust padding for mobile devices
  },
}));

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <CookieBanner>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          flexGrow: 1,
          textAlign: { xs: "center", sm: "left" },
          mb: { xs: 2, sm: 0 }, // Adds margin below text on small screens
          maxWidth: "100%", // Prevents text overflow
        }}
      >
        <Typography variant="body2">เว็บไซต์นี้ใช้คุกกี้</Typography>
        <Typography variant="caption">
          เว็บไซต์นี้ใช้คุกกี้เพื่อวัตถุประสงค์ในการปรับปรุงประสบการณ์ของผู้ใช้ให้ดียิ่งขึ้น
          ท่านสามารถศึกษารายละเอียดเพิ่มเติมเกี่ยวกับประเภทของคุกกี้ที่เราจัดเก็บ
          เหตุผลในการใช้คุกกี้ และวิธีการตั้งค่าคุกกี้ได้ใน นโยบายคุกกี้
        </Typography>
      </Stack>

      <Button
        variant="contained"
        onClick={handleAccept}
        sx={{
          marginTop: { xs: 1, sm: 0 },
          bgcolor: "#0046AD",
          width: { xs: "100%", sm: "auto" }, // Full-width button on mobile
          textAlign: "center", // Center the text in the button
          maxWidth: "300px", // Limit button size to avoid stretching
        }}
      >
        ยอมรับ
      </Button>
    </CookieBanner>
  );
};

export default CookieConsent;
