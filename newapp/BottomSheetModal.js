import React from "react";

import { Modal ,TouchableOpacity ,View, Text ,StyleSheet} from "react-native";
// import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";


const BottomSheetModal = () => {
  return (
    // <BottomSheetModal >
    //   <BottomSheetScrollView>
    <View style={styles.container}>
      <TouchableOpacity style={styles.btncontainer}>
        <Text style={styles.btn}>+</Text>
      </TouchableOpacity>

      <Modal style={styles.modal} isVisible={true}>
        <View
          style={styles.mvw}
        >
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
    //   </BottomSheetScrollView>
    // </BottomSheetModal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btncontainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
 btn: {
    fontSize: 35,
    fontWeight: "700",
    backgroundColor: "white",
    color: "#000",
  },
  modal: {
    width: "100%", marginleft: 0
  },
  mvw: {
    bottom: 0,
            position: "absolute",
            height: 200,
            backgroundColor: "white",
            width: "100%",
  },
  
});

export default BottomSheetModal;
