import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CodeState {
  lang: LangEnum;
  source: string;
  input?: string;
  output?: string;
  error?: string;
  loading: boolean;
  message: string | null;
}

enum LangEnum {
  cpp = "c++",
  java = "javac",
  python = "python",
}


const initialState: CodeState = {
  lang: LangEnum.cpp,
  source: "",
  input: "",
  output: "",
  loading: false,
  message: null,
  error: "",
};

export const codeSlice = createSlice({
  initialState: initialState,
  name: "code",
  reducers: {
    setSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
    },
    setLang: (state, action: PayloadAction<LangEnum>) => {
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
});

export const codeAction = codeSlice.actions;
export const codeReducer = codeSlice.reducer;
