import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class CenterView extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={4}></Col>
                    <Col xs={7} md={7}>{this.props.children}</Col>
                    <Col xs={1} md={4}></Col>
                </Row>
            </Grid>
        )
    }
}
