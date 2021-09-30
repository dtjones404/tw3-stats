import { useMemo, useState } from 'react';
import { useTable, useBlockLayout, useColumnOrder } from 'react-table';
import { COLUMNS } from './columns';
import { useSticky } from 'react-table-sticky';
import { Styles } from './tableStyles';

const COLOR_KEY = {
  'rgb(255, 113, 103)': 0.43,
  'rgb(255, 160, 140)': 0.455,
  'rgb(255, 176, 155)': 0.48,
  'rgb(252, 245, 195)': 0.52,
  'rgb(222, 243, 145)': 0.545,
  'rgb(205, 240, 131)': 0.57,
  'rgb(160, 230, 102)': 1,
};

const getColorClass = (val) => {
  for (const [k, v] of Object.entries(COLOR_KEY)) {
    if (val <= v) return k;
  }
};

const getCellProps = (cellInfo) => ({
  style: {
    backgroundColor: getColorClass(cellInfo.value),
  },
});

export const FactionTable = ({ factions }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => factions, []);

  const [sortedBy, setSortedBy] = useState({ name: null, order: [] });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable(
    {
      columns: columns,
      data: data,
    },
    useBlockLayout,
    useSticky,
    useColumnOrder
  );

  const changeOrder = (values) => {
    console.log(values);
    if (values.name === sortedBy.name) {
      const reversed = sortedBy.order.slice().reverse();
      setSortedBy({ order: reversed });
      setColumnOrder(['name', ...reversed]);
    } else {
      const matchupData = Object.entries(values).slice(1);
      matchupData.sort((x, y) => y[1] - x[1]);
      const newOrder = matchupData.map((x) => x[0]);
      setSortedBy({ name: values.name, order: newOrder });
      setColumnOrder(['name', ...newOrder]);
    }
  };

  return (
    <Styles className={Styles.ta}>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ width: 1000, height: 500 }}
      >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div
                {...row.getRowProps()}
                className="tr"
                onClick={() => changeOrder(row.original)}
              >
                {row.cells.map((cell) => (
                  <div
                    {...cell.getCellProps([
                      {
                        style: cell.column.style,
                      },
                      getCellProps(cell),
                    ])}
                    className="td"
                  >
                    {typeof cell.value === 'number'
                      ? (cell.value * 100).toFixed(2) + '%'
                      : cell.value}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};
