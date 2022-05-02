import React from "react";
import { useTable, usePagination } from "react-table";

type Accessor = "hash" | "status" | "amountTraded" | "type" | "date";
interface ColumnProps {
  Header: Omit<React.ReactNode, "null">;
  accessor: Accessor;
}
type TableData = { [P in Accessor]: string };

const tableColumns: ColumnProps[] = [
  {
    Header: "Hash",
    accessor: "hash",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Amount Traded",
    accessor: "amountTraded",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Date",
    accessor: "date",
  },
];

export default function ActivityLogTable() {
  const tableData: TableData[] = [
    {
      hash: "0x778y32ehudud73282yedugd73ddufkhd690",
      status: "pending",
      amountTraded: "50 USDT",
      type: "Fund",
      date: "21/03/22",
    },
    {
      hash: "0x678y32ehudud73282yedugd73ddu569rfd4",
      status: "pending",
      amountTraded: "60 USDT",
      type: "Fund",
      date: "21/03/22",
    },
    {
      hash: "0x578y32ehudud73282yedugd73ddumj802b6ds",
      status: "pending",
      amountTraded: "60 USDT",
      type: "Fund",
      date: "21/03/22",
    },
  ];

  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
      initialState: { pageIndex: 0 },
      autoResetPage: false,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <div>
      <table
        className="min-w-full divide-y divide-gray-200 table-auto"
        {...getTableProps()}
      >
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  {...column.getHeaderProps()}
                  className="py-3 px-2 text-xs min-w-min whitespace-nowrap font-medium tracking-wider
                        text-left text-gray-700 uppercase"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200 w-full"
        >
          {page.length > 0 &&
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="p-2 text-sm text-gray-900 whitespace-nowrap"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="mt-3 flex flex-col items-center">
        <div className="my-2">
          <ul className="flex p-1 list-none w-full">
            <button
              className="py-1 px-2 text-sm rounded-md disabled:cursor-not-allowed
                  disabled:opacity-40 hover:bg-yellow-100 underline"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              First
            </button>
            <button
              className="py-1 px-2 text-sm rounded-md disabled:cursor-not-allowed
                  disabled:opacity-40 hover:bg-yellow-100 underline"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="py-1 px-2 text-sm rounded-md disabled:cursor-not-allowed
                disabled:opacity-40 hover:bg-yellow-100 underline"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
            <button
              className="py-1 px-2 text-sm rounded-md disabled:cursor-not-allowed
                disabled:opacity-40 hover:bg-yellow-100 underline"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              Last
            </button>
          </ul>
        </div>
        <div className="text-xs text-gray-500">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className="w-10 border-b outline-none border-gray-500 px-1 rounded-sm bg-blue-50"
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="w-20 border-b outline-none border-gray-500 bg-blue-50 rounded-sm"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
