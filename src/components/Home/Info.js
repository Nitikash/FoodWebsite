import React from 'react'
import {Link} from "gatsby"
import Title from "../Globals/Title";
export default function Info() {
    return (
        <section className="py-5">
        <div className="container">
        <Title title="our story" />
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">
            Eating well should be simple yet finding the time to make delicious, wholesome meals is hard. We’re changing that by preparing delicious recipes of your choice, so that you can feel good about eating, that would be on your doorstep in minutes. And taste better than you ever thought frozen food could.
            </p>
            <Link to="/about/">
            <button className="btn text-uppercase btn-yellow">
                about page
            </button>
            </Link>
            </div>
            </div>
        </div>
        </section>
    )
}
