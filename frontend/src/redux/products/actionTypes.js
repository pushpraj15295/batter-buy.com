export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
export const SET_ALL_FILTERS = "SET_ALL_FILTERS";

export const setToast = (toast, title, status, duration = 2000, description) => {
    toast({
        title,
        description,
        status,
        duration,
        isClosable: true,
        position: 'top'
    });
};