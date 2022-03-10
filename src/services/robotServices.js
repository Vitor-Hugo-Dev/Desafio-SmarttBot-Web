import api from './api';

const robotRequests = {
  getRobotById: async (id) => {
    try {
      const { data } = await api.get(`/robot/${id}`);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  },
};

export default robotRequests;
