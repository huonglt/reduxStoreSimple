/*
 * args is an array of maximum size of 1
 * determine the initialState and middleWare parameter
 */
export const splitArgs = (arr) => {
  if(arr.length > 0) {
    if(typeof(arr[0]) === 'object') {
      return { initialState: arr[0], middleWare: null};
    } else if(typeof(arr[0] === 'function')) {
      return { initialState: null, middleWare: arr[0]};
    } else if(arr[1] && typeof(arr[1]) === 'function') {
      return { initialState: arr[0], middleWare: arr[1]};
    }
  }
  return { initialState: null, middleWare: null};
}
