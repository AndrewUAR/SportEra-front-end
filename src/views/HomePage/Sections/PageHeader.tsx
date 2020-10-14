import React, { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Carousel from 'react-bootstrap/esm/Carousel';
import image1 from '../../../assets/img/slider/slide_1.jpg';
import image2 from '../../../assets/img/slider/slide_2.jpg';
import image3 from '../../../assets/img/slider/slide_3.jpg';
import styles from '../../../assets/jss/views/homePageStyles/homePageStyles.jss';

const useStyles = createUseStyles(styles);

const PageHeader: React.FC = () => {
    const classes = useStyles();

    const [index, setIndex] = useState(0);
    const inputEl = useRef<HTMLDivElement>(null);

    const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null): void => {
        if (inputEl.current !== null) {
            console.log(inputEl.current);
            inputEl.current.focus();
        }
        setIndex(selectedIndex);
    };

    return (
        <div className={classes.sliderContainer}>
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item ref={inputEl}>
                    <img className={classes.slideImage} src={image1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item ref={inputEl}>
                    <img className={classes.slideImage} src={image2} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item ref={inputEl}>
                    <img className={classes.slideImage} src={image3} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default PageHeader;
