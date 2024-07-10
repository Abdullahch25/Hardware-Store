
import axios from "axios";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: "FETCH_DATA_REQUEST" });

  try {
    const response = await axios.get("http://localhost:8001/api/v1"); 
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
};
