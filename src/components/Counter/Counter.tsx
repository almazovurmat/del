import React from 'react';
interface IProps {
    counter: number;
}

const Counter: React.FC <IProps> = ({counter}) => {
    return (
        <div className="counter">
            Tries: {counter}
        </div>
    );
};

export default Counter;