import React from 'react';

const BtnExportData = () => {
  return (
    <div className="mb-4">
      <div className="btn-group">
        <button type="button" className="btn btn-outline-success waves-effect waves-light">
          Copy <i className="uil-cloud-download"></i>
        </button>
        <button type="button" className="btn btn-outline-success waves-effect waves-light">
          Excel <i className="uil-cloud-download"></i>
        </button>
        <button type="button" className="btn btn-outline-success waves-effect waves-light">
          PDF <i className="uil-cloud-download"></i>
        </button>
      </div>
    </div>
  );
};

export default BtnExportData;

// import $ from 'jquery';

// class BtnExportData extends React.Component {
//   componentDidMount() {
//     $(document).ready(function () {
//       $('#datatable').DataTable(),
//         $('#datatable-buttons')
//           .DataTable({ lengthChange: !1, buttons: ['copy', 'excel', 'pdf', 'colvis'] })
//           .buttons()
//           .container()
//           .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)'),
//         $('.dataTables_length select').addClass('form-select form-select-sm');
//     });
//   }
// }

// export default BtnExportData;
