export const getUserDetails = () => dispatch =>
fetch('account/userDetails', {
  method: 'post',
}).then(response =>
  response.json().then((json) => {
    dispatch({
      type: 'GET_USER_DETAILS',
      ...json,
    });
  }),
);