import React, { ReactNode } from 'react';
import {
  View,
  ViewStyle,
  StatusBar,
  StatusBarProps,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Constants from 'expo-constants';

type Props = {
  children: ReactNode;
  statusBarConfig?: StatusBarProps;
  style?: ViewStyle;
};

export default function SafeAreaView(props: Props) {
  let { children, style, statusBarConfig } = props;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={[{ paddingTop: Constants.statusBarHeight, flex: 1 }, style]}>
        <StatusBar {...statusBarConfig} />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}
