export const fetchData = () => async (dispatch) => {
  dispatch({ type: "FETCH_DATA_REQUEST" });

  try {
    const response = await fetch("http://localhost:3000/api/data");
    const data = await response.json();

    dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
};
