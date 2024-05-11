const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const aqraaFetching = createAsyncThunk(
  "aqraSlice/aqraaFetching",
  async () => {
    const res = await fetch(
      "https://www.mp3quran.net/api/v3/reciters?language=ar"
    );
    const data = await res.json();
    return data;
  }
);
export const aqraSlice = createSlice({
  initialState: [],
  name: "aqraSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(aqraaFetching.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = aqraSlice.actions;
export default aqraSlice.reducer;
