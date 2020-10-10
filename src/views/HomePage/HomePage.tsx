import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import PageHeader from './Sections/PageHeader';
import styles from '../../assets/jss/views/homePageStyles/homePageStyles.jss';
import Categories from './Sections/Categories';
import FormSection from './Sections/FormSection';

const useStyles = createUseStyles(styles);

const HomePage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.pageHeader} style={{ height: 'auto' }}>
            <PageHeader />
            <FormSection />
            <Categories />
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
