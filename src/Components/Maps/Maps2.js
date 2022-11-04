import { GoogleMap, LoadScript } from "@react-google-maps/api";
import useAuth from '../../Hooks/useAuth';
import { useEffect } from 'react';
import axios from 'axios';
/*global google*/
const Maps2 = () => {

    const { defaultLocation, setDefaultLocation, setAddress } = useAuth()
    const center = defaultLocation
    const containerStyle = {
        width: '95vw',
        height: "70vh",
    };
    const onMapLoad = async (map) => {
        let marker = new google.maps.Marker({
            position: center,
            map: map,
            draggable: true,
        })
        marker.addListener('dragend', function (e) {
            const latlan = this.getPosition().toJSON()
            setDefaultLocation(latlan)
        })
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (defaultLocation.lng) {
                onMapLoad()
                axios.get(`http://localhost:5000/3rd-party/reverse-location?lng=${defaultLocation.lng}&lat=${defaultLocation.lat}`)
                    .then(res => {
                        setAddress(res.data.address);
                    })
            }
        }, 3000)
        return () => clearTimeout(delayDebounceFn)
    }, [defaultLocation.lat, defaultLocation.lng])
    if (!center) {
        return <h1>Loading...</h1>
    }
    return (
        <div>

            <div style={{ width: "100px", height: "100px" }} onLoad={onMapLoad} onClick={onMapLoad}>
                <LoadScript
                    googleMapsApiKey="AIzaSyCfpeP-t1coXdE_R8PCOI8e38hoAMcTKr8"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        onUnmount={onMapLoad}
                        onLoad={onMapLoad}
                        options={{
                            draggable: true,
                            scrollwheel: true,
                            keyboardShortcuts: false,
                            mapTypeControl: false,
                            fullscreenControl: true,
                            zoomControl: true,
                            streetViewControl: false,
                            zoom: 17
                        }}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        {/* <Marker
                            options={{ draggable: true, }}
                            onLoad={onMapLoad}
                            position={center}
                        /> */}
                    </GoogleMap>
                </LoadScript>

            </div>
        </div>
    );
};

export default Maps2;