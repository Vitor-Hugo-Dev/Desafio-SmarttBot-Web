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
  createRobot: async (robot) => {
    try {
      const { data } = await api.post('/robot', robot);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  },
  getOverviews: async () => {
    try {
      const { data } = await api.get('/robot/overview');
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  },
  getPapers: async () => {
    try {
      const { data } = await api.get('/robot/paper');
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  },
};

export default robotRequests;
