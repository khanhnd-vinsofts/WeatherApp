import React, {Component} from 'react';
import {  StyleSheet, View, Text} from 'react-native';
import Svg, {
    G, 
    Path,
    Polygon
} from 'react-native-svg';

export default class LineChart extends Component {
    constructor(props) {
        super(props);
        const {
            width,
            height,
            chart
        } = this.props;
        this.state = {
            margin: chart.options.margin,
            stepX: 0,
            stepY: 0,
            width: width,
            height: height,
            values: chart.values,
            colors: chart.colors,
            length: chart.axis.length,
        };

        this.buildChart();
    }
    buildChart() {
        const {values, width, height, margin, length} = this.state;
        let minValue = -1;
        let maxValue = 0;
        let variation = 0;

        values.map(elem => {
            maxElem = Math.max(...elem);
            if (maxElem > maxValue)
                maxValue = maxElem;
            }
        )
        variation = (minValue * -1) + maxValue;
    
        // step between each value point on horizontal (x) axis
        let stepX = (width - (margin.left + margin.right)) / (length - 1 || 1);
        // step between each value point on vertical (y) axis
        let stepY = (height - (margin.top + margin.bottom)) / variation;

        this.state.minValue = minValue;
        this.state.maxValue = maxValue;
        this.state.variation = variation;
        this.state.stepX = stepX;
        this.state.stepY = stepY;
    }

    buildPath = (values) => {
        const {
            minValue,
            margin,
            stepX,
            stepY
        } = this.state;

        let firstPoint = true;
        let path = "";
        values.forEach((number, index) => {
            let x = (index * stepX) + margin.left;
            let y = -(((number - minValue) * stepY) + margin.bottom);
            if (firstPoint) {
                path += "M" + margin.left + " " + y;
            } else {
                path += " L" + x + " " + y;
            }
            firstPoint = false;
        });

        return path;
    };

    buildPolygon = (values) => {
        const {
            minValue,
            margin,
            stepX,
            stepY,
            length
        } = this.state;

        let firstPoint = true;
        let start = -(((minValue * -1) * stepY) + margin.bottom);
        let path = margin.left + "," + start;
        values.forEach((number, index) => {
            let x = (index * stepX) + margin.left;
            let y = -(((number - minValue) * stepY) + margin.bottom);
            if (firstPoint) {
                path += " " + margin.left + "," + y;
            } else {
                path += " " + x + "," + y;
            }
            firstPoint = false;
        });

        path += " " + (((length - 1) * stepX) + margin.left) + "," + start;
        path += " " + margin.left + "," + start;

        return path;
    };

   
    render() {
        const {
            width,
            height,
            values,         
            colors,  
        } = this.state;

        const lines = values.map((item, i) => {
            let strokeWidth = 1;
            let stroke = colors.strokeColor[i];
            fill = colors.fillColor[i];
            let line = null;
            if (colors.fillColor[i] != null) {
                strokeWidth = 2;
                line = (<Polygon key={"polygon_" + i} points={this.buildPolygon(item)} fill={fill} />)
            }

            let path = (<Path key={"path_" + i} d={this.buildPath(item)} fill="none" stroke={stroke} strokeWidth={strokeWidth}/>)
            return (
                <G key={"lines_" + i}>
                    {path}
                    {line}
                </G>
                
            );
        });
        console.log(width);

        return (
            <View style={styles.container} onLayout={this.onLayout}>
                    <Svg width={width} height={height}>
                        <G x={0} y={height}>                     
                            {lines}
                        </G>
                    </Svg>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});