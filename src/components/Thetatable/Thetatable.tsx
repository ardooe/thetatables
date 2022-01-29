import React from 'react';

export type ThetatableProps = {
  /**
   * The labels that are shown on the first row. If empty, no header row is shown.
   */
  headerLabels?: string[];
};

const ThetaTable = (props: ThetatableProps) => {
  function isNotEmpty(array?: any[]): boolean {
    if (array != null) {
      return array.length > 0;
    } else {
      return false;
    }
  }

  function getHeaderRows(headerLabels?: string[]) {
    if (isNotEmpty(props.headerLabels)) {
      return (
        <div>
          {headerLabels!.map((headerLabel) => (
            <div>{headerLabel}</div>
          ))}
        </div>
      );
    } else {
      return <></>;
    }
  }

  return <div id="thetaTable">{getHeaderRows(props.headerLabels)}</div>;
};

export default ThetaTable;
