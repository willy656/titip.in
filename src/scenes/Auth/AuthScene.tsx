import React, { useState } from 'react'; 
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TabView } from '../../components';
import { SafeAreaView, TextInput, Divider } from '../../components/core-ui/';
import { Tab } from '../../components/TabView';

import { loginBG, logo } from '../../../assets';

type SignInState = {
  emailAddress: string;
  password: string;
  rememberMe: boolean;
};
const emptySignInState: SignInState = {
  emailAddress: '',
  password: '',
  rememberMe: false,
};

export default function LoginScene() {
  let [signInState, setSignInState] = useState(emptySignInState);

  const renderSignIn = (
    <View>
      <TextInput
        underlineColor="white"
        style={styles.textInput}
        autoCorrect={false}
        label="Email address"
        labelStyle={styles.textInputLabel}
        leftIcon={() => (
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="white"
          />
        )}
        placeholder="wawan@mail.com"
        placeholderTextColor="#838383"
        containerStyle={styles.textInputContainer}
        autoCapitalize="none"
      />

      <TextInput
        underlineColor="white"
        style={styles.textInput}
        autoCorrect={false}
        label="Password"
        labelStyle={styles.textInputLabel}
        leftIcon={() => (
          <MaterialCommunityIcons name="lock-outline" size={24} color="white" />
        )}
        containerStyle={styles.textInputContainer}
        autoCapitalize="none"
        secureTextEntry={true}
        textContentType="password"
      />

      <TouchableOpacity>
        <Text style={[styles.text, { fontSize: 16 }]}>Forgot password?</Text>
      </TouchableOpacity>

      <Button
        title="SIGN IN"
        containerStyle={styles.signInButtonContainer}
        buttonStyle={styles.signInButton}
        titleStyle={styles.signInText}
      />

      <View style={styles.dividerContainer}>
        <Divider dividerColor="white" />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            marginHorizontal: 12,
          }}
        >
          or
        </Text>
        <Divider dividerColor="white" />
      </View>

      <Text style={styles.text}>Sign in with</Text>

      <View style={styles.socialIconsContainer}>
        <SocialIcon raised={true} type="facebook" />
        <SocialIcon raised={true} type="twitter" />
        <SocialIcon raised={true} type="google-plus-official" />
      </View>
    </View>
  );
  const renderSignUp = (
    <Text style={styles.text}>Marc belum buat yang ini</Text>
  );

  const authTabs: Array<Tab> = [
    {
      name: 'Sign in',
      renderContent: renderSignIn,
    },
    {
      name: 'Sign up',
      renderContent: renderSignUp,
    },
  ];

  return (
    <ImageBackground source={loginBG} style={styles.backgroundImage}>
      <SafeAreaView
        statusBarConfig={{ barStyle: 'light-content' }}
        style={styles.container}
      >
        <Image source={logo} style={styles.icon} />

        <TabView tabs={authTabs} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
  },
  icon: {
    width: 88,
    height: 88,
    marginTop: 20,
    marginVertical: 40,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 48,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  textInputLabel: {
    color: 'white',
  },
  textInput: {
    fontSize: 18,
    color: 'white',
  },
  signInButtonContainer: {
    marginTop: 18,
    marginBottom: 20,
  },
  signInButton: {
    paddingVertical: 16,
    backgroundColor: 'rgba(66,69,99, 0.9)',
    borderRadius: 8,
  },
  signInText: {
    fontWeight: '700',
  },
  dividerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  socialIconsContainer: {
    flexDirection: 'row',
  },
});
