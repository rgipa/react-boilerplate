import React from 'react'
import { observer } from 'mobx-react'

import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

export default observer(() => {
  const columnDefs = [
    {
      headerName: 'Make',
      field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      pinned: 'left',
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
  ]

  const [rowData, setRowData] = React.useState([])
  const [gridApi, setGridApi] = React.useState('')

  const onButtonClick = (e) => {
    const selectedNodes = gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map((node) => node.data)
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + ' ' + node.model)
      .join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

  React.useEffect(() => {
    // fetch data from API
    fetch(
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json'
    )
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData))
  }, [])

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: '500px', width: '500px' }}
    >
      <button onClick={onButtonClick}>Get selected rows</button>
      <AgGridReact
        onGridReady={(params) => setGridApi(params.api)}
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection="multiple"
      ></AgGridReact>
    </div>
  )
})
