import React, { useMemo, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import { useTable, usePagination } from 'react-table'


const DataTable = () => {
  useEffect(() => {
    document.querySelectorAll('.js-share-dropdown li').forEach(function (item, idx) {
      item.querySelector('.copy').addEventListener('click', function (e) {
        this.classList.add('active');
        this.closest('li').querySelector('input').select();
        document.execCommand("copy");

        setTimeout(() => {
          this.classList.remove('active');
        }, 300)        
      });
    });     
  }, []);

  const removeRow = e => {
    e.preventDefault();
    if (confirm("Bu sonuç geçmişinizden silinecek ve geri alınamayacak.")) {
      // Save it!
      
    } else {
      // Do nothing!
      
    }    
  }

  const data = React.useMemo(
   () => [
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Vodafone Net',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Vodafone Net2',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline2/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline2/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline2/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Vodafone Net',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     },
     {
       date: '14.05.2018/12:04',
       ping: '6',
       download: '16.24',
       upload: '8.42',
       km: '< 20',
       location: 'Denizli/Netinternet',
       iss: 'Turkcell Superonline/IPv4: 212.252.115.21',
       action: '',
     }                              
   ],
   []
  );

  const columns = React.useMemo(
     () => [
       {
         Header: <FormattedMessage id="dateClock" />,
         accessor: 'date', // accessor is the "key" in the data
       },
       {
         Header: 'PING',
         accessor: 'ping',
       },
       {
         Header: <FormattedMessage id="download" />,
         accessor: 'download',
       },       
       {
         Header: <FormattedMessage id="upload" />,
         accessor: 'upload',
       },              
       {
         Header: <FormattedMessage id="howFar" />,
         accessor: 'km',
       },               
       {
         Header: <FormattedMessage id="locationServer" />,
         accessor: 'location',
       },                        
       {
         Header: <FormattedMessage id="iss" />,
         accessor: 'iss',
       },                                   
       {
         Header: '',
         accessor: 'action',
       }       
     ],
     []
   );

  const tableInstance = useTable({ columns, data })
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
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  )
  return (
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => ( 
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => { 
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => { 
                    if(cell.column.id == 'date') {
                      return (
                        <td {...cell.getCellProps()}>
                          <p>{cell.value.split('/')[0]}</p>
                          <p>{cell.value.split('/')[1]}</p>
                        </td>
                      )
                    } else if(cell.column.id == 'location') {
                      return (
                        <td {...cell.getCellProps()}>
                          <p>{cell.value.split('/')[0]}</p>
                          <p>{cell.value.split('/')[1]}</p>
                        </td>
                      )
                    } else if(cell.column.id == 'iss') {
                      return (
                        <td {...cell.getCellProps()}>
                          <p>{cell.value.split('/')[0]}</p>
                          <p>{cell.value.split('/')[1]}</p>
                        </td>
                      )
                    } else if(cell.column.id == 'action') {
                      return (
                        <td {...cell.getCellProps()}>
                          <div className="actions">
                            <a href="#" className="remove" onClick={(e) => removeRow(e)} />
                            <ul>
                              <li className="links">
                                <a href="#"></a>
                                <div className="dropdown link-dropdown js-share-dropdown">
                                  <ul>
                                    <li>
                                      <label>
                                        Web
                                        <input type="text" value="https://www.hiztesti.com" readonly/>
                                        <span className="copy"></span>
                                      </label>
                                    </li>                                
                                    <li>
                                      <label>
                                        <FormattedMessage id="image" />
                                        <input type="text" value="https://www.hiztesti.com" readonly/>
                                        <span className="copy"></span>
                                      </label>
                                    </li>                                
                                    <li>
                                      <label>
                                        Embed
                                        <input type="text" value='<a href="https://www.hiztesti.com</a>' readonly/>
                                        <span className="copy"></span>
                                      </label>
                                    </li>                                
                                    <li>
                                      <label>
                                        Forum
                                        <input type="text" value="[URL=https://www.hiztestesti.com]" readonly/>
                                        <span className="copy"></span>
                                      </label>
                                    </li>                                                                                                                                      
                                  </ul>
                                </div>                              
                              </li>
                              <li className="twitter">
                                <a href="#"></a>
                              </li>
                              <li className="facebook">
                                <a href="#"></a>
                              </li>
                              <li className="others">
                                <a href="#"></a>
                                <div className="dropdown share">
                                  <ul>
                                    <li className="google">
                                      <a href="#"></a>
                                    </li>
                                    <li className="mail">
                                      <a href="#"></a>
                                    </li>
                                    <li className="pinterest">
                                      <a href="#"></a>
                                    </li>
                                    <li className="linkedin">
                                      <a href="#"></a>
                                    </li>                                  
                                  </ul>
                                </div>
                              </li>                                                                                    
                            </ul>
                          </div>
                        </td>
                      )
                    } else {
                      return (
                        <td {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      )
                    }
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <FormattedMessage id="prevPage" />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <FormattedMessage id="nextPage" />
          </button>
        </div>
      </div>
  );
};

export default function HistoryTable() {
  return (
    <DataTable />
  )
}
