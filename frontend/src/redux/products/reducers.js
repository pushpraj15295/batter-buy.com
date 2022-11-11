import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  SET_ALL_FILTERS,
} from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  products: [],
  backupData: [],
  filters: {
    Gender: { Men: false, Women: false, Kids: false },
    Category: { Cloths: false, Shoes: false },
    Size: { Small: false, Medium: false, Large: false },
    Colour: {
      Black: false,
      White: false,
      Green: false,
      Red: false,
      Mix: false,
    },
  },
};

const prodReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING:
      return { ...state, isLoading: true };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
        backupData: payload,
      };
    case GET_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    case SET_ALL_FILTERS:
      let usingFunc = checkSize([1], [1]);
      console.log("selectSize:", usingFunc);
      let { Gender, Category, Colour, Size } = convertObject(payload);
      let variableMapped = { Gender, Category, Colour, Size };
      let functionMapped = {
        Gender: "Gender.includes(e.gender)",
        Category: "Category.includes(e.category)",
        Colour: "Colour.includes(e.color)",
        Size: "checkSize(Size, e.size)",
      };
      return {
        ...state,
        filters: payload,
        products: state.backupData.filter((e) => {
          let equation = ["Gender", "Category", "Colour", "Size"].filter(
            (e) => variableMapped[e].length > 0
          );
          equation = equation.map((e) => functionMapped[e]).join(" && ");
          return eval(equation);
        }),
      };
    default:
      return state;
  }
};

function checkSize(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        return true;
      }
    }
  }
  return false;
}

const convertObject = (obj) => {
  let ans = {};
  for (let k1 in obj) {
    ans[k1] = [];
    for (let k2 in obj[k1]) {
      obj[k1][k2] && ans[k1].push(k2);
    }
  }
  return ans;
};

export const getGender = (gender) => {
  return !(gender === "men" || gender === "women" || gender === "kids");
};

export default prodReducer;
