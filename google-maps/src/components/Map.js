import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

const google = window.google;

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            latitud:14.58,
            longitud:-90.55,
            markers: this.props.markers,
            interval: '',
            actualPosition: 0,
            currentLat: this.props.centerMapCoordinates[0],
            currentLng: this.props.centerMapCoordinates[1],
            autoPlay: true                   
        }
        this.timer = this.timer.bind(this);
        this.onPlay = this.onPlay.bind(this)
        this.onStop = this.onStop.bind(this)
    }

    componentDidMount()
    {
    //   var interval = setInterval(this.timer,3000)
    //   this.setState({interval: interval})
    }
    componentWillMount()
    {
        clearInterval(this.state.interval)
    }
    timer()
    {
        const {markers, actualPosition} = this.state;
        this.setState({
            actualPosition: actualPosition + 1 < markers.length ? actualPosition + 1 : 0,
            currentLat: markers[actualPosition].lat,
            currentLng: markers[actualPosition].lng
        })
    }

    onPlay()
    {
        this.setState({autoPlay: true})
    }

    onStop()
    {
        this.setState({autoPlay: false})
    }

    onNext()
    {
        const {markers, actualPosition} = this.state;
        this.setState({
            actualPosition: actualPosition + 1 < markers.length ? actualPosition + 1 : 0,
            currentLat: markers[actualPosition].lat,
            currentLng: markers[actualPosition].lng
        })
    }

    onPrevious()
    {
      let newPosition;
      const {markers, actualPosition} = this.state;

      if(actualPosition - 1 < markers.length &&
        actualPosition - 1 > 0)   
        {
            newPosition = actualPosition -1;
        }
        else
        {
            newPosition = 0;
        }
        
        this.setState({
            actualPosition: newPosition,
            currentLat: this.state.markers[this.state.actualPosition].lat,
            currentLng: this.state.markers[this.state.actualPosition].lng
        })
    }
  

    render() { 
        
        const { markers, currentLat,currentLng ,autoPlay} = this.state;
        const {centerMapCoordinates} = this.props
        let dynamicMarkers;
        if(markers)
        {
            dynamicMarkers = markers.map((value,index) =>
            {
                return(
                    <Marker
                    key={index}
                    position={{ lat: value.lat, lng: value.lng}}
                    defaultTitle={value.name}
                    icon={value.icon}
                    />
                )
            })
        }
        const MyMapComponent = withGoogleMap((props) => 
            <GoogleMap
            defaultZoom={14}            
            defaultCenter={autoPlay ? { lat: this.state.currentLat, lng:this.state.currentLng } : 
                {lat: centerMapCoordinates[0],lng: centerMapCoordinates[1]}    
            }
            defaultTilte = "Mapa"
          >     

          {dynamicMarkers}       
          </GoogleMap>
        )

        return ( 
            <div>
            <MyMapComponent              
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `70vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}  
            />
            </div>
         );
    }
}
 
export default Map;