import styled from 'styled-components';

// const IGContainer = styled.div`
//   max-width: 1024px;
//   margin: 0 auto;
//   @media only screen and (max-width: 1024px) {
//     max-width: 100%;
//   }
// `;

const IGContainer: React.FC = ({ children }) => {
  return <div className='mx-auto max-w-full lg:max-w-5xl'>{children}</div>;
};

export default IGContainer;
