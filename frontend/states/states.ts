import { atom } from "recoil";

const decoModalState = atom({
  key: "decoModal",
  default: false,
});

const mainFlowerState = atom({
  key: "mainFlower",
  // default: [{ flowerSeq: -1, flowerCount: 0, flowerImage: "" }],
  default: [{ flowerSeq: -1, flowerCount: 0 }],
});

//메시지 전달할때 사용하는 꽃다발 정보가 저장
const presentBouquetState = atom({
  key: "presentBouquet",
  default: { presentBouquetImage: "", presentBouquetSeq: -1 },
});

//confirm 페이지 확인용 꽃다발
const confirmBouquetState = atom({
  key: "confirmBouquet",
  default: "",
});

// 포장지
const wrapState = atom({
  key: "wrapInfo",
  default: {
    wrapSeq: 2,
    wrapImage: "/img/wrapIvory.png",
    wrapBackImage: "/img/wrapBackIvory.png",
    wrapFrontImage: "/img/wrapFrontIvory.png",
  },
});

// 리본
const decoState = atom({
  key: "decoInfo",
  default: { decoSeq: 2, decoImage: "/img/ribbonMixYellow.png" },
});

// 부속꽃
const flowerState = atom({
  key: "flowerInfo",
  default: { flowerSeq: 2, flowerImage: "/img/flower2.png" },
});


const storeState = atom({
  key: "storeInfo",
  default: {
    storeName: '',
    storeContact: '',
    storeAddress: '',
    storeRegNum: '',
    storeLat: 37.513272317072,
    storeLng: 127.09431687965,
    storeMapId: '',
    storeBlogId: '',
    storeInstagramId: '', 	
  }
});

const saveBouquetState = atom({
  key: "saveFlower",
  default: "",
});

const totalCountState = atom({
  key: "totalCount",
  default: 0,
});

const messageStoredState = atom({ key: "messageStored", default: false });

export {
  decoModalState,
  mainFlowerState,
  wrapState,
  decoState,
  flowerState,
  presentBouquetState,
  totalCountState,
  confirmBouquetState,
  messageStoredState,
  storeState,
};
