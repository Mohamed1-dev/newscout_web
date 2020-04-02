import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {RED_COLOR, GREEN_COLOR, BLUE_COLOR} from '../utils/Constants';


class ArticlesPerPlatformGraph extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            loading: props.loading,
            no_data: props.no_data
        };
    }

    componentWillReceiveProps(newProps){
        this.setState({
            data: newProps.data,
            loading: newProps.loading,
            no_data: newProps.no_data
        })
    }

    render() {
        return (
            <div className="col-lg-12">
            <h4>Articles Per Platform</h4>
            {
                this.state.no_data ?
                    <h6 className="text-danger">No Enough Data To Generate Graph</h6>
                :
                    ""
            }
            {
                this.state.loading ?
                    <React.Fragment>
                        <div className="lds-ring mt20 col-sm-12 col-md-7 offset-md-5"><div></div><div></div><div></div><div></div></div>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <div style={{ width: '80%', height: 450 }}>
                            <ResponsiveContainer>
                                <BarChart
                                    width={500}
                                    height={400}
                                    data={this.state.data}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="dateStr" interval={0} textAnchor="end" angle={330} height={100} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="web" fill={RED_COLOR} />
                                    <Bar dataKey="android" fill={BLUE_COLOR} />
                                    <Bar dataKey="ios" fill={GREEN_COLOR} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </React.Fragment>
            }
            </div>
            );
        }
    }

export default ArticlesPerPlatformGraph