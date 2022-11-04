// import React, { useState } from 'react';
// import { useAutocomplete, useDebounce } from 'use-barikoi'
// const Map3 = () => {
//     const apiKey = 'NDA2MTo5UEZFR01NMzRK';
//     const [search, setSearch] = useState('');
//     const [query, setQuery] = useState('');
//     const value = useDebounce(query, 1000);
//     const [result, isLoading] = useAutocomplete(apiKey, value);
//     return (
//         <div>

//             <section className="bk-section">
//                 <form onSubmit={(e) => e.preventDefault()}>
//                     <input
//                         name="query"
//                         value={search}
//                         onChange={(e) => {
//                             setSearch(e.target.value);
//                             setQuery(e.target.value);
//                         }}
//                     />
//                 </form>
//                 {isLoading && <div className="loading"></div>}
//                 {result?.map((result) => (
//                     <div key={result.id}>
//                         <div
//                             onClick={() => {
//                                 setSearch(result.address);
//                                 console.log(result);
//                             }}
//                         >
//                             {result.address}
//                         </div>
//                     </div>
//                 ))}
//             </section>
//         </div>
//     );
// };

// export default Map3;

import React from 'react';

const Map3 = () => {
    return (
        <div>

        </div>
    );
};

export default Map3;