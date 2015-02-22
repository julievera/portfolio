// CHART 1: Education

google.load("visualization", "1", {packages:["timeline"]});
      google.setOnLoadCallback(drawChart);

      function drawChart() {
      var container = document.getElementById('chart1');
      var chart = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: 'string', id: 'Role' });
      dataTable.addColumn({ type: 'string', id: 'Name' });
      dataTable.addColumn({ type: 'date', id: 'Start' });
      dataTable.addColumn({ type: 'date', id: 'End' });
      dataTable.addRows([
        [ 'Education', 'Northeastern University', new Date(2005, 9, 1), new Date(2009, 4, 30) ],
        [ 'Education', 'Brandeis University',        new Date(2009, 9, 1),  new Date(2011, 4, 30) ],
        [ 'Education', 'GeneralAssemb.ly - SQL Bootcamp',        new Date(2014, 10, 1),  new Date(2014, 10, 30) ],
        [ 'Education', 'GeneralAssemb.ly - Front-End Web Dev',  new Date(2014, 12, 1),  new Date(2015, 2, 28) ]]);
          
      var options = {
              timeline: {singleColor: '#49D897', rowLabelStyle: {fontName: 'Open Sans', fontSize: 16, color: '#00' }, barLabelStyle: { fontName: 'Open Sans', fontSize: 12 }, groupByRowLabel: false, showRowLabels: false,},
              avoidOverlappingGridLines: true,
              tooltip: {trigger: 'none'},
            };

      chart.draw(dataTable, options);
            }

// CHART 2: Skills

google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var container = document.getElementById('chart2');
        var data = google.visualization.arrayToDataTable([
          ['Skill', 'Expertise', { role: 'annotation' }, {role: 'style'}, ],
          ['SEM / PPC',  95, '95%', 'color:#C0C0C0'],
          ['Digital Advertising',  95, '95%', 'color: #C0C0C0'],
          ['Tracking & Measurement', 94, '94%', 'color: #C0C0C0'],
          ['Digital Analytics',  92, '92%', 'color: #C0C0C0'],
          ['Copywriting', 90, '90%', 'color: #C0C0C0'],  
          ['Strategic Insights',  88, '88%', 'color: #C0C0C0'],
          ['Conversion Optimization',  85, '85%', 'color: #C0C0C0'],
          ['HTML/CSS',  85, '85%', 'color: #C0C0C0'],
          ['Photography', 80, '80%', 'color:#C0C0C0'],
          ['jQuery', 75, '75%', 'color: #C0C0C0'],
          ['Web Design', 70, '70%', 'color: #C0C0C0'],
          ['eCommerce',  60, '60%', 'color: #C0C0C0'],
          ['Javascript', 55, '55%', 'color: #C0C0C0'],
          
        ]);

        var options = {
            legend: { position: 'none' },
            tooltip: { trigger: 'none'},
            bar: {groupWidth: "90%"},
            fontName:"Open Sans",
            chartArea: {left:200, width: 400},
            hAxis: { textPosition: 'none', gridlines:{ color:"transparent", }},
            annotations: {
                textStyle: {
                  fontName: 'Open Sans',
                  fontSize: 30,
                  bold: false,
                  italic: false,
                  color: '#49D897',     // The color of the text.
                  auraColor: 'transparent', // The color of the text outline.
                  opacity: 0.8          // The transparency of the text.
                }
              }
           
           };

        var chart = new google.visualization.BarChart(document.getElementById('chart2'));

        chart.draw(data, options);
      }
           
// CHART 3:  Experience
           
      google.load("visualization", "1", {packages:["timeline"]});
      google.setOnLoadCallback(drawChart3);

      function drawChart3() {
      var container = document.getElementById('chart3');
      var chart = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: 'string', id: 'Role' });
      dataTable.addColumn({ type: 'string', id: 'Name' });
      dataTable.addColumn({ type: 'date', id: 'Start' });
      dataTable.addColumn({ type: 'date', id: 'End' });
      dataTable.addRows([
        [ 'Experience', 'Boston Symphony Orchestra', new Date(2009, 7, 1), new Date(2011, 4, 1) ],
        [ 'Experience', 'Overdrive Interactive',        new Date(2011, 3, 1),  new Date(2012, 6, 30) ],
        [ 'Experience', '3Q Digital',        new Date(2012, 7, 1),  new Date(2013, 7, 1) ],
        [ 'Experience', 'Intel - Intel Media',  new Date(2013, 7, 1),  new Date(2013, 12, 31) ],
        [ 'Experience', 'DigitasLBi',  new Date(2014, 2, 1),  new Date(2015, 2, 28) ],                                                
        ]);
          
      var options = {

              timeline: {singleColor: '#49D897', barLabelStyle: { fontName: 'Open Sans', fontSize: 10 }, groupByRowLabel: false, showRowLabels: false,},
              avoidOverlappingGridLines: true,
              tooltip: {trigger: 'none'},
            };

      chart.draw(dataTable, options);
            }


//CHART 4: INTERESTS

google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        ['Interest', 'x-interestlevel', 'y-experienceyears', 'Category',     'visualInterest'],
        ['Healthcare',    9,              1,      "Industries",  9],
        ['B2B',    3,              2,      "Industries",  3],
        ['Consumer',    8,              1.5,      "Industries",  8],
        ['Retail',    2,              2,      "Industries",  2],
        ['Arts',    2,              4,      "Industries",  2],
        ['NonProfit',    7,              3,      "Industries",  7],
        ['Energy',    5,              1,      "Industries",  5],
        ['Media',    7,              4,      "Industries",  7],
        ['Banking/Investments',    3,              1.5,      "Industries",  3],
        ['Analytical',    10,              5,      'Job Functions',         10],
        ['#IoT',    8,              0.2,         'Industries',         8],
        ['Planning',    7,              3,       'Job Functions',    7],
        ['Strategic',    8,              4,      'Job Functions',    8],
        ['Advertising',    10,              4,      'Industries',    10],
      ]);

      var options = {
          tooltip: {trigger: 'none'},
          chartArea: {left:50, width: 350, },
          hAxis: {title: 'Interest Level', viewWindow: {max: 12}, fontSize:1, gridlines:{color:"transparent"}},
          vAxis: {title: 'Experience (Years)', viewWindow:{max: 6}, gridlines:{color:"transparent"}},
        fontName: "Open Sans",
          bubble: {textStyle: {fontSize: 1, auraColor:"none", fontName:"Open Sans"}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('chart4'));
      chart.draw(data, options);
    }