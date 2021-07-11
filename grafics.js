// Grafica "Número de colmenas", de 2011- 2018.//
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2011', 1000, 400],
        ['2012', 1170, 460],
        ['2013', 660, 1120],
        ['2014', 1030, 540]
        ['2015', 1000, 400],
        ['2016', 1170, 460],
        ['2017', 660, 1120],
        ['2018', 1030, 540]
    ]);

    var options = {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}