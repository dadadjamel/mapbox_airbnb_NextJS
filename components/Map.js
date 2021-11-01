import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import placesRes from '../res.json'
import { getCenter } from 'geolib';

const Map = () => {

    const coordinates = placesRes.map((ans)=>({
        longitude : ans.long,
        latitude : ans.lat
    }))

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        latitude: center.longitude,
        longitude: center.latitude,
        zoom: 8,
        width: "100%",
        height: "100%"
    });
    return (
        <ReactMapGL
            mapStyle='mapbox://styles/vorexg/cktojih4o1bid19nd0j2glzlc'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextviewport) => setViewport(nextviewport)}
        >
            <Marker longitude latitude offsetLeft offsetTop >
                <p>
                   dada 
                </p>

            </Marker>
        </ReactMapGL>
    )
}

export default Map