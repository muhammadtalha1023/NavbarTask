import Body from "./AppBody";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './Tb.css';


function TabsFunction() {
  return (
    <Tab.Container id="end-tabs-example" defaultActiveKey="first">
      <Row>
          
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Body />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Body />
            </Tab.Pane>
            <Tab.Pane  eventKey="third">
              <Body />
              </Tab.Pane>
          </Tab.Content>
            
          <Nav className="mb-3" justify>
            <Nav.Item>
              <Nav.Link  eventKey="first" className="first"><b>The Watch</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="second"><b>The blast of details</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="third"><b>Small and powerfull</b></Nav.Link>
            </Nav.Item>
          </Nav>
      </Row>
    </Tab.Container>
  );
}

export default TabsFunction;
