import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from '../../../assets/jss/views/homePageStyles/formStyles.jss';
import FormInput from '../../../components/FormInput/FormInput';
import SelectInput from '../../../components/FormInput/SelectInput';

const useStyles = createUseStyles(styles);

const FormSection: React.FC = (props) => {
    const [place, setPlace] = useState('');

    const classes = useStyles();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPlace(event.target.value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <div className={classes.buttonWrapper}>
                    <Button className={classes.searchButton} type="submit" size="sm">
                        Find all events near me
                    </Button>
                </div>
                <div className={classes.divider}>or</div>
                <div className={classes.textWrapper}>Search for specific one</div>
                <Form className={classes.form}>
                    <FormInput
                        color="dark"
                        controlId="place"
                        label="Location"
                        name="location"
                        placeholder="Please enter your zipcode"
                        value={place}
                        onChange={onChange}
                    />
                    <Row noGutters>
                        <Col>
                            <SelectInput controlId="activity" label="Choose activity" name="activity" value="value" color="dark" />
                        </Col>
                        <Col>
                            <SelectInput controlId="activity" label="Skill level" name="activity" value="value" color="dark" />
                        </Col>
                    </Row>
                    <Button className={classes.searchButton} type="submit" size="sm">
                        Search
                    </Button>
                </Form>
            </div>
        </div>
    );
};

FormSection.propTypes = {};

export default FormSection;
