// Grafica "Número de colmenas", de 2011- 2018.//
function drawTable() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Año');
    data.addColumn('number', '# Colmenas');
    data.addRows([
        ['2011', { v: 1847667, f: '1847667' }],
        ['2012', { v: 1898239, f: '1898239' }],
        ['2013', { v: 1933105, f: '1933105' }],
        ['2014', { v: 1981162, f: '1981162' }],
        ['2015', { v: 2017931, f: '2017931' }],
        ['2016', { v: 1859350, f: '1859350' }],
        ['2017', { v: 1853807, f: '1853807' }],
        ['2018', { v: 2172107, f: '2172107' }],
    ]);

    var table = new google.visualization.Table(document.getElementById('numeroColmenas'));

    table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}