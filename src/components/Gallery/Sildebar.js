import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import p1 from  "../../Assets/chara_a_mosuo_minority_girl_sitting_in_a_boad_which_is_floating_91863f2c-fc6b-43e2-88d8-59c982e977ad.png"
import p2 from  "../../Assets/chara_a_beautiful_planet_a_mosuo_minority_girls_and_boys_play_o_395215e4-1a24-4540-ab56-b5b6fe69099a.png"
import p3 from  "../../Assets/chara_a_group_of_mosuo_minority_girls_standing_at_a_floral_land_814469b4-d74f-4a09-89e5-63f595d9aff3.png"

function Sildebar() {
    return (
        <div style={{color:"white",margin: "5vh"}}>
            <h1 className="heading-name" style={{color:"white",margin: "5vh"}}>
                Concept Map
            </h1>
        <div className="carousel">

            <Carousel.Item className="item">
                <img
                    className="carousel-img"
                    src={p1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="carousel-img"
                    src={p2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="carousel-img"
                    src={p3}
                    alt="First slide"
                />
            </Carousel.Item>
        </div>

        </div>
    );
}

export default Sildebar;
