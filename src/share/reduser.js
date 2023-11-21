export const initialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export const reducer = (state, action) => {
  switch (action.type) {
    case "save":
      state[action.payload.row][action.payload.col] = action.payload.val;
      return [...state];
    case "reset":
      return [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
    default:
      return state;
  }
};


export const vinIS = { isVin: false, who: "" };
export const vinReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "check":
      const arr = action.payload.arr;
      let row = 0;
      let col = 0;
      let d1 = 0;
      let d2 = 0;
      const val = action.payload.val;
      for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
          if (arr[i][j] === val) {
            row++;
          }
          if (arr[j][i] === val) {
            col++;
          }
          if (arr[j][j] === val) {
            d1++;
          }
          if (arr[2 - j][j] === val) {
            d2++;
          }
        }
        if (row === 3 || col === 3 || d1 === 3 || d2 === 3) {
          return { ...state, isVin: true, who: val };
        }
        row = 0;
        col = 0;
        d1 = 0;
        d2 = 0;
      }
      return { ...state };
    case "reset":
      return { ...vinIS };
    default:
      return state;
  }
};
