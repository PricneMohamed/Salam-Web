const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const photoQuranFetching = createAsyncThunk(
  "photoFronQuranSlice/photoQuranFetching",
  async () => {
    const res = await fetch(
      "https://www.mp3quran.net/api/v3/suwar?language=ar"
    );
    const data = await res.json();
    return data;
  }
);

export const photoFronQuranSlice = createSlice({
  initialState: [],
  name: "photoFronQuran",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(photoQuranFetching.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = photoFronQuranSlice.actions;
export default photoFronQuranSlice.reducer;
