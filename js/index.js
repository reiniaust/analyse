$(function () {

    var daten;
    var chartArt;
    var chartArt1;
    var analArt;
    var yearChoosen;
    var dateChoosen = (new Date().getFullYear() - 3 + "-01-01");
    //var request = new XMLHttpRequest()
    myStorage = localStorage;





    function loading(load) {
        $("#indicator").dxLoadIndicator({
            visible: load,
            height: 60,
            width: 60
        });
    }

    //Einlesen des Zeitraumes 
    $("#date").dxDateBox({

        type: "date",
        displayFormat: 'dd.MM.yyyy',
        value: dateChoosen,

        onValueChanged: function (e) {
            dateChoosen = e.value;
            startUp();
        }
    });


    if (localStorage.getItem("chartArtName") == null) {
        localStorage.setItem('chartArtName', unescape("S%E4ulendiagramm"));
    };

    chartArt = localStorage.getItem("chartArtName");


    //DropDown Box zur Auswahl des Diagrammtypes
    var chart = [unescape("S%E4ulendiagramm"), "Liniendiagramm"];
    $(function () {
        $("#DiaArt").dxDropDownBox({
            value: chartArt,
            contentTemplate: function (e) {
                var $choose = $("<div>").dxList({
                    dataSource: chart,
                    selectionmode: "single",
                    onItemClick: function (args) {
                        chartArt = args.itemData;

                        localStorage.setItem('chartArtName', chartArt);
                        e.component.option("value", chartArt);
                        e.component.close();

                        if (chartArt == "Liniendiagramm") {
                            chartArt1 = "spline";
                        } else {
                            chartArt1 = "bar";
                        };
                        showData()
                    }
                })

                return $choose;
            }
        });
    });

    //DropDown Box zur Auswahl des Diagramminhalts
    var analyseArt = ["Umsatz nach Leistungen", "Umsatz nach Branchen", "Umsatz nach Kunde", "Umsatz nach Betreuer", "Umsatz nach " + unescape("Eigent%FCmer"), "Umsatz nach Modell-Nr"];
    $(function () {
        $("#treeBox").dxDropDownBox({
            value: analyseArt[0],
            contentTemplate: function (e) {
                var $list = $("<div>").dxList({
                    dataSource: analyseArt,
                    selectionmode: "single",
                    onItemClick: function (args) {
                        analArt = args.itemData;
                        e.component.option("value", analArt)
                        e.component.close();
                        showData()
                    }
                })

                return $list;
            }
        });
    });

    startUp();


    function startUp() {


        loading(true);


        if (chartArt == "Liniendiagramm") {
            chartArt1 = "spline";
        }

        else {
            chartArt1 = "bar";
        };

        /*
        request.open("GET", dataList + dateChoosen, true)

        request.onload = function () {

            if (request.status >= 200 && request.status < 400) {

                daten = JSON.parse(this.response)
                //daten = dataList




                showData()

            } else {
                console.log('error')
            }
        }

        request.send();
        */

        
        yearChoosen = dateChoosen.substring(0, dateChoosen.length - 6); 

        dataList = [];

        if (yearChoosen == (new Date().getFullYear()))
        {
            Array.prototype.push.apply(dataList, dataList0);
        }
        else if (yearChoosen == (new Date().getFullYear()- 1))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
        }
        else if (yearChoosen == (new Date().getFullYear()- 2))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
        }
        else if (yearChoosen == (new Date().getFullYear()- 3))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
        }
        else if (yearChoosen == (new Date().getFullYear()- 4))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
            Array.prototype.push.apply(dataList, dataList4);
        }
        else if (yearChoosen == (new Date().getFullYear()- 5))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
            Array.prototype.push.apply(dataList, dataList4);
            Array.prototype.push.apply(dataList, dataList5);
        }
        else if (yearChoosen == (new Date().getFullYear()- 6))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
            Array.prototype.push.apply(dataList, dataList4);
            Array.prototype.push.apply(dataList, dataList5);
            Array.prototype.push.apply(dataList, dataList6);
        }
        else if (yearChoosen == (new Date().getFullYear()- 7))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
            Array.prototype.push.apply(dataList, dataList4);
            Array.prototype.push.apply(dataList, dataList5);
            Array.prototype.push.apply(dataList, dataList6);
            Array.prototype.push.apply(dataList, dataList7);
        }
        else if (yearChoosen == (new Date().getFullYear()- 8))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
            Array.prototype.push.apply(dataList, dataList4);
            Array.prototype.push.apply(dataList, dataList5);
            Array.prototype.push.apply(dataList, dataList6);
            Array.prototype.push.apply(dataList, dataList7);
            Array.prototype.push.apply(dataList, dataList8);
        }
        else if (yearChoosen == (new Date().getFullYear()- 9))
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
            Array.prototype.push.apply(dataList, dataList4);
            Array.prototype.push.apply(dataList, dataList5);
            Array.prototype.push.apply(dataList, dataList6);
            Array.prototype.push.apply(dataList, dataList7);
            Array.prototype.push.apply(dataList, dataList8);
            Array.prototype.push.apply(dataList, dataList9);
        }
        else 
        {
            Array.prototype.push.apply(dataList, dataList0);
            Array.prototype.push.apply(dataList, dataList1);
            Array.prototype.push.apply(dataList, dataList2);
            Array.prototype.push.apply(dataList, dataList3);
            Array.prototype.push.apply(dataList, dataList4);
            Array.prototype.push.apply(dataList, dataList5);
            Array.prototype.push.apply(dataList, dataList6);
            Array.prototype.push.apply(dataList, dataList7);
            Array.prototype.push.apply(dataList, dataList8);
            Array.prototype.push.apply(dataList, dataList9);
            Array.prototype.push.apply(dataList, dataList10);
        }


        var filteredData = dataList.filter(d => d.datum >= dateChoosen);

        
        daten = filteredData; 

        loading(false);

        showData();

    };




    function showData() {
        Globalize.locale("de");
        //DevExpress.localization.locale("de");

        DevExpress.config({
            defaultCurrency: "EUR"
        });

        var pivotGridChart = $("#pivotgrid-chart").dxChart({

            commonAxisSettings: {
                label: {
                    font: {
                        color: "#ffffff"
                    }
                }
            },

            commonSeriesSettings: {
                type: chartArt1,
            },

            legend: {
                font: {
                    color: "#ffffff"
                }
            },
            
            tooltip: {
                enabled: true,
                format: "currency",
                customizeTooltip: function (args) {
                    return {
                        html: args.seriesName + " | <div class='currency'>" + args.valueText + "</div>",
                        
                    };
                }
            },
            size: {
                height: 200
            },
            adaptiveLayout: {
                width: 450
            }
        }).dxChart("instance");

        //Auflistung der einzelnen Datenfelder

        var fieldTyp = {
            caption: "Typ",
            width: 120,
            dataField: "typ",
            area: "row",
            sortBySummaryField: "Total"
        };

        var fieldKunde = {
            caption: "Kunde",
            width: 120,
            dataField: "kunde",
            area: "row",
            sortBySummaryField: "Total",
            sortOrder: "desc"
        };

        var fieldOwner = {
            caption: unescape("Eigent%FCmer"),
            width: 120,
            dataField: "eigentuemer",
            area: "row",
            sortBySummaryField: "Total",
            sortOrder: "desc"
        };

        var fieldBetreu = {
            caption: "Betreuer",
            width: 120,
            dataField: "Betreuer",
            area: "row",
            sortBySummaryField: "Total",
            sortOrder: "desc"
        };


        var fieldBranche = {
            caption: "Branche",
            width: 120,
            dataField: "branche",
            area: "row",
            sortBySummaryField: "Total",
            sortOrder: "desc"
        }; 

        var fieldBez = {
            caption: "Bezeichnung",
            dataField: "bezeichnung",
            width: 150,
            area: "row",
            sortBySummaryField: "Total",
            sortOrder: "desc"
        };

        var fieldArtNr = {
            caption: "Artikel-Nr.",
            dataField: "artikelNr",
            width: 150,
            area: "row",
            sortBySummaryField: "Total",
            sortOrder: "desc"
        };

        var fieldDate = {
            dataField: "datum",
            dataType: "date",
            area: "column"
        };

        var fieldMonth = {
            groupName: "Monat",
            groupInterval: "month",
            visible: false
        };

        var fieldLeist = {
            caption: "Leistung",
            dataField: "leistung",
            width: 150,
            area: "row",
            sortBySummaryField: "Total",
            sortOrder: "desc"
        }; 

        var fieldTotal = {
            caption: "Total",
            dataField: "wert",
            dataType: "number",
            summaryType: "sum",
            format: "currency",
            area: "data",
            color: "#333333"
        };



        var dataSource = [];

        //Erstellung der Ansicht der Analyse
        if (analArt == "Umsatz nach Branchen") {

            dataSource.push(fieldBranche);
            dataSource.push(fieldKunde);
            dataSource.push(fieldTyp);
            dataSource.push(fieldLeist);
            dataSource.push(fieldDate);
            dataSource.push(fieldMonth);
            dataSource.push(fieldTotal);
        }

        else if (analArt == "Umsatz nach Kunde") {

            dataSource.push(fieldKunde);
            dataSource.push(fieldTyp);
            dataSource.push(fieldDate);
            dataSource.push(fieldMonth);
            dataSource.push(fieldTotal);
        }

        else if (analArt == "Umsatz nach " + unescape("Eigent%FCmer")) {

            dataSource.push(fieldOwner);
            dataSource.push(fieldKunde);
            dataSource.push(fieldTyp);
            dataSource.push(fieldDate);
            dataSource.push(fieldMonth);
            dataSource.push(fieldTotal);
        }

        else if (analArt == "Umsatz nach Betreuer") {

            dataSource.push(fieldBetreu);
            dataSource.push(fieldKunde);
            dataSource.push(fieldTyp);
            dataSource.push(fieldDate);
            dataSource.push(fieldMonth);
            dataSource.push(fieldTotal);
        }

        else if (analArt == "Umsatz nach Modell-Nr") {

            dataSource.push(fieldArtNr);
            dataSource.push(fieldBez);
            dataSource.push(fieldKunde);
            dataSource.push(fieldTyp);
            dataSource.push(fieldDate);
            dataSource.push(fieldMonth);
            dataSource.push(fieldTotal);
        }

        else {
            dataSource.push(fieldTyp);
            dataSource.push(fieldLeist);
            dataSource.push(fieldDate);
            dataSource.push(fieldMonth);
            dataSource.push(fieldTotal);
        };



        var pivotGrid = $("#pivotgrid").dxPivotGrid({
            allowSortingBySummary: true,
            allowSorting: true,
            allowFiltering: true,
            //sorting: {
            //    mode: "single"
            //},
            showBorders: true,
            showColumnGrandTotals: true,
            showRowGrandTotals: true,
            showRowTotals: true,
            showColumnTotals: true,
            headerFilter: {
                enabled: true,
                allowSearch: true,

            },
            fieldChooser: {
                enabled: true,
                height: 600,
                            
            },
            dataSource: {
                fields: dataSource,
                store: daten,
            },

            onCellPrepared: function (e) {
                e.cellElement.css("background-color", "#142d43");                 
                e.cellElement.css("color", "#ffffff");
                e.cellElement.css("textAlign", "left");
                
            }
        }).dxPivotGrid("instance");


        pivotGrid.bindChart(pivotGridChart, {
            dataFieldsDisplayMode: "splitPanes",
            alternateDataFields: false,
        });

    }

   
});


