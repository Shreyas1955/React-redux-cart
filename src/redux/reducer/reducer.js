const INIT_STATE = {
    carts: [],
  };
  
  export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case 'ADD_CART':
        const itemExists = state.carts.find((item) => item.id === action.payload.id);
        if (itemExists) {
          return {
            ...state,
            carts: state.carts.map((item) =>
              item.id === action.payload.id
                ? { ...item, qnty: item.qnty + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            carts: [...state.carts, { ...action.payload, qnty: 1 }],
          };
        }
  
      case 'INCREASE_CART':
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload ? { ...item, qnty: item.qnty + 1 } : item
          ),
        };
  
      case 'DECREASE_CART':
        return {
          ...state,
          carts: state.carts
            .map((item) =>
              item.id === action.payload && item.qnty > 1
                ? { ...item, qnty: item.qnty - 1 }
                : item
            )
            .filter((item) => item.qnty > 0), 
        };
  
      case 'DELETE_CART':
        return {
          ...state,
          carts: state.carts.filter((item) => item.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  