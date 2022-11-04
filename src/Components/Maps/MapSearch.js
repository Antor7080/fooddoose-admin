// import React from 'react';

// import useAuth from '../../Hooks/useAuth';

// const MapSearch = () => {
//     const { setLocation, address, setAddress , setGetLocation, setDefaultLocation } = useAuth()

//     const handleChange = (address) => {
//         setAddress(address);
//     };
//     const handleSelect = (address) => {
//         geocodeByAddress(address)
//             .then((results) => getLatLng(results[0]))
//             .then((latLng) => {

//                 setDefaultLocation({ lat: latLng.lat, lng: latLng.lng });
//                 setLocation({ lat: latLng.lat, lng: latLng.lng });
//                 setAddress(address);
//                 setGetLocation(address);
//             })
//             .catch((error) => console.error("Error", error));
//     };

//     return (
//         <div>
//             <div>
//                 <PlacesAutocomplete
//                     value={address}
//                     onChange={handleChange}
//                     onSelect={handleSelect}
//                 >
//                     {({
//                         getInputProps,
//                         suggestions,
//                         getSuggestionItemProps,
//                         loading,
//                     }) => (
//                         <div>
//                             <input
//                                 {...getInputProps({
//                                     placeholder: "Search Places ...",
//                                     className: "location-search-input",
//                                 })}
//                             />
//                             <div className="autocomplete-dropdown-container">
//                                 {loading && <div>Loading...</div>}
//                                 {suggestions.map((suggestion) => {
//                                     const className = suggestion.active
//                                         ? "suggestion-item--active"
//                                         : "suggestion-item";
//                                     // inline style for demonstration purpose
//                                     const style = suggestion.active
//                                         ? {
//                                             backgroundColor: "purple",
//                                             color: "#fff",
//                                             cursor: "pointer",
//                                         }
//                                         : {
//                                             backgroundColor: "#ffffff",
//                                             cursor: "pointer",
//                                         };
//                                     return (
//                                         <div
//                                             {...getSuggestionItemProps(suggestion, {
//                                                 className,
//                                                 style,
//                                             })}
//                                         >
//                                             <span className='p-5 m-2'> {suggestions.indexOf(suggestion) + 1}</span>
//                                             <span>{" "}</span>
//                                             <span>{" "} {suggestion.description}</span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     )}

//                 </PlacesAutocomplete>
//             </div>
//         </div>
//     );
// };

// export default MapSearch;
import React from 'react';

const MapSearch = () => {
    return (
        <div>

        </div>
    );
};

export default MapSearch;