import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';
import IGUser from 'components/IGUser';

import IGStory from './components/IGStory';

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className='flex lg:justify-center'>
          <div className='w-full lg:w-[600px]'>
            <IGStory />
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
