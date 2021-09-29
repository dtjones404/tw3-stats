import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import styles from '../styles/FactionTable.module.css';

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

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.factionContainer}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps([
                      {
                        style: cell.column.style,
                      },
                      getCellProps(cell),
                    ])}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
