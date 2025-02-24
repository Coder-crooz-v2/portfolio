// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/redux/slices/formSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from 'emailjs-com';

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

type FormData = {
    name: string;
    email: string;
    message: string;
}

export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID as string,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "sounakbhawal2004@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_JS_USER_ID as string
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
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
        console.log('Message sent successfully!');
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.isSending = false;
        state.isSent = false;
        state.error = action.payload as string;
        console.error(action.payload);
      });
  },
});

export default formSlice.reducer;