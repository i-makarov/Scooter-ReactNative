import { useState, useEffect } from 'react';
import Animated from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';

export function useMarkerAnimation({ id, selectedMarker }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const isActive = id === selectedMarker ? 1 : 0;
    setActive(isActive);
  }, [id, selectedMarker]);

  const transition = useTiming(active, {
    duration: 200,
  });

  const scale = Animated.interpolateNode(transition, {
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  return scale;
}