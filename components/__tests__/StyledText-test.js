import * as React from 'react';
import renderer from 'react-test-renderer';

import { BodyText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<BodyText>Snapshot test!</BodyText>).toJSON();

  expect(tree).toMatchSnapshot();
});
