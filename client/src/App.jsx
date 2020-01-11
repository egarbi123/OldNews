import React from "react";
import Article from "./Article.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solar: [{
                title: "SolarEdge Files Three Patent Infringement Lawsuits Against Huawei ...",
                link: "https://www.solaredge.com/us/solaredge-files-three-patent-infringement-lawsuit-against-huawei",
            }, {
                title: "SolarEdge Expanding Activity and Presence in the Brazilian ...",
                link: "https://www.solaredge.com/us/SolarEdge-expanding-activity-and-presence-in-the-brazilian-pv-market",
            }, {
                title: "Solar has become America's fastest-growing, nonpartisan ...",
                link: "https://thehill.com/blogs/pundits-blog/energy-environment/324334-solar-has-become-americas-fastest-growing-non-partisan"
            }, {
                title: "SMA America and EnergyHub partner to deliver cutting-edge solar ...",
                link: "https://www.sma-america.com/newsroom/current-news/news-details/news/4053-sma-america-and-energyhub-partner-to-deliver-cutting-edge-solar-inverter- management-for-utiliti.html"
            }, {
                title: "Fronius Takes Solar to the Next Level",
                link: "https://www.fronius.com/en-us/usa/photovoltaics/info-center/news/spi-2019-080719"
            }, {
                title: "Kahane and Sungrow join forces in Israel",
                link: "https://www.sungrowpower.com/en/news/2019/2019-10/kahane-and-sungrow-join-forces-israel"
            }, {
                title: "DoodWe beats first tier competitors on the 3.3MW rooftop ...",
                link: "https://www.goodwe.com/About/news_show/id/167.html"
            }, {
                title: "Solis Ranked 2019 TOP 10 India Inverter Supplier",
                link: "http://www.ginlong.com/conews/4634.html"
            }],
            networking: [{
                title: "Networking article",
                link: "https://www.google.com"
            }],
            medical: [{
                title: "Medical article",
                link: "https://www.google.com"
            }],
            electricCars: [{
                title: "Eaton introduces 'Breaktor,' a new high-voltage protection device for electrified vehicles",
                link: "https://www.eaton.com/us/en-us/company/news-insights/news-releases/2019/eaton-introduces-breaktor-ev.html",
            },  {
                title: "Act fast -- tax credits for GM electric cars are disappearing",
                link: "https://www.cnet.com/roadshow/news/electric-car-tax-credit-general-motors/",
            }, {
                title: "Tesla Model 3, S & X Sales Estimates In U.S. For September 2019",
                link: "https://insideevs.com/news/373157/tesla-model-3-s-x-sales-u-s-september/",
            }],
            ledDrivers: [{
                title: "SolarEdge Files Three Patent Infringement Lawsuits Against Huawei ...",
                link: "https://www.solaredge.com/us/solaredge-files-three-patent-infringement-lawsuit-against-huawei"
            }],
            computers: [{
                title: "Computers article",
                link: "https://www.google.com"
            }],
            powerSupplies: [{
                title: "MEAN WELL Becomes Official PMBus Adopter and Joins SMIF -MEAN WELL Switching Power Supply Manufacturer",
                link: "https://www.meanwell.com/newsInfo.aspx?c=4&i=793",
            }, {
                title: "Integrated point-of-load DC-DC voltage regulator",
                link: "https://www.electronicsweekly.com/news/business/integrated-point-load-dc-dc-voltage-regulator-2019-09/",
            }, {
                title: "KEMET: KC-LINK capacitor series for fast switching wide bandgap semiconductor applications",
                link: "https://www.powerelectronicsnews.com/news/news-power-components/kemet-kc-link-capacitor-series-for-fast-switching-wide-bandgap-semiconductor-applications",
            }, {
                title: "PicoBox Unveils Tiny, 56mm Power Supply",
                link: "https://www.tomshardware.com/news/picobox-tiny-psu,40425.html",
            }, {
                title: "New family of adaptable buck-boost converters delivers up to 2.5 A in a tiny footprint to shrink board space",
                link: "https://news.ti.com/new-family-adaptable-buck-boost-converters-delivers-up-to-2.5-in-tiny-footprint-to-shrink-board-space",
            }],
            military: [{
                title: "Military article",
                link: "htts://www.google.com"
            }]
        }
    }


    render() {
        return (
            <div className="appContainer">
                <div className="appContainer2">
                    <div className="app">
                        <div className="column">
                            <h3>Solar</h3>
                            {this.state.solar.map((item, index) => <Article article={item} key={index}/>)}
                            <h3>Networking</h3>
                            {this.state.networking.map((item, index) => <Article article={item} key={index}/>)}
                            <h3>Medical</h3>
                            {this.state.medical.map((item, index) => <Article article={item} key={index}/>)}
                        </div>
                        <div className="midSpace">
                            <div className="midLine"></div>
                        </div>
                        <div className="column">
                            <h3>Electric Cars</h3>
                            {this.state.electricCars.map((item, index) => <Article article={item} key={index}/>)}
                            <h3>LED Drivers</h3>
                            {this.state.ledDrivers.map((item, index) => <Article article={item} key={index}/>)}
                            <h3>Computers</h3>
                            {this.state.computers.map((item, index) => <Article article={item} key={index}/>)}
                        </div>
                        <div className="midSpace">
                            <div className="midLine"></div>
                        </div>
                        <div className="column">
                            <h3>Power Supplies</h3>
                            {this.state.powerSupplies.map((item, index) => <Article article={item} key={index}/>)}
                            <h3>Military</h3>
                            {this.state.military.map((item, index) => <Article article={item} key={index}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;