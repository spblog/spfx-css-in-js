import * as React from 'react';

import { styles } from "./TypeStyleButton.styles";

export const TypeStyleButton: React.FC = () => {
  return (
    <div className={styles.root}>
      <button className={styles.myButton}>Hello from a TypeStyle button!</button>
    </div>
  );
};
