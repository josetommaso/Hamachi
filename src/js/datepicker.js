$(function () {
    $('#datepicker').datetimepicker({
        format: 'DD/MM/YYYY',
        minDate: new Date()
    });
    
    $('#timepicker').datetimepicker({
        format: 'LT'
    });
});