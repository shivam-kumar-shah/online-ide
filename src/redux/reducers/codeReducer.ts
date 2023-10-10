import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CodeState, LangEnum, CodeResponse, CodeSuccess } from "./types/code";
import { AuthError } from "./types/auth";
import { AxiosError } from "axios";
import axiosPrivate from "../../api/axiosPrivate";

const initialState: CodeState = {
  lang: LangEnum.cpp,
  source: "",
  input: "",
  output: "",
  loading: false,
  message: null,
  error: "",
  submissionId: null,
};

export const runCodeAsyncThunk = createAsyncThunk<
  CodeSuccess,
  null,
  { rejectValue: AuthError; state: RootState }
>("code/run", async (_, thunkApi) => {
  const codeState = thunkApi.getState().codeReducer;
  // console.log(axiosPrivate, "axiosPrivate");
  try {
    console.log("Code run called");
    const response = await axiosPrivate.post("/users/submit", {
      lang: codeState.lang.valueOf(),
      src: codeState.source,
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    const err = error as AxiosError<AuthError>;
    return thunkApi.rejectWithValue({
      message: err?.response?.data?.message ?? "Error in runCodeAsyncThunk",
    });
  }
});

export const codeSlice = createSlice({
  initialState: initialState,
  name: "code",
  reducers: {
    setSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
    },
    setLang: (state, action: PayloadAction<LangEnum>) => {
      console.log(action.payload);
      state.lang = action.payload;
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    setOutput: (state, action: PayloadAction<string>) => {
      state.output = action.payload;
    },
    toggleLoading: (state, action) => {
      state.loading = !state.loading;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(runCodeAsyncThunk.pending, (state, { payload }) => {
      state.loading = true;
      console.log(payload);
    });
    builder.addCase(runCodeAsyncThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.submissionId = payload.submissionId;
    });
    builder.addCase(runCodeAsyncThunk.rejected, (state, { payload }) => {
      state.loading = false;
      console.log(payload?.message);
    });
  },
});
export const codeAction = codeSlice.actions;
export const codeReducer = codeSlice.reducer;
