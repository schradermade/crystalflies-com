import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'community',
        subtitle: 'connect now',
        imageUrl: 'https://image.freepik.com/free-vector/business-people-organization-office-freelance-job-character_40876-1291.jpg',
        id: 1
      },
      {
        title: 'nutrition',
        subtitle: 'shop now',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60t4cDchU33vFZHz3OTeKyGNUKrwgs1rfVw&usqp=CAU',
        id: 2
      },
      {
        title: 'workouts',
        subtitle: 'move now',
        imageUrl: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Best+Apps+and+Websites/home+workout-carousel.jpg',
        id: 3
      },
      {
        title: 'travel',
        subtitle: 'go now',
        imageUrl: 'https://content.presspage.com/uploads/1899/1920_travelwarnings-covid19hazleton-2.jpg?10000',
        // size: 'large',
        id: 4
      }]
    }

  }

  render() {
    return (
      <div className='directory-menu'>
        {/* destructure values off of 'section' array */}
        {this.state.sections.map(({ title, subtitle, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size}/>
          ))} 
      </div>
    );
  }
}

export default Directory;