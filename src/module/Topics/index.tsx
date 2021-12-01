import React, { useEffect } from 'react';
import { topicsService } from '../../service/api/topics';
import TopicList from './components/TopicList';

const Topics: any = () => {
  const [topic, setTopic] = React.useState([]);

  const lodTopicData = async () => {
    const res = await topicsService.loadTopicData();
    
    setTopic(res);    
  };

  useEffect(() => {
    lodTopicData();
  }, []);

  return (
    <div>
      <h1>Topic List</h1>
      <TopicList topic={topic}/>
    </div>
  )
}

export default Topics;