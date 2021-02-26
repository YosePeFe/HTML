import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
    };
  }
  Operacion = () => {
    let a1 = parseFloat(this.state.a);
    let b2 = parseFloat(this.state.b);
    let c3 = parseFloat(this.state.c);
    let total1 = parseFloat( (((b2)*(-1)) + Math.sqrt((Math.pow(b2,2))-(4*a1*c3)))/ (2*a1));
    let total2 = parseFloat( (((b2)*(-1)) - Math.sqrt((Math.pow(b2,2))-(4*a1*c3)))/ (2*a1));
    alert("x1: " + total1 + " x2: " + total2);
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ borderWidth: 1, margin: 0 }}
          placeholder="1"
          onChangeText={(a) => this.setState({ a })}
        />

        <TextInput
          style={{ borderWidth: 1, margin: 0 }}
          placeholder="2"
          onChangeText={(b) => this.setState({ b })}
        />

        <TextInput
          style={{ borderWidth: 1, margin: 0 }}
          placeholder="3"
          onChangeText={(c) => this.setState({ c })}
        />
        
        <Button title="Click Me!!!" onPress={this.Operacion} />
      </View>
    );
  }
}

/**
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
    };
  }
  Suma = () => {
    let n1 = parseInt(this.state.num1);
    let n2 = parseInt(this.state.num2);
    let total = parseInt(n1 + n2);
    alert(total);
  };
  render() {
    return (
      <View>
        <TextInput
          style={{ borderWidth: 1, margin: 0 }}
          placeholder="1"
          onChangeText={(num1) => this.setState({ num1 })}
        />

        <TextInput
          style={{ borderWidth: 1, margin: 0 }}
          placeholder="2"
          onChangeText={(num2) => this.setState({ num2 })}
        />

        <Button title="Click Me!!!" onPress={this.Suma} />
      </View>
    );
  }
}
*/


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/**
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView> 
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App; */


