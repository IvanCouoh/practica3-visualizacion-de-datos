// Grafica "Número de colmenas", de 2011- 2018.//
google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(drawTable);

function drawTable() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Año');
    data.addColumn('number', '# Colmenas');
    data.addRows([
        [2011, 1847667],
        [2012, 1898239],
        [2013, 1933105],
        [2014, 1981162],
        [2015, 2017931],
        [2016, 1859350],
        [2017, 1853807],
        [2018, 2172107]
    ]);

    var table = new google.visualization.Table(document.getElementById('numeroColmenas'));

    table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}