
import Map from "mapmyindia-react";
import { useEffect , useState} from "react";
import axios from "axios"

const url = "https://apis.mapmyindia.com/advancedmaps/v1/6ed98b0ea07575bc09c5780d5f5d1ce7/distance_matrix/driving/77.983936,28.255904;77.05993,28.487555;17ZUL7?"

const MapComponent= () => {
    
    useEffect(()=>{
       const fetchData = async () => {
        const res = await axios.get(url)
        console.log(res)
        }

        fetchData()
      // console.log(window)
      // var map = new window.MapmyIndia.Map('map', {center: [28.09, 78.3], zoom: 5, search: false})
          
//         var direction_option={
//             map:map,
//             end:{label:'India Gate, Delhi',geoposition:"1T182A"},
// callback:function(data){console.log(data);}
//         }
//         var direction_plugin=window.MapmyIndia.direction(direction_option);  

    })

    return (
     
        // <Map
        //   markers={[
        //     {
        //       position: [18.5314, 73.845],
        //       draggable: true,
        //       title: "Marker title",
        //       onClick: e => {
        //         console.log("clicked ");
        //       },
        //       onDragend: e => {
        //         console.log("dragged");
        //       }
        //     }
        //   ]}
        // />

        <>
          <div id="map">
          </div>
        <div id="direction"></div>
        </>
      );
}

export default MapComponent;