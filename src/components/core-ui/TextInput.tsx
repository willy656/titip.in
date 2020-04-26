import React, { ComponentProps, useState, ReactNode } from 'react';
import {
  TextInput as RawTextInput,
  StyleSheet,
  View,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = ComponentProps<typeof RawTextInput> & {
  underlineColor?: string;
  leftIcon?: () => ReactNode;
  label?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

export default function TextInput(props: Props) {
  let [showPassword, setShowPassword] = useState(false);

  let {
    containerStyle,
    underlineColor,
    leftIcon,
    label,
    labelStyle,
    style,
    textContentType,
  } = props;

  let toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let eyeIcon = showPassword ? 'eye-outline' : 'eye-off-outline';
  return (
    <View
      style={[
        styles.container,
        { borderBottomColor: underlineColor ? underlineColor : 'black' },
        containerStyle,
      ]}
    >
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <View style={{ flexDirection: 'row', width: '100%' }}>
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon()}</View>}
        <RawTextInput
          {...props}
          style={[styles.textInputContainer, style]}
          secureTextEntry={textContentType === 'password' && !showPassword}
        />
        {textContentType === 'password' && (
          <TouchableOpacity
            style={styles.rightIconContainer}
            onPress={toggleShowPassword}
          >
            <MaterialCommunityIcons name={eyeIcon} size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 12,
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rightIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  textInputContainer: {
    flex: 1,
  },
});
