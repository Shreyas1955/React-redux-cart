export const ADD = (item)=>{
    return {
        type:"ADD_CART",
        payload:item

    }

}

export const INCREASE = (id) => {
    return {
      type: 'INCREASE_CART',
      payload: id,
    };
  };
  
  export const DECREASE = (id) => {
    return {
      type: 'DECREASE_CART',
      payload: id,
    };
  };
  
  export const DELETE = (id) => {
    return {
      type: 'DELETE_CART',
      payload: id,
    };
  };
  