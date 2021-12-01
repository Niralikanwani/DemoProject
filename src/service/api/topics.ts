import axios from 'axios';


class TopicsService {

  loadTopicData = async (): Promise<any> => {
    try {
      const response = await axios(`http://localhost:3004/api/v1/topics`);      
      
      return await response.data;
    } catch (e) {
      return [];
    }
  }
}

export const topicsService = new TopicsService();
