import React from "react";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        
        return (
            <div className="article">
                <a href={this.props.article.link}>{this.props.article.title}</a>
                <div className="smallSpace"></div>
            </div>
        )
    }
}

export default Article;