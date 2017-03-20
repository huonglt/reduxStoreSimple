export const applyMiddleware = (...middleWares) => {
  if(!middleWares || middleWares.length == 0) {
    return null;
  }
  const reversedMiddleWares = middleWares.reverse();
  return (action, state) => {
    let newState = {...state};
    reversedMiddleWares.forEach(middleWare => {
      newState = middleWare(action, newState);
    });
    return newState;
  };
}
