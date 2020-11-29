import * as React from 'react';

import { Text, TextProps } from './Themed';

export function HeadingText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'sahitya', fontSize: 36 }]} />;
}
export function BodyText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'inter', fontSize: 24 }]} />;
}
