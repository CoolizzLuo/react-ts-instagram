import IGUser from 'components/IGUser';

const IGProfile: React.FC = () => {
  const friends = [
    {
      id: 1,
      location: 'Singapore',
      account: 'max_999',
      isFollowing: true,
      avatar: '/images/avatars/a1.png',
    },
    {
      id: 2,
      location: 'Singapore',
      account: 'fm_999',
      isFollowing: true,
      avatar: '/images/avatars/a2.png',
    },
    {
      id: 3,
      location: 'Singapore',
      account: 'joanne_999',
      isFollowing: true,
      avatar: '/images/avatars/a3.png',
    },
    {
      id: 4,
      location: 'Singapore',
      account: 'focus_999',
      isFollowing: true,
      avatar: '/images/avatars/a4.png',
    },
    {
      id: 5,
      location: 'Singapore',
      account: 'alvin_999',
      isFollowing: true,
      avatar: '/images/avatars/a5.png',
    },
    {
      id: 6,
      location: 'Singapore',
      account: 'grace_999',
      isFollowing: true,
      avatar: '/images/avatars/a6.png',
    },
    {
      id: 7,
      location: 'Singapore',
      account: 'rance_999',
      isFollowing: true,
      avatar: '/images/avatars/a7.png',
    },
    {
      id: 8,
      location: 'Singapore',
      account: 'louis_999',
      isFollowing: true,
      avatar: '/images/avatars/a8.png',
    },
    {
      id: 9,
      location: 'Singapore',
      account: 'bruce_999',
      isFollowing: true,
      avatar: '/images/avatars/a9.png',
    },
    {
      id: 10,
      location: 'Singapore',
      account: 'gogo_999',
      isFollowing: true,
      avatar: '/images/avatars/a10.png',
    },
  ];
  return (
    <div className='mt-8 ml-8 shadow-lg box-border p-2'>
      <IGUser account='bruce_fe' location='taipei' avatar='/images/avatar.png' size='medium' />
      <p className='font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm'>You are following</p>
      {friends.map((item) => {
        const { id, account, avatar, isFollowing, location } = item;
        return (
          <div className='-mt-3' key={id}>
            <IGUser id={id} account={account} avatar={avatar} location={location} isFollowing={isFollowing} showFollow />
          </div>
        );
      })}
    </div>
  );
};

export default IGProfile;
