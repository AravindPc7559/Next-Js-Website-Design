import React from 'react'
import Discussion from '../Common/Discussion/Discussion'

const Discussions = () => {
  const DiscussionData = [
    {
      img:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Laza Bogdan',
      heading: 'Using Angular HttpClientModule instead of HttpModule',
      btn: 'Angular Fundamentals',
    },
    {
      img:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Adam Curtis',
      heading:
        'Why iam getting an error while iam trying to install angular/htpp@2.4.2',
    },
    {
        img:
          'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Emile Howard',
        heading: 'Using Angular HttpClientModule instead of HttpModule',
      },
      {
        img:
          'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Json Klien',
        heading:
          'Why iam getting an error while iam trying to install angular/htpp@2.4.2',
      },
  ]
  return (
    <div className="py-20">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold">Discussions</h1>
      </div>
      <Discussion data={DiscussionData} limit={4} />
    </div>
  )
}

export default Discussions
