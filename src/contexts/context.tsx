export const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        books: action.payload.books,
      };
    default:
      return state;
  }
};