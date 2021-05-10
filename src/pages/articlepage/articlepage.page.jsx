import React from 'react'
import './articlepage.styes.scss';
import {data} from '../../data/index';

import parse from 'html-react-parser';
function Articlepage({match}) {

    const {category , slug} = match.params;
    const title = slug.replaceAll("-"," ").replaceAll("=","?");
    let article = null;
 
    
    data.forEach(item => {
        if(item.title === title && category === item.category) article = item;
    }) 
    console.log(article);
    
    console.log(article.articleContent);
    
    

    return (
        <div className="articlepage container">
        <h1>{article.title}</h1>
            <img  src={`/images/${article.id}.jpeg`} alt={article.title}/>
        <div className="articlepage__content">{parse(article.articleContent)}</div>
        </div>
    )
}

export default Articlepage

 