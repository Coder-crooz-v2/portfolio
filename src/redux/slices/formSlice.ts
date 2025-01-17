import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';

interface FormState {
  isSending: boolean;
  isSent: boolean;
  error: string | null;
}

const initialState: FormState = {
  isSending: false,
  isSent: false,
  error: null,
};

export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData: { name: string; email: string; message: string }, { rejectWithValue }) => {
      try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID!,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          to_name: 'Sounak', 
          from_email: formData.email,
          to_email: 'sounakbhawal2004@gmail.com', // Your email address
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_JS_USER_ID!
      );
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to send message:', error);
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.isSending = true;
        state.isSent = false;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.isSending = false;
        state.isSent = true;
        state.error = null;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.isSending = false;
        state.isSent = false;
        state.error = action.error.message || 'Failed to send message';
      });
  },
});

export default formSlice.reducer;