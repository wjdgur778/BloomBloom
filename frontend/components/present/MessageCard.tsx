import React from "react";
import { Box, Typography } from "@mui/material";

interface messageProps {
  message: string;
}
function MessageCard({ message }: messageProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#EFDFBF",
          width: "340px",
          height: "240px",
          borderRadius: "10px",
          top: "-30px",
          left: "11px",
          overflow: "scroll",
        }}
      >
        <Typography
          sx={{
            marginTop: "15px",
            fontFamily: "JuliusSansOne",
            fontSize: "14px",
            textAlign: "center",
            whiteSpace: "pre-line",
            lineHeight: "25px",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
}

export default MessageCard;
