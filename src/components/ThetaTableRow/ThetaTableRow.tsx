import ThetaTableColumn from '../ThetaTableColumn/ThetaTableColumn';
import classes from './ThetaTableRow.module.css';

export type ThetaTableRowProps = {
  /**
   * The data to display on this row. Can be either strings or numbers,
   * header labels or values.
   */
  data: Array<string | number>;
  isHeader?: boolean;
};

function ThetaTableRow(props: ThetaTableRowProps) {
  return (
    <div className={props.isHeader ? classes['row--header'] : classes.row}>
      {props.data.map((datum, i) => (
        <ThetaTableColumn key={i} value={datum} />
      ))}
    </div>
  );
}

export default ThetaTableRow;
