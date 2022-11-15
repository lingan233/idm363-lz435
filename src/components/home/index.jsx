import { useEffect, useState, createContext, useContext } from 'react'
import { Context } from '../../App'


function Home(){
    const value = useContext(Context);
    return (
        <>
        <div className="text-start">
            <img src="https://via.placeholder.com/200" alt="" />
            <p className="m-0">Item Title</p>
            <h4>$6.99</h4>
        </div>
        {value}
    </>
    );
}
// const Home = () => (
//     <>
//         <div className="text-start">
//             <img src="https://via.placeholder.com/200" alt="" />
//             <p className="m-0">Item Title</p>
//             <h4>$6.99</h4>
//         </div>
//         {value}
//     </>
// )

export default Home;