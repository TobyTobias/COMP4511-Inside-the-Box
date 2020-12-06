import * as React from 'react';
import { View, ViewProps, ScrollView } from '../Themed';

export function PrimaryView(props: ViewProps) {
  return <View {...props} style={[props.style]} />;
}
export function SecondaryView(props: ViewProps) {
  return <View {...props} style={[props.style]} />;
}
export function StyledScrollView(props: ViewProps) {
  return <ScrollView {...props} style={[props.style]} />;
}
