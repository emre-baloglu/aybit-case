import * as actionTypes from "../actionTypes";

export const getCategoriesSuccess = (categories) =>{
    return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories}
}

export const changeCategory = (category) => {
  console.log(category)
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export const getCategories = () => {
  return function(dispatch) {
    let url = "https://localhost:7207/api/categories";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getCategoriesSuccess(result)));
  };
}