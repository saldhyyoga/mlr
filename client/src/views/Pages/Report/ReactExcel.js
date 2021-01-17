import React from 'react';
import Workbook from 'react-excel-workbook';

export default function ReactExcel(props) {
  const data = props.data
  const date = props.date
  console.log(props.data)

  return (
    <div className="row text-center">
    <Workbook filename="report.xlsx"
      element={
        <button
        onClick={e => {
          e.preventDefault();
          // const timer = setTimeout(() => {
          //   window.location.href = '/report'
          // }, 3000);
          // return () => clearTimeout(timer);
        }}
        style={{marginLeft: 15}}
        disabled={date === '' ? true : false}
        className="btn btn-md btn-primary">Download File in Excel
        </button>}>
      <Workbook.Sheet data={data} name="Sheet A">
        <Workbook.Column label="Bill_ID" value="bill_id"/>
        <Workbook.Column label="Amount" value="amount"/>
        <Workbook.Column label="Admin_Fee" value="admin_fee"/>
        <Workbook.Column label="Ref_ID" value="ref_id"/>
        <Workbook.Column label="Ref_ID2" value="ref_id2"/>
        {/* <Workbook.Column label="Date_Time" value={item => {
          return(
            item.date_time.slice(0,10) + ' ' + item.date_time.slice(11,19)
          )
        }} /> */}
        <Workbook.Column label="Status" value="status"/>
        <Workbook.Column label="Name" value="name"/>
        <Workbook.Column label="Params" value="params"/>
        <Workbook.Column label="Merchant_Name" value={row => row.merchant.name } />
        <Workbook.Column label="Nomor_Rekening" value={row => row.rekening.number } />
        <Workbook.Column label="Pemilik_Rekening" value={row => row.rekening.name } />
      </Workbook.Sheet>
    </Workbook>
  </div>
  )
}
