import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfidenceScores {
  positive: number;
  neutral: number;
  negative: number;
}

interface AnalysisState {
  sentimentValue: string | null;
  confidenceScores: ConfidenceScores | null;
  loading: boolean;
  loadingPositive: boolean;
  loadingNeutral: boolean;
  loadingNegative: boolean;
  loadingSpeedometer: boolean; // New state
}

const initialState: AnalysisState = {
  sentimentValue: null,
  confidenceScores: null,
  loading: false,
  loadingPositive: false,
  loadingNeutral: false,
  loadingNegative: false,
  loadingSpeedometer: false, // New state
};

const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    setSentimentValue(state, action: PayloadAction<string>) {
      state.sentimentValue = action.payload;
    },
    setConfidenceScores(state, action: PayloadAction<ConfidenceScores>) {
      state.confidenceScores = action.payload;
      state.loadingPositive = false;
      state.loadingNeutral = false;
      state.loadingNegative = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setLoadingPositive(state, action: PayloadAction<boolean>) {
      state.loadingPositive = action.payload;
    },
    setLoadingNeutral(state, action: PayloadAction<boolean>) {
      state.loadingNeutral = action.payload;
    },
    setLoadingNegative(state, action: PayloadAction<boolean>) {
      state.loadingNegative = action.payload;
    },
    setLoadingSpeedometer(state, action: PayloadAction<boolean>) {
      state.loadingSpeedometer = action.payload;
    },
    resetState(state) {
      state.sentimentValue = null;
      state.confidenceScores = null;
      state.loading = false;
      state.loadingPositive = false;
      state.loadingNeutral = false;
      state.loadingNegative = false;
    },
  },
});

export const {
    setSentimentValue,
    setConfidenceScores,
    setLoading,
    setLoadingPositive,
    setLoadingNeutral,
    setLoadingNegative,
    setLoadingSpeedometer, // New action
    resetState
  } = analysisSlice.actions;
  

export default analysisSlice.reducer;
