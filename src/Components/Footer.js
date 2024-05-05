import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-center ' >
      <h1 className='text-white'>Designed And Developed</h1>
      <p className='text-white'>All right reserved by &copy: Technii</p>
    </div>
  )
}

export default Footer

// import React, { useState, useMemo } from 'react';

// function Footer() {
//   const [count, setCount] = useState(0);
//   const square = useMemo(() => {
//     return count * count;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Square: {square}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// }

// export default Footer