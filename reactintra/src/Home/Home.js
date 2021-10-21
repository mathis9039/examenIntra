import "../App.css";
import { Container, Row, Col, Form } from "react-bootstrap";

const formHome = () => {
    const [fields, handleFieldChange] = useFormFields(
        nom,
        guess
    );
    form(
        <Container fluid >
            <Row >
                <Col md="auto" >
                    <Row>
                        <Row>
                            <Container >
                                <h2>Examen intra</h2>
                            </Container>
                        </Row>
                        <fieldset>
                            <Form onSubmit>
                                <Container >
                                    <Form.Group controlId="name">
                                        <Form.Control
                                            value={fields.name}
                                            onChange={handleFieldChange}
                                            type="text"
                                            placeholder="Entrer votre nom "
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="guess">
                                        <Form.Control
                                            value={fields.guess}
                                            onChange={handleFieldChange}
                                            type="number"
                                            step=".01"
                                            min="1"
                                            max="6"
                                            placeholder="Entrer votre guess"
                                            required
                                        />
                                    </Form.Group>
                                    <Container
                                        className="cont_btn"                                >
                                        <button >ROLL IT</button>
                                    </Container>
                                </Container>
                            </Form>
                        </fieldset>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
<table>
   <tr>
       <th>Nom</th>
       <th>guess</th>
       <th>randomNumber</th>
   </tr>

   <tr>
       <td>{Nom}</td>
       <td>{guess}</td>
       <td>{randomNumber}</td>
   </tr>
</table>
export default formHome;