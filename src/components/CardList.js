import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {

    const CardComponent = robots.map((user,index) => {
        return (<Card 
                key={index} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email}
                />);
    });
    return (
        <div>
        { CardComponent }
        </div>
    )
}

export default CardList;