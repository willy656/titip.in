import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  dividerColor: string;
  style?: ViewStyle;
};
export default function Divider(props: Props) {
  let { dividerColor, style } = props;
  return (
    <View
      style={[styles.container, style, { backgroundColor: dividerColor }]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    flex: 1,
  },
});
