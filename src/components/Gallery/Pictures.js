import React from "react";

import m1 from  "../../Assets/chara_a_mosuo_minority_girl_sitting_in_a_boad_which_is_floating_91863f2c-fc6b-43e2-88d8-59c982e977ad.png"
import m2 from  "../../Assets/chara_a_beautiful_planet_a_mosuo_minority_girls_and_boys_play_o_395215e4-1a24-4540-ab56-b5b6fe69099a.png"
import m3 from  "../../Assets/chara_a_group_of_mosuo_minority_girls_standing_at_a_floral_land_814469b4-d74f-4a09-89e5-63f595d9aff3.png"


import p1 from '../../Assets/pre.jpg';
import p2 from'../../Assets/pre2.jpg';
import p3 from'../../Assets/pre4.jpg';
import p4 from'../../Assets/48fed343c42f4859a26eae9129378bfd.jpeg';
import p5 from'../../Assets/0f34ae34734615ed530d13261b5f7b08.jpeg';


function Picture() {
    return (
        <div className="gallery-wrap">
            <h1 className="heading-name" style={{color:"white"}}>
                Geographic Location
            </h1>
            {/*<img src={m1}*/}
            {/*     alt="col1"*/}
            {/*     className="pictures"*/}
            {/*/>*/}
            {/*<img src={m2}*/}
            {/*     alt="col1"*/}
            {/*     className="pictures"*/}
            {/*/>*/}
            {/*<img src={m3}*/}
            {/*     alt="col1"*/}
            {/*     className="pictures"*/}
            {/*/>*/}
            <img src={p1}
                 alt="col1"
                 className="pictures"
            />
            <img src={p4}
                 alt="col1"
                 className="pictures"
            />
            <img src={p5}
                 alt="col1"
                 className="pictures"
            />
            <h1 className="heading-name" style={{color:"white"}}>
                Ethnic People
            </h1>

            <img src={p3}
                 alt="col1"
                 className="pictures"
            />
            <img src={p2}
                 alt="col1"
                 className="pictures"
            />
        </div>
    );
}

export default Picture;


