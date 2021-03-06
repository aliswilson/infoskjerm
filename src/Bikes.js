import React, { useState, useEffect } from "react";
import createEnturService from '@entur/sdk'

const service = createEnturService({ clientName: 'wilson-infoskjerm' })

const Bikes = () => {

    const[bikeStations, setBikeStations] = useState([]);

    useEffect(() => {
        service.getBikeRentalStationsByPosition({latitude: 59.9204566, longitude: 10.7619009}, 
            230
            )
            .then((data) => setBikeStations(data));
    }, []);


    return ( <div className="bikeStations"> 
    <h3> Bysykkel </h3> 
    {bikeStations.map((stationData) => (
        <Station key={stationData.id} station = {stationData} />
    ))}
    </div>
    );
};

export default Bikes;

const Station = (props) => {

    const { station } = props;

    return <div className="station">
       {station.name} - {station.bikesAvailable} : {station.spacesAvailable}
    </div>
};