import aqraSlice from "./aqraSlice";
import photoFronQuranSlice from "./slicePhotoFQuran";
import  tfceerSlice  from "./tafceer";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    photoType: photoFronQuranSlice,
    quraa: aqraSlice,
    tfceer: tfceerSlice,
  },
});
