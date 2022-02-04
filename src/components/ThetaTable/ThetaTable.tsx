import ThetaTableRow from '../ThetaTableRow/ThetaTableRow';

type ThetaTableDataRow = Array<string | number>;

export type ThetaTableProps = {
  /**
   * The labels to display on the header row for each column, use empty strings
   * for columns that have now label. If the array is empty, header row is not
   * shown.
   */
  headerLabels?: string[];

  /**
   * The data, can be either string or number. Data has to be in matrix format,
   * as in Arrays inside of an Array
   */
  data: Array<ThetaTableDataRow>;
};

function ThetaTable(props: ThetaTableProps) {
  function isNotEmpty(array?: any[]): boolean {
    if (array != null) {
      return array.length > 0;
    } else {
      return false;
    }
  }

  function getHeaderRow(headerLabels?: string[]) {
    if (isNotEmpty(props.headerLabels)) {
      return <ThetaTableRow data={headerLabels!} isHeader />;
    } else {
      return <></>;
    }
  }

  function getDataRow(data: Array<ThetaTableDataRow>) {
    if (data.length > 0) {
      return data.map((dataRow) => <ThetaTableRow data={dataRow} />);
    } else {
      return <></>;
    }
  }

  return (
    <div id="thetaTable">
      {getHeaderRow(props.headerLabels)}
      {getDataRow(props.data)}
    </div>
  );
}

export default ThetaTable;
