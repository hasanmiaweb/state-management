import React from 'react';

const Header = (props) => {
  const {count, setCount} = props;
    return (
        <div>
            <button onClick={() => setCount(count + 1 )}>Add Count</button>
        </div>
    );
};

export default Header;