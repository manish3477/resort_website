import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'

export default class Service extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                icon: <FaHiking />,
                title: "End less hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle van",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section >
        )
    }
}
