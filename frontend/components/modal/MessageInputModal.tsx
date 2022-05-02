import React, { useState } from "react";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BouquetImg from "../present/BouquetImg";
import KakaoBtn from "../Button/KakaoBtn";
import { useRouter } from "next/router";

interface meesageModalProps {
  openMessageModal?: () => void;
  closeMessageModal?: () => void;
  messageModal?: boolean;
  share?: boolean;
}
function MessageInputModal({
  openMessageModal,
  closeMessageModal,
  messageModal,
  share,
}: meesageModalProps) {
  const router = useRouter();
  const [content, setContent] = useState<string>();
  const handleInput = () => {};
  const handleShare = () => {};
  const handleRoute = () => {
    router.push("/madelist");
  };
  const bouquetImage = "/img/bouquet3.png";
  return (
    <>
      {messageModal ? (
        <Box
          sx={{
            position: "absolute",
            width: "420px",
            height: "100%",
            backgroundColor: "rgba(255, 250, 250, 75%)",
            zIndex: 900,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "40%",
              backgroundColor: "#FFE0E0",
              zIndex: 1300,
              borderRadius: "10px",
              top: "25%",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                fontSize: "15px",
                fontFamily: "JuliusSansOne",
                fontWeight: "bold",
                top: "20px",
                left: "20%",
              }}
            >
              메세지 내용을 입력해주세요
            </Typography>
            <CloseIcon
              sx={{ position: "absolute", top: "20px", left: "90%", color: "" }}
              onClick={share ? handleRoute : closeMessageModal}
            />
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "200px",
                top: "62px",
                left: "64%",
              }}
            >
              <BouquetImg bouquetImage={bouquetImage}></BouquetImg>
            </Box>
            <TextareaAutosize
              aria-label="minimum height"
              id="contents"
              value={content}
              minRows={3}
              maxRows={10}
              placeholder="메세지 내용을 입력해주세요"
              style={{
                position: "absolute",
                top: "60px",
                left: "0%",
                fontSize: "1rem",
                fontFamily: "JuliusSansOne",
                width: "254px",
                height: "185px",
                backgroundColor: "#FFFAFA",
                border: "none",
                resize: "none",
                marginBottom: "-1rem",
                marginLeft: "0.6rem",
                padding: "1rem",
                borderRadius: "10px",
              }}
              onChange={handleInput}
            />
            <Typography
              sx={{
                position: "absolute",
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "JuliusSansOne",
                top: "260px",
                left: "15%",
              }}
            >
              완성된 메시지 카드와 꽃다발을 전달해보세요
            </Typography>
            <Box sx={{ position: "absolute", top: "300px", left: "70px" }}>
              <KakaoBtn
                handleBtn={handleShare}
                title="카카오톡으로 공유하기"
              ></KakaoBtn>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
export default MessageInputModal;
