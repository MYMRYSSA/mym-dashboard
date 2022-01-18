import axios from 'axios';

export const getAccount = async () => {
  if (!localStorage.getItem('access_token')) {
    return {
      success: false,
      error: null,
      user: null
    };
  }
  try {
    const response = await axios.get(process.env.API_URL + '/v1/account', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    if (response?.status === 200 && response?.data?.user) {
      return {
        success: true,
        error: null,
        user: response.data.user
      };
    } else {
      localStorage.removeItem('access_token');
      return {
        success: false,
        error: null,
        user: null
      };
    }
  } catch (error) {
    localStorage.removeItem('access_token');
    return {
      success: false,
      error: error.message,
      user: null
    };
  }
};
