const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const tfceerFetching = createAsyncThunk(
  "tfceerSlice/tfceerFetching",
  async () => {
    const res = await fetch(
      "https://www.mp3quran.net/api/v3/tafsir?tafsir=1&language=ar"
    );
    const data = await res.json();
    return data;
  }
);
export const tfceerSlice = createSlice({
  initialState: [],
  name: "tfceerSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(tfceerFetching.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = tfceerSlice.actions;
export default tfceerSlice.reducer;
