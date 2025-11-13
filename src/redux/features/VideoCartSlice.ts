import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Video {
  id: number;
  title: string;
  category: string;
  price: string;
}

interface VideoCartState {
  selectedVideos: Video[];
}

const loadFromStorage = (): Video[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('videoCart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (videos: Video[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('videoCart', JSON.stringify(videos));
  }
};

const initialState: VideoCartState = {
  selectedVideos: loadFromStorage(),
};

const videoCartSlice = createSlice({
  name: 'videoCart',
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<Video>) => {
      const exists = state.selectedVideos.find(v => v.id === action.payload.id);
      if (!exists) {
        state.selectedVideos.push(action.payload);
        saveToStorage(state.selectedVideos);
        console.log('✅ Video ditambahkan & disimpan:', action.payload);
      }
    },
    removeVideo: (state, action: PayloadAction<number>) => {
      state.selectedVideos = state.selectedVideos.filter(v => v.id !== action.payload);
      saveToStorage(state.selectedVideos);
      console.log('🗑️ Video dihapus & disimpan');
    },
    clearCart: (state) => {
      state.selectedVideos = [];
      saveToStorage([]);
    },
  },
});

export const { addVideo, removeVideo, clearCart } = videoCartSlice.actions;
export default videoCartSlice.reducer;