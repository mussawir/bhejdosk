import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Image} from "react-native";

const Search = () => {
const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        styles={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="email"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Search;