import { BottomSheetView } from "@gorhom/bottom-sheet";
import React, {useEffect} from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBooked, toogleActive } from "../../../store/actions/activate";
import { bookingPlace } from "../../../store/actions/booking";

export const BookingScreen = ({navigation, route}) => {
    const place = route.params;

    const dispatch = useDispatch()
    const setBooked = () => {
        dispatch(toogleActive(place.id))
        dispatch(bookingPlace(place))
        // TODO: jump to Profile screen
        //navigation.navigate("Stations")
    }

  

    useEffect(() => {
        navigation.setOptions({title: `Бронирование ${place.model}`});
      }, []);

    return(
        <BottomSheetView>
          <Button 
          title="Забронировать"
          onPress={setBooked}
          />
        </BottomSheetView>
    )
}