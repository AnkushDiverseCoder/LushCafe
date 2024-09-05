import { Grid } from '@/src/components/offers/Grid'
import Layouts from '@/src/layouts/Layouts'
import React from 'react'

const offers = () => {
    return (
        <Layouts>
            {/* Section Started Inner */}
            <section className="section kf-started-inner">
                <div
                    className="kf-parallax-bg js-parallax"
                    style={{
                        backgroundImage: "url(images/menu_reservation_inner_bg.jpg)",
                    }}
                />
                <div className="container">
                    <h1
                        className="kf-h-title text-anim-1 scroll-animate"
                        data-splitting="chars"
                        data-animate="active"
                    >
                        Offers
                    </h1>
                </div>
            </section>
            <Grid/>
        </Layouts>
    )
}

export default offers