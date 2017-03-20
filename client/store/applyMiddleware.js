export const applyMiddleware = (...middleWares) => {
  if(!middleWares || middleWares.length == 0) {
    return null;
  }
  const reversedMiddleWares = middleWares.reverse();
  return (action, state) => {
    let newState = reversedMiddleWares.reduce((newState, middleWare) => middleWare(action, newState), {...state});
    return newState;
  };
}
