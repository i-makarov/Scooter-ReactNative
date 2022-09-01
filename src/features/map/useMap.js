import {useState, useRef, useCallback} from 'react';

const DEVIATION = 0.0002;

export function useMap() {
  const mapRef = useRef(null);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleNavigateToPoint = useCallback(
    (id, lat, long) => {
      if (mapRef) {
        mapRef.current.animateCamera(
          {
            center: {
              latitude: lat - DEVIATION,
              longitude: long,
            },
            zoom: 17.2,
          },
          {duration: 500},
        );
      }
      setSelectedMarker(id);
    },
    [mapRef, setSelectedMarker],
  );

  const handelResetInitialPosition = useCallback(
    (id, lat, long) => {
      if (mapRef) {
        mapRef.current.animateCamera(
          {
            center: {
              latitude: lat,
              longitude: long,
            },
            zoom: 17.2,
          },
          {duration: 500},
        );
        setSelectedMarker(id);
      }
    },
    [mapRef, setSelectedMarker],
  );

  return {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  };
}
