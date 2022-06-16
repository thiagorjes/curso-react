import * as $ from 'jquery';
import "admin-lte/plugins/datatables/jquery.dataTables.min.js"
import "admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"
import "admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js"
import "admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"
import "admin-lte/plugins/datatables-buttons/js/dataTables.buttons.min.js"
import "admin-lte/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"
import "admin-lte/plugins/jszip/jszip.min.js"
import "admin-lte/plugins/pdfmake/pdfmake.min.js"
import "admin-lte/plugins/pdfmake/vfs_fonts.js"
import "admin-lte/plugins/datatables-buttons/js/buttons.html5.min.js"
import "admin-lte/plugins/datatables-buttons/js/buttons.print.min.js"
import "admin-lte/plugins/datatables-buttons/js/buttons.colVis.min.js"


export function initTable(unique_id, container) {

  if ($.fn.DataTable.isDataTable("#" + unique_id)) {
    console.log("destruiu " + unique_id)
    $("#" + unique_id).DataTable().destroy();
    $("#" + unique_id).DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": true
    });
  }
  else {
    console.log("construiu " + unique_id)
    $("#" + unique_id).DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": true
    });
  }


}