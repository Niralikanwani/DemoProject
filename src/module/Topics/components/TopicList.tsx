import FixedSizeList from './List/index';

const TopicList: any = (props: any) => {
  const {topic} = props;

  const Row = ({ index, style }: any) => (
   <div>
    <div key={index} style={style} className="post">
        <ul>
            <li>{topic[index].id} - 
            {topic[index].topicName} - 
            {topic[index].userName} - 
            {topic[index].email} - 
            {topic[index].phone} - 
            {topic[index].city}</li>
        </ul>
    </div>
   </div>
  )
  return (
    <FixedSizeList
      width={1750}
      height={700}
      itemCount={topic.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}
export default TopicList;