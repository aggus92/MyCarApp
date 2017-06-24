/**
 * Created by aggus on 23.06.2017.
 */
vpabxdvgui.factory('reportsFactory', ['$sce','$state', '$filter', '$rootScope', '$modal', function($sce, $state, $filter, $rootScope, $modal) {
    var factory = {};

    factory.convertArrayOfObjectsToCSV = function(args) {
        var result, ctr, headers, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        headers = Object.keys(data[0]);

        result = '';
        result += headers.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            headers.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    };

    factory.downloadCSV = function(records) {
        console.log(records);
        var data, filename, link;

        var csv = convertArrayOfObjectsToCSV({
            data: records
        });
        if (csv == null) return;

        filename = 'report.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    };

    return factory;
}]);