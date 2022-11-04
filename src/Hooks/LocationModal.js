import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
const LoactionModal = () => {
  // maps
  const [address, setAddress] = useState("Dhaka, Bangladesh");
  const DefaultLocation = { lat: 23.810331, lng: 90.412521 };
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [getLocation, setGetLocation] = useState("");

  console.log(getLocation,"rrr");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setDefaultLocation({ lat: latLng.lat, lng: latLng.lng });
        setAddress(address);
      })
      .catch((error) => console.error("Error", error));
  };

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${defaultLocation.lat},${defaultLocation.lng}&sensor=true&key=AIzaSyCfpeP-t1coXdE_R8PCOI8e38hoAMcTKr8`
  )
    .then((data) => data.json())
    .then((d) => setGetLocation(address));

  //end maps
  return (
    <div style={{ width: "180%" }}>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn-close text-end m-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h2 className="fw-bold fd-primary-text pt-3 pe-5">
                Choose Your Location
              </h2>
            </div>

            <div className="P-1 p-md-5 modal-body" style={{ height: "70vh" }}>
              <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {console.log(suggestions, "ffff")}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoactionModal;
