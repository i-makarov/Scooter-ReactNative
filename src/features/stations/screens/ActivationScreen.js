import { BottomSheetView } from "@gorhom/bottom-sheet";
import React, {useEffect} from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { activatePlace, addActive, toogleActive } from "../../../store/actions/activate";

export const ActivationScreen = ({navigation, route}) => {
    const place = route.params;
   
    const dispatch = useDispatch()
    const user = useSelector(state => state.actions.activePlaces)

    useEffect(() => {
        navigation.setOptions({title: `Активация ${place.model}`});
      }, []);

    const setActive = () => {
        dispatch(toogleActive(place.id))
        dispatch(activatePlace(place))

        // TODO: Go to ProfileScreen
        //navigation.navigate("Stations")
    }

    const test1 = () => {
     

      console.log(user);
      
  }
    return(
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
          <Button 
          title="Начать зарядку!"
          onPress={setActive}
          />
          <Button 
          title="test"
          onPress={test1}
          />
        </BottomSheetView>
    )
}