import classes from './ThetaTableColumn.module.css';

export type ThetaTableColumnProps = {
  /**
   * The value to display in this column
   */
  value: string | number;
};

function ThetaTableColumn(props: ThetaTableColumnProps) {
  return <div className={classes.col}>{props.value}</div>;
}

export default ThetaTableColumn;
