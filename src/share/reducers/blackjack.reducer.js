import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data';

const initialState = {
  totalGamer: 0,
  totalDiler: 0,
  cards: [],
};

export const blackSlice = createSlice({
  name: 'black',
  initialState,
  reducers: {
    firstCards: (state) => {
      const cards = [];
      while (cards.length < 4) {
        const ind = Math.floor(Math.random() * 52);
        const res = data[ind];
        if (!cards.includes(res)) {
          cards.push(res);
        }
      }
      return {
        ...state,
        cards,
        totalGamer: cards[0].value + cards[1].value,
        totalDiler: cards[2].value,
      };
    },
    nextCard: (state) => {
      const len = state.cards.length;
      const cards = [...state.cards]
      while (cards.length - len < 1) {
        const ind = Math.floor(Math.random() * 52);
        const res = data[ind];
        if (!cards.includes(res)) {
          cards.push(res);
        }
      }
      return {
        ...state,
        cards,
        totalGamer: state.totalGamer + cards[cards.length - 1].value,
      };
    },
  },
});

export const { firstCards, nextCard } = blackSlice.actions;
export default blackSlice.reducer;
