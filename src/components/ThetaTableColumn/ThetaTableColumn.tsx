import classes from './ThetaTableColumn.module.css';

export type ThetaTableColumnProps = {
  /**
   * The value to display in this column
   */
  value: string | number;
};

function ThetaTableColumn(props: ThetaTableColumnProps) {
  function getValueIsString(value: string | number) {
    return typeof value === 'string';
  }

  function getValueIsNumber(value: string | number) {
    return typeof value === 'number';
  }

  return <div className={classes.col}>{props.value}</div>;
}

export default ThetaTableColumn;
