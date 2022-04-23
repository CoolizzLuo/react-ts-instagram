import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGUser from 'components/IGUser';

import IGStory from './components/IGStory';
import IGPost from './components/IGPost';

import db from '../../db.json';

const IGPostList: React.FC = () => {
  const data = db.posts;

  return (
    <>
      {data?.map((item) => {
        const { id, location, account, avatar, photo, likes, description, hashTags, createTime } = item;
        return (
          <IGPost
            location={location}
            account={account}
            avatar={avatar}
            photo={photo}
            likes={likes}
            description={description}
            hashTags={hashTags}
            createTime={createTime}
            key={id}
          />
        );
      })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className='flex lg:justify-center'>
          <div className='w-full lg:w-[600px]'>
            <IGStory />
            <IGPostList />
          </div>
          <div className='hidden lg:block lg:w-[424px]'>
            right
            <IGUser avatar='/images/avatars/a2.png' account='user1' location='taipei' showFollow isFollowing />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
