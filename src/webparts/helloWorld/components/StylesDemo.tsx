import * as React from 'react';
import { TypeStyleButton } from './TypeStyleButton/TypeStyleButton';

export class StylesDemo extends React.Component<{}, {}> {
  public render(): React.ReactElement {
    return (
      <div>
        <div><TypeStyleButton /></div>
      </div>
    );
  }
}
