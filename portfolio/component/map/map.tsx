import styles from "./map.module.scss";
import {useEffect, useRef} from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? "";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      //style: "mapbox://styles/mapbox/light-v10",
      //style: "mapbox://styles/mapbox/outdoors-v12",
      style: "mapbox://styles/mapbox/dark-v11",
      //style: "mapbox://styles/mapbox/streets-v12",
      center: [2.294694, 48.858093],
      zoom: 13,
      attributionControl: false
    });
  }, []);

  return (
    <div className={styles.mapContainer} ref={mapContainer} />
  );
};
export default Map;