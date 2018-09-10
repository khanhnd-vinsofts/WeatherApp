
import React,{Component} from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
 
export default class SvgExample extends Component {
    render() {
        return (
            <Svg
                height="100"
                width="100"
            >
                <Line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    stroke="red"
                    strokeWidth="2"
                />
            </Svg>
        );
    }
}

