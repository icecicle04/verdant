import { Component } from "react";


class ArticleContainer extends Component {

    state = {
        loading: true,
        result: {},
        search: ""
    };
    
    async componentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=plant&apiKey=e84ad28e61fb42a39ee301879b3bbc5e"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.articles[0])
        this.setState({result:data.articles[0], loading:false})
    }

    render() {
        return (
            <div> 
                <h1>{this.state.result.title}</h1>
                <h3>Article by: {this.state.result.author}</h3>
               <a> Link to article: {this.state.result.url}</a>
                <p><img src={this.state.result.urlToImage} ></img></p>
                <p> {this.state.result.description}</p>
            </div>
        )
    }

    }
export default ArticleContainer;
