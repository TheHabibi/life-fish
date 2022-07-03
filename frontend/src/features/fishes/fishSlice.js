import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fishService from './fishService'

const initialState = {
  fishes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const createFish = createAsyncThunk(
  'fishes/create',
  async (fishData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await fishService.createFish(fishData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getFishes = createAsyncThunk(
  'fishes/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await fishService.getFishes(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user fish
export const deleteFish = createAsyncThunk(
  'fishes/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
     
      return await fishService.deleteFish(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const fishSlice = createSlice({
  name: 'fish',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFish.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createFish.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(action.payload)
        state.fishes.fishes.push(action.payload)
      })
      .addCase(createFish.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getFishes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFishes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.fishes = action.payload
      })
      .addCase(getFishes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteFish.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteFish.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.fishes.fishes = state.fishes.fishes.filter(
          (fish) => fish._id !== action.payload.id
        )
      })
      .addCase(deleteFish.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = fishSlice.actions
export default fishSlice.reducer 