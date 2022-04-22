import IGContainer from 'components/IGContainer';
import IGHeader from 'components/IGHeader';

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
          <div className='hidden lg:block lg:w-[424px]'>right</div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
