import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../../../assets/img/categories/tennis.jpg';
import image2 from '../../../assets/img/categories/soccer.jpg';
import image3 from '../../../assets/img/categories/skiing.jpg';
import image4 from '../../../assets/img/categories/biking.jpg';
import image5 from '../../../assets/img/categories/basketball.jpg';
import image6 from '../../../assets/img/categories/volleyball.jpg';
import styles from '../../../assets/jss/views/homePageStyles/categoriesStyles.jss';

const useStyles = createUseStyles(styles);

const Categories: React.FC = (props) => {
    const classes = useStyles();
    return (
        <Container fluid className={classes.container}>
            <div className={classes.titleWrapper}>
                <div className={classes.title}>Most popular activities</div>
            </div>
            <Row className={classes.group}>
                <Col xs={6} md={4} lg={2} className={classes.imageContainer}>
                    <Image src={image1} fluid className={classes.image} />
                    <div className={classes.shade} />
                    <div className={classes.categoryTitleContainer}>
                        <p className={classes.categoryTitle}>Tennis</p>
                    </div>
                </Col>
                <Col xs={6} md={4} lg={2} className={classes.imageContainer}>
                    <Image src={image2} fluid className={classes.image} />
                    <div className={classes.shade} />
                    <div className={classes.categoryTitleContainer}>
                        <p className={classes.categoryTitle}>Soccer</p>
                    </div>
                </Col>
                <Col xs={6} md={4} lg={2} className={classes.imageContainer}>
                    <Image src={image3} fluid className={classes.image} />
                    <div className={classes.shade} />
                    <div className={classes.categoryTitleContainer}>
                        <p className={classes.categoryTitle}>Skiing</p>
                    </div>
                </Col>
                <Col xs={6} md={4} lg={2} className={classes.imageContainer}>
                    <Image src={image4} fluid className={classes.image} />
                    <div className={classes.shade} />
                    <div className={classes.categoryTitleContainer}>
                        <p className={classes.categoryTitle}>Biking</p>
                    </div>
                </Col>
                <Col xs={6} md={4} lg={2} className={classes.imageContainer}>
                    <Image src={image5} fluid className={classes.image} />
                    <div className={classes.shade} />
                    <div className={classes.categoryTitleContainer}>
                        <p className={classes.categoryTitle}>Basketball</p>
                    </div>
                </Col>
                <Col xs={6} md={4} lg={2} className={classes.imageContainer}>
                    <Image src={image6} fluid className={classes.image} />
                    <div className={classes.shade} />
                    <div className={classes.categoryTitleContainer}>
                        <p className={classes.categoryTitle}>Volleyball</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

Categories.propTypes = {};

export default Categories;
