import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayPage = () => {
   const [statuses, setStatuses] = useState([]);

   useEffect(() => {
       axios.get('http://localhost:5000/api/state') // .env support still missing, will be added later -> for now add the fixed URL while developing
           .then((response) => {
               setStatuses(response.data);
           })
           .catch((error) => {
               console.error(error);
           });
   }, []);

   return (
       <div>
           {statuses.map((status, index) => (
               <div key={index}>
                  <h2>{status.emoji}</h2>
                  <p>{status.status}</p>
               </div>
           ))}
       </div>
   );
};

export default DisplayPage;
