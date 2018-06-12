import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'background': '#f2f2f3',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'profile-box': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': 2 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'textAlign': 'center',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2),' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }]
  },
  'profile-box:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.18)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.18),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.36)' }]
  },
  'profile-box:last-child': {
    'backgroundColor': '#4caf50'
  }
});
