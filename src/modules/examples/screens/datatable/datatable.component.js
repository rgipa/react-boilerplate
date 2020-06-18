import React from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const Datatable = (props) => {
  const columnDefs = [
    {
      headerName: 'ID',
      field: 'id',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      pinned: 'left',
    },
    {
      headerName: 'Title',
      field: 'title',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Body',
      field: 'body',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ]

  const [rowData, setRowData] = React.useState([])
  const [gridApi, setGridApi] = React.useState('')
  const [tableWidth, setTableWidth] = React.useState(500)
  const [pageSize, setPageSize] = React.useState(5)

  const onButtonClick = (e) => {
    const selectedNodes = gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map((node) => node.data)
    const selectedDataStringPresentation = selectedData
      .map((node) => node.id)
      .join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

  React.useEffect(() => {
    // fetch data from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData))
  }, [])

  const handleWidth = () => {
    if (tableWidth === 500) {
      setTableWidth('100%')
    } else {
      setTableWidth(500)
    }
  }

  const handlePageSize = () => {
    let value = document.getElementById('page-size').value
    gridApi.paginationSetPageSize(Number(value))
  }

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: '500px', width: tableWidth }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 12,
        }}
      >
        <button onClick={handleWidth}>Change Width</button>
        <button onClick={onButtonClick}>Get selected rows</button>
        <div>
          page size:{' '}
          <select
            name="pageSize"
            value={pageSize}
            onChange={handlePageSize}
            id="page-size"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
      <AgGridReact
        onGridReady={(params) => {
          // params.api.sizeColumnsToFit()
          setGridApi(params.api)
          params.api.showLoadingOverlay()
        }}
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection="multiple"
        enableRangeSelection={true}
        pagination={true}
        paginationPageSize={pageSize}
      ></AgGridReact>
    </div>
  )
}

export default Datatable
