import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'display': 'flex',
    'justifyContent': 'center',
    'fontFamily': 'Arial, Helvetica, sans-serif'
  },
  'body': {
    'display': 'flex',
    'justifyContent': 'center',
    'fontFamily': 'Arial, Helvetica, sans-serif'
  },
  'section#hello-world': {
    'marginTop': [{ 'unit': '%V', 'value': 0.3 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 36 }],
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column',
    'width': [{ 'unit': 'px', 'value': 800 }],
    'borderRadius': '25%'
  }
});
