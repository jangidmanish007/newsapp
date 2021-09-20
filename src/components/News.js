import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {


    //api from news api website for only cricket news
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "'Afghanistan boycott would harm country'",
            "description": "Why a boycott of Afghanistan's men's cricket team would harm country's women's players.",
            "url": "http://www.bbc.co.uk/sport/cricket/58595784",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/84DA/production/_120601043_afghanistan2.jpg",
            "publishedAt": "2021-09-17T18:07:42.2117352Z",
            "content": "Cricket in Afghanistan has flourished in the last 20 years\r\nUntil a few weeks ago, Tuba Sangar had a job as women's development manager at the Afghanistan Cricket Board.\r\nNow she is speaking to me fo… [+11939 chars]"
        }
    ]

    //using News top headlines api with fetch method  
    constructor() {
        super();
        // console.log('hello i am a construster');
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:[]
        }
    }


    //  componentdidMount is a life cyle method  //ak async function apni body me wait krta hai kuch function ke resolve hone ka uske baad run hota hai

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f5b306c8ff94b41bb4f02034fa52f98&page=1&pageSize=${this.props.pageSize}` //api key
        let data = await fetch(url);
        let parsedData = await data.json();                                         //json file store in this variable
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });//for display aritcle on page
    }

    GotoPrev = async () => {
        console.log("gotoPrev")                                                   //for go to prev page of the news api


        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f5b306c8ff94b41bb4f02034fa52f98&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
        window.scrollTo(0, 0)
    }

    GotoNext = async () => {
        console.log("gotoNext")                                       //for go to prev page of the news api

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f5b306c8ff94b41bb4f02034fa52f98&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        });
        window.scrollTo(0, 0)
    }

    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2 className="text-capitalize text-center">DailyNews - Today's top headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return <div className="col-lg-4 col-md-6 my-4" key={element.url}>
                            <NewsItems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : "The tour was to get underway with the first of the three one-dayers in Rawalpindi"} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                    })}
                </div>
                <div className="container d-flex justify-content-evenly my-5">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-danger mx-3 shadow-lg border-white" onClick={this.GotoPrev}>&#8592; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger mx-3 shadow-lg border-white" onClick={this.GotoNext}>Next &#8594;</button>
                </div>
            </div>
        )
    }
}

export default News





//disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/ 20)}:- this is used for at the end of page the button will be disebled
 //disabled={this.state.page <= 1} :- this is used for if you are on first page then you will not access on previus page   
//title={element.title ? element.title.slice(0, 40) : ""}:- this method is used for the title if title will be large than u can split and short the title  