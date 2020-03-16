import React from 'react';
import { DatePicker, Button, Switch, Select, Tabs, Table } from 'antd';
import { DownOutlined, PlusOutlined, BellOutlined } from "@ant-design/icons";
import Search from 'antd/lib/input/Search';
import profilePic from '../assets/profile.jpeg'
const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
    { title: 'DATE', dataIndex: 'name', key: 'name' },
    { title: 'CUSTOMER NAME', dataIndex: 'age', key: 'age' },
    { title: 'LEAD ORIGIN', dataIndex: 'address', key: 'address' },
    { title: 'SALES PERSON', dataIndex: 'address', key: 'address' },
    { title: 'DEAL TYPE', dataIndex: 'address', key: 'address' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
];

const data = [
    {
        key: 1,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 2,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 3,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 4,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 5,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 6,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 7,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 8,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 9,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
    {
        key: 10,
        name: '7/23/2019',
        age: "Fred Beans",
        address: 'Walk In',
        description: 'Cash',
    },
];
export default class DigitalDeal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="digital-deal-main">
                <div className="row rowMargin">
                    <div className="col-md-12 m-top-10">
                        <h5 className="main-drop">Major World- LLC, NY <DownOutlined /></h5>
                    </div>
                </div>
                <div className="col-md-12  m-top-15">
                    <div className="row rowMargin">
                        <div className="col-md-4"> </div>
                        <div className="col-md-4"><Search placeholder="Search..." /></div>
                        <div className="col-md-4">
                            <div className="row rowMargin header-right">
                                <div className="col-md-6">
                                    <Button type="primary">New<PlusOutlined /></Button>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="posRelative displayInline">
                                        <BellOutlined style={{ fontSize: '20px' }} />
                                        <span className="notification">3</span>
                                    </div>
                                    <img src={profilePic} className="profileImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="col-md-12 pad-0 m-top-30">
                        <div className="row rowMargin progress-bar-head">
                            <div className="col-md-2 pad-0">
                                <h2>REPORTS & ANALYTICS</h2>
                                <p className="dateSelect">07/31/2019</p>
                                <Switch style={{ backgroundColor: '#3fa4d2', fontWeight: 600 }} checkedChildren="Hide Details" unCheckedChildren="Unhide Details" defaultChecked />
                            </div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                        </div>
                        <div className="m-top-20">
                            <div className="row rowMargin textInitial m-top-20">
                                <div className="col-md-4">
                                    <div className="card-main">
                                        <div className="card-pad">
                                            <h4>FINANCE MANAGERS DEAL ASSIGNMENT</h4>
                                            <h5>TODAYS DEALS</h5>
                                            <div className="col-md-12 pad-0 m-top-20">
                                                <div className="card-inf">
                                                    <h6>Mike T.</h6>
                                                    <p><span></span><b>Customer Name:</b> Fred Beans</p>
                                                    <p><span></span><b>Customer Name:</b> Fred Beans</p>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pad-0  m-tb-30">
                                                <div className="card-inf">
                                                    <h6>Mike T.</h6>
                                                    <p><span></span><b>Customer Name:</b> Fred Beans</p>
                                                    <p><span></span><b>Customer Name:</b> Fred Beans</p>
                                                </div>                                        </div>
                                            <div className="col-md-12 pad-0  m-tb-30">
                                                <div className="card-inf">
                                                    <h6>Mike T.</h6>
                                                    <p><span></span><b>Customer Name:</b> Fred Beans</p>
                                                    <p><span></span><b>Customer Name:</b> Fred Beans</p>
                                                </div>                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-main">
                                        <div className="card-pad centerCard">
                                            <h4>LEAD ANALYTICS</h4>
                                            <h5>CURRENT MONTH</h5>
                                            <div className="col-md-12 m-top-20 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="amt float-right">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="amt float-right">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="amt float-right">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="amt float-right">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="amt float-right">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="amt float-right">25</span>
                                            </div>
                                        </div>
                                        <div className="card-bottom">
                                            <div className="row rowMargin">
                                                <div className="col-md-4 pad-0">
                                                    <div className="inside-card1">
                                                        <p>Total Ups</p>
                                                        <h4>95</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pad-0">
                                                    <div className="inside-card2">
                                                        <p>Total Ups</p>
                                                        <h4>95</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pad-0">
                                                    <div className="inside-card3">
                                                        <p>Total Ups</p>
                                                        <h4>95</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-main">
                                        <div className="card-pad centerCard">
                                            <h4>LEAD ANALYTICS</h4>
                                            <h5>JULY 2019</h5>
                                            <div className="col-md-12 m-top-20 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="float-right amt">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="float-right amt">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                DatePicker   <p className="displayInline">Deliveries</p>
                                                <span className="float-right amt">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="float-right amt">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="float-right amt">25</span>
                                            </div>
                                            <div className="col-md-12 m-tb-5 pad-0 ">
                                                <p className="displayInline">Deliveries</p>
                                                <span className="float-right amt">25</span>
                                            </div>
                                        </div>
                                        <div className="card-bottom">
                                            <div className="row rowMargin">
                                                <div className="col-md-4 pad-0">
                                                    <div className="inside-card1">
                                                        <p>Total Ups</p>
                                                        <h4>95</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pad-0">
                                                    <div className="inside-card2">
                                                        <p>Total Ups</p>
                                                        <h4>95</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pad-0">
                                                    <div className="inside-card3">
                                                        <p>Total Ups</p>
                                                        <h4>95</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="row rowMargin progress-bar-head">
                            <div className="col-md-2 pad-0">
                                <h2>REPORTS & ANALYTICS</h2>
                                <p className="dateSelect">07/31/2019</p>
                                <Switch style={{ backgroundColor: '#3fa4d2', fontWeight: 600 }} checkedChildren="Hide Details" unCheckedChildren="Unhide Details" defaultChecked />
                            </div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                            <div className="col-md-2 pad-0"></div>
                        </div> */}
                            <div className="m-top-20">
                                <div className="row rowMargin textInitial m-top-20">
                                    <div className="col-md-4">
                                        <div className="card-main">
                                            <div className="card-pad">
                                                <h4>CBC REPORT</h4>
                                                <div className="row m0">
                                                    <div className="col-md-6">
                                                        <div className="bg-card">
                                                            <label>CREDIT ACTIVITY</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ">
                                                        <div className="bg-card">
                                                            <label>CREDIT SCORE</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row m0">
                                                    <div className="col-md-6">
                                                        <div className="bg-card">
                                                            <label>COMPLIANCE DETAILS</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="bg-card">
                                                            <label>COMPLIANCE EXCEPTIONS</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row m0">
                                                    <div className="col-md-6">
                                                        <div className="bg-card">
                                                            <label>COMPLIANCE DETAILS</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="bg-card">
                                                            <label>COMPLIANCE EXCEPTIONS</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row m0">
                                                    <div className="col-md-6">
                                                        <div className="bg-card">
                                                            <label>COMPLIANCE DETAILS</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="bg-card">
                                                            <label>COMPLIANCE EXCEPTIONS</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-main">
                                            <div className="centerCard midForm">
                                                <h4>CUSTOMER REPORT BUILDER</h4>
                                                {/* <h5>CURRENT MONTH</h5> */}
                                                <div className="col-md-12 m-top-20 pad-0 ">
                                                    <Select className="width100" placeholder="Dealership">
                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                        <Option value="tom">Tom</Option>
                                                    </Select>
                                                    <div className="m-top-20">
                                                        <RangePicker className="width100" />
                                                    </div>
                                                    <div className="m-top-20">
                                                        <Select className="width100" placeholder="Employee Category">
                                                            <Option value="jack">Jack</Option>
                                                            <Option value="lucy">Lucy</Option>
                                                            <Option value="tom">Tom</Option>
                                                        </Select>
                                                    </div>
                                                    <div className="m-top-20">
                                                        <Select className="width100" placeholder="Employee">
                                                            <Option value="jack">Jack</Option>
                                                            <Option value="lucy">Lucy</Option>
                                                            <Option value="tom">Tom</Option>
                                                        </Select>
                                                    </div>
                                                    <div className="m-top-20">
                                                        <Select className="width100" placeholder="Analysis type">
                                                            <Option value="jack">Jack</Option>
                                                            <Option value="lucy">Lucy</Option>
                                                            <Option value="tom">Tom</Option>
                                                        </Select>
                                                    </div>
                                                    <div className="m-top-20">
                                                        <Button type="primary">Create Report</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-main pending-strip">
                                            <div className="card-pad centerCard">
                                                <h4>PENDING STIPS</h4>
                                                <div className="m-top-20 displayFlex">
                                                    <h5 className="displayInline">CUSTOMERS</h5> <h5 className="displayInline m-lft-auto float-right">DATA SENT</h5>
                                                </div>
                                                <div className="col-md-12 m-top-10 pad-0 posRelative">
                                                    <div className="lineAfter alignMiddle">
                                                        <p className="displayInline">Nick Pending</p>
                                                        <span className="float-right m-lft-auto">07-31-19</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 m-tb-5 pad-0 ">
                                                    <div className="lineAfter alignMiddle">
                                                        <p className="displayInline">Mike Frost</p>
                                                        <span className="float-right m-lft-auto">07-31-19</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 m-tb-5 pad-0 ">
                                                    <div className="lineAfter alignMiddle">
                                                        <p className="displayInline">Gus Gibbons</p>
                                                        <span className="float-right m-lft-auto">07-31-19</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 m-tb-5 pad-0 ">
                                                    <div className="lineAfter alignMiddle">
                                                        <p className="displayInline">Adam Weiss</p>
                                                        <span className="float-right m-lft-auto">07-31-19</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 m-tb-5 pad-0 ">
                                                    <div className="lineAfter alignMiddle">
                                                        <p className="displayInline">Eric Bloom</p>
                                                        <span className="float-right m-lft-auto">07-31-19</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 m-tb-5 pad-0 ">
                                                    <div className="lineAfter alignMiddle">
                                                        <p className="displayInline">Jose Rivas</p>
                                                        <span className="float-right m-lft-auto">07-31-19</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 m-tb-5 pad-0 ">
                                                    <div className="lineAfter alignMiddle">
                                                        <p className="displayInline">William Chiag</p>
                                                        <span className="float-right m-lft-auto">07-31-19</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row rowMargin">
                                <div className="col-md-12 m-top-30">
                                    <div className="tabularData">
                                        <Tabs type="card">
                                            <TabPane tab="Tab 1" key="1">
                                                <div className="row rowMargin">
                                                    <div className="col-md-4 pad-0">
                                                        <Search placeholder="Search..." className="searchBg" />
                                                    </div>
                                                    <div className="col-md-2 pad-0"><Button style={{ background: '#eaf5fd', color: '#4a4a4a' }}>FILTER</Button></div>
                                                    <div className="col-md-6">
                                                        <ul className="list-inline m0">
                                                            <li>PENDING</li>
                                                            <li>REQUIREMENTS HAVE BEEN MET</li>
                                                            <li>ACTION REQUIRED</li>
                                                            <li>NO DATA</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row rowMargin ">
                                                    <Table className="width100 m-top-30"
                                                        columns={columns}
                                                        expandable={{
                                                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                                                        }}
                                                        dataSource={data}
                                                    />
                                                </div>
                                            </TabPane>
                                            <TabPane tab="PROSPECTS" key="2">
                                                Content of Tab Pane 2
                                            </TabPane>
                                            <TabPane tab="WEBSITE" key="3">
                                                Content of Tab Pane 3
                                             </TabPane>
                                            <TabPane tab="APPOINTMENTS" key="3">
                                                Content of Tab Pane 3
                                             </TabPane>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}