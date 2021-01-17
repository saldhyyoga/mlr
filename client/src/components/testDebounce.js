// import React, { useState, useEffect } from 'react';
// import useDebounce from './useDebounce';

// export default function TestDebounce() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);

//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   useEffect(() => {
//     if(debouncedSearchTerm){
//       setIsSearching(true);
//       SearchCharacters(debouncedSearchTerm).then(results => {
//         setIsSearching(false);
//         setResults(results);
//       });
//     }else{
//       setResults([]);
//     }
//   }, [debouncedSearchTerm])
//   return (
//     <div>
//       <input
//         placeholder="Search marvel comics"
//         onChange={e => setSearchTerm(e.target.value)}
//       />

//       {isSearching && <div>Searching</div>}

//       {results.map(result => (
//         <div key={result.id}>
//           <h4>{result.title}</h4>
//           <img
//             alt="test"
//             src={`${result.thumbnail.path}/portrait_incredible.${
//               result.thumbnail.extension
//             }`}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

// function SearchCharacters(search) {
//   const apiKey = 'f9dfb1e8d466d36c27850bedd2047687';
//   const queryString = `apikey=${apiKey}&titleStartsWith=${search}`;
//   return fetch(
//     `https://gateway.marvel.com/v1/public/comics?${queryString}`,
//     {
//       method: 'GET'
//     }
//   )
//     .then(r => r.json())
//     .then(r => r.data.results)
//     .catch(error => {
//       console.error(error);
//       return [];
//     });
// }


