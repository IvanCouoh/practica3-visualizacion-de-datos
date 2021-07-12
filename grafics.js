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
        ['Año', 'Yucatán'],
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
        hAxis: { title: 'Año', titleTextStyle: { color: '#333' } },
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
        ["Tizimín", 962, "#1a64c4"],
        ["Tekax", 503, "#1a64c4"],
        ["Oxkutzcab", 435, "#1a64c4"],
        ["Halachó", 406, "#1a64c4"],
        ["Izamal", 317, "#1a64c4"],
        ["Maxcanú", 307, "#1a64c4"],
        ["Valladolid", 240, "#1a64c4"],
        ["Hunucmá", 233, "#1a64c4"],
        ["Tzucacab", 229, "#1a64c4"],
        ["Ticul", 214, "#1a64c4"]
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
        width: 900,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("produccionMunicipio"));
    chart.draw(view, options);
}

//Gráfica "Asosiaciones aícolas por Estado".//
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(pieChart);

function pieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Estado', 'Número'],
        ['Yucatán', 80],
        ['Chiapas', 65],
        ['Campeche', 56],
        ['Veracruz', 44],
        ['Hidalgo', 43],
        ['Oaxaca', 32],
        ['Jalisco', 27],
        ['Guerrero', 26],
        ['Puebla', 26],
        ['Zacatecas', 25]
    ]);

    var options = {
        title: 'Estados con mayor número de asociaciones',
        is3D: false,
    };

    var chart = new google.visualization.PieChart(document.getElementById('asociacionApicola'));
    chart.draw(data, options);
}

//Gráfica "Producción de cera por Estado".//
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(barChart);

function barChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Ton", { role: "style" }],
        ["Yucatán", 258.8, "#67a65d"],
        ["Jalisco", 199, "#67a65d"],
        ["Veracruz", 192.4, "#67a65d"],
        ["Oaxaca", 148.3, "#67a65d"],
        ["Chiapas", 136.6, "#67a65d"],
        ["Quintana Roo", 96.1, "#67a65d"],
        ["Campeche", 83.5, "#67a65d"],
        ["Zacatecas", 81.6, "#67a65d"],
        ["Guerrero", 76.6, "#67a65d"],
        ["Puebla", 72.5, "#67a65d"]
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
        title: "Producción de cera por toneladas",
        width: 900,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("produccionCera"));
    chart.draw(view, options);
}