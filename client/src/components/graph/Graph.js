import React, { Component } from 'react';
import './Graph.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Card } from 'reactstrap';
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';


am4core.useTheme(am4themes_animated);

// Monthly income will be 100% of the circle then having  % taken
// out of that will be monthly bills then split the rest between
// what you are putting twards savings and whatevers left over

class Graph extends Component {
 
  componentDidMount() {
    this.loadSave();
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.paddingRight = 20;

    chart.data = [{

      "category": "Monthly Expenses",
      "litres": 501.9

    }, {

      "category": "Left Over Funds",
      "litres": 301.9
    }, {

      "category": "Amount Still Left to Save",
      "litres": 201.1
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chart = chart;
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  };

  // Loads all Save  and sets them to this.state.Save
loadSave = () => {
  API.getSaves()
      .then(res =>
          this.setState({ Save: res.data, 
              item: "",
              income: "",
              bills: "",
              leftoverIncome: "",
              cost: "",
              save: "",
              time: "",
              date: Date.now
          })
      ) 
      .catch(err => console.log(err));
};

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Graph;