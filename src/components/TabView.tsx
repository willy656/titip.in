import React, { ReactNode, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

export type Tab = {
  name: string;
  renderContent: ReactNode;
};

type Props = {
  tabs: Array<Tab>;
};

export default function TabView(props: Props) {
  let [selectedTabIndex, setSelectedTabIndex] = useState(0);

  let { tabs } = props;

  let onChangeTab = (newIndex: number) => {
    setSelectedTabIndex(newIndex);
  };

  let tabContent = tabs[selectedTabIndex].renderContent;
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.switcherContainer}
        horizontal={true}
      >
        {tabs.map((tab, i) => {
          let { name } = tab;

          return i === selectedTabIndex ? (
            <TouchableOpacity
              style={styles.singleSwitcherContainerSelected}
              onPress={() => onChangeTab(i)}
            >
              <Text style={styles.switcherTextSelected}>{name}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.singleSwitcherContainer}
              onPress={() => onChangeTab(i)}
            >
              <Text style={styles.switcherText}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.contentContainer}>{tabContent}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 36,
  },
  switcherContainer: {
    flexDirection: 'row',
  },
  singleSwitcherContainerSelected: {
    marginRight: 30,
    borderBottomWidth: 3,
    borderBottomColor: '#2B80FF',
  },
  singleSwitcherContainer: {
    marginRight: 30,
  },
  switcherTextSelected: {
    color: '#2B80FF',
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '700',
  },
  switcherText: {
    color: '#838383',
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '700',
  },
});
