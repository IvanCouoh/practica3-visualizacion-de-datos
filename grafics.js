// Grafica "Número de colmenas", de 2011- 2018.//
google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(drawTable);

function drawTable() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Año');
    data.addColumn('number', '# Colmenas');
    data.addRows([
        ['2011', 1847667],
        ['2012', 1898239],
        ['2013', 1933105],
        ['2014', 1981162],
        ['2015', 2017931],
        ['2016', 1859350],
        ['2017', 1853807],
        ['2018', 2172107]
    ]);

    var table = new google.visualization.Table(document.getElementById('numeroColmenas'));

    table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}

// Grafica "Miel producida por entidad".//
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(areaChart);

function areaChart() {
    var data = google.visualization.arrayToDataTable([
        ['Año', ''],
        ['2011', 10195],
        ['2012', 10405],
        ['2013', 8111],
        ['2014', 9654],
        ['2015', 11629],
        ['2016', 7490],
        ['2017', 4351],
        ['2018', 11847.311],
        //['2019', 9810]
    ]);

    var options = {
        title: 'Producción de miel en el estado de Yucatán',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('produccionEstado'));
    chart.draw(data, options);
}

//Gráfica "Producción de miel por municipio".//
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(columnChart);

function columnChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Litros", { role: "style" }],
        ["Tizimín", 962, "#0e28ad"],
        ["Tekax", 503, "#0e28ad"],
        ["Oxkutzcab", 435, "#0e28ad"],
        ["Halachó", 406, "#0e28ad"]
        ["Izamal", 317, "#0e28ad"],
        ["Maxcanú", 307, "#0e28ad"],
        ["Valladolid", 240, "#0e28ad"],
        ["Hunucmá", 233, "#0e28ad"]
        ["Tzucacab", 229, "#0e28ad"],
        ["Ticul", 214, "#0e28ad"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        title: "10 mayores municipios productores de miel de yucatán",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("produccionMunicipio"));
    chart.draw(view, options);
}