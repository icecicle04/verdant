import { Component } from "react";

class ArticleContainer extends Component {

    state = {
        loading: true,
        result: {},
        search: ""
    };
    
    async componentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=plant&apiKey=2bdd9ba65e244c398dfcfe644ef1c1be"
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.articles)
        this.setState({result:data.articles[0], loading:false})
    }

    render() {
        return (
            <div> 
                <h1>{this.state.result.title}</h1>
                <h3>Article by: {this.state.result.author}</h3>
               <a href="{this.state.result.url}"> Click to read more </a>
                <p><img src={this.state.result.urlToImage} alt="text" ></img></p>
                <p> {this.state.result.description}</p>
            </div>
        )
    }

    }
export default ArticleContainer;
