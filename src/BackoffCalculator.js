import React from 'react';
import Timeline from './Timeline';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import equation from './CodeCogsEqn.gif';
import githubLogo from './GitHub-Mark-32px.png';

export default class BackoffCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval_sec: 1,
      max_retries: 5,
      exponential: 1,
      maxDelay: 0,
      runNumber: [],
      runSecond: [],
      runTimestamp: [],
    };

    this.timeOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC',
      millisecond: '2-digit',
    };

    this.date = new Date();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value || '',
    });
  }

  handleSubmit(event) {
    let interval_sec = parseFloat(this.state.interval_sec);
    let max_retries = parseFloat(this.state.max_retries);
    let exponential = parseFloat(this.state.exponential);
    let maxDelay = parseFloat(this.state.maxDelay);
    let currentDate = new Date(this.date.getTime());
    let newRunNumber = [];
    let newRunSecond = [];
    let newRunTimestamp = [];
    let secsFloat = 0;

    for (let i = 0; i < max_retries; i++) {
      let secsAndMillisAdded = secsFloat * 1000;
      let updatedDate = new Date(currentDate.getTime() + secsAndMillisAdded);
      let timeString =
        updatedDate.toLocaleTimeString([], this.timeOptions) +
        ':' +
        updatedDate.getMilliseconds();

      newRunNumber.push(i);
      newRunSecond.push(secsFloat.toFixed(3));
      newRunTimestamp.push(timeString);

      let nextDelay = interval_sec * Math.pow(exponential, i);
      if (maxDelay > 0 && nextDelay > maxDelay) {
        nextDelay = maxDelay
      }
      secsFloat += maxDelay;
    }

    this.setState({
      runNumber: newRunNumber,
      runSecond: newRunSecond,
      runTimestamp: newRunTimestamp,
    });
    event.preventDefault();
  }

  amazonbusiness() {
    return {
      __html:
        '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=288&l=ur1&category=amzn_biz_bounty&banner=1CBSC7EGBAJ74Q2EWK02&f=ifr&linkID=413f3070bb36d68d72ab2ccf0f531a3d&t=investingbits-20&tracking_id=investingbits-20" width="486" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>',
    };
  }

  amazonprime() {
    return {
      __html:
        '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primemain&banner=17T0MQR5WKGJCZNRHCG2&f=ifr&linkID=be8d23f770e0dbcafb842e5543480c87&t=investingbits-20&tracking_id=investingbits-20" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>',
    };
  }

  amazonprime2() {
    return {
      __html:
        '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primemain&banner=0ED2F4P240Z22TJFNKR2&f=ifr&linkID=3392f4e08f8ab101ed6f2e23541b12fe&t=investingbits-20&tracking_id=investingbits-20" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>',
    };
  }

  epi() {
    return {
      __html:
        '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=investingbits-20&marketplace=amazon&region=US&placement=1537713949&asins=1537713949&linkId=7d9a213c66b4e951b83d05bd90478c66&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>',
    };
  }

  clrs() {
    return {
      __html:
        '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=investingbits-20&marketplace=amazon&region=US&placement=0984782850&asins=0984782850&linkId=3cae7266e0cfa24204118a534f03ca46&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>',
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={1} />

          <Col md={1}>
            <Row style={{ marginTop: '20px', float: 'right' }}>
              <div dangerouslySetInnerHTML={this.epi()} />
              <div dangerouslySetInnerHTML={this.clrs()} />
            </Row>
          </Col>

          <Col md={9}>
            <Row style={{ float: 'right' }}>
              <a
                href="https://github.com/hsiehju/exponential-backoff-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="github" />
              </a>
            </Row>
            <Row style={{ marginTop: '5px' }}>
              <Col>
                <div>
                  <h2>Exponential Backoff Calculator</h2>
                  <div style={{ float: 'left', minWidth: '300px' }}>
                    <form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col>
                          <label style={{ float: 'left' }}>
                            Interval (sec):
                          </label>
                          <input
                            style={{
                              float: 'right',
                              paddingLeft: '5px',
                              borderColor: 'black',
                            }}
                            name="interval_sec"
                            type="number"
                            step="0.1"
                            value={this.state.interval_sec}
                            onChange={this.handleChange}
                          />
                          <br />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <label style={{ float: 'left' }}>Max Retries:</label>
                          <input
                            style={{
                              float: 'right',
                              paddingLeft: '5px',
                              borderColor: 'black',
                            }}
                            name="max_retries"
                            type="number"
                            step="1"
                            value={this.state.max_retries}
                            onChange={this.handleChange}
                          />
                          <br />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <label style={{ float: 'left' }}>Exponential:</label>
                          <input
                            style={{
                              float: 'right',
                              paddingLeft: '5px',
                              borderColor: 'black',
                            }}
                            name="exponential"
                            type="number"
                            step="0.1"
                            value={this.state.exponential}
                            onChange={this.handleChange}
                          />
                          <br />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <label style={{ float: 'left' }}>Max Delay:</label>
                          <input
                            style={{
                              float: 'right',
                              paddingLeft: '5px',
                              borderColor: 'black',
                            }}
                            name="maxDelay"
                            type="number"
                            step="0.1"
                            value={this.state.maxDelay}
                            onChange={this.handleChange}
                          />
                          <br />
                        </Col>
                      </Row>
                      <button
                        style={{
                          float: 'right',
                          backgroundColor: '#e7e7e7',
                          color: 'black',
                        }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div style={{ marginTop: '170px' }}>
                  <h2>Additional Info</h2>
                  <p>
                    A retry strategy is an important concept when developing
                    distributed systems because it can increase a service's
                    reliability ten-fold. We can use an exponential backoff
                    algorithm for the retry strategy to ensure that our service
                    doesn't cause a total outage to our dependencies.
                  </p>

                  <p>
                    This tool helps visualize an exponential retry strategy
                    based on a number of parameters (interval (seconds), max
                    retries, exponential rate). The equation below calculates
                    the time (in seconds) from the first call:
                  </p>
                  <Row>
                    <Col style={{ textAlign: 'center' }}>
                      <img
                        src={equation}
                        alt="equation"
                        style={{ marginBottom: '30px' }}
                      />
                    </Col>
                  </Row>

                  <p>
                    A practical example of an exponential backoff is in <nbsp />
                    <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html#error-handling-retrying-after-an-error">
                      AWS Step Functions error handling.
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <Timeline
                  runNumber={this.state.runNumber}
                  runSecond={this.state.runSecond}
                  runTimestamp={this.state.runTimestamp}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
