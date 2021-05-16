import React from 'react';
import Tables from '../Tables/Tables';
import Spinner from "../../Spinner/Spinner"
import '../../css/Tables.css';

const Display = (props) => {
    const {selectedTag,articles} = props;
    console.log(articles);
    const visible = ()=>{

      if(articles.length !==  0){
        return(
        <div class="jumbotron">
        <div class="container">
          {articles.map((article) => {
            return (
              <Tables
                key={article.id}
                selectedTag={selectedTag}
                article={article}
              />
            );
          })}
        </div>
      </div>
        )
      } else{
        return(
          <Spinner />
        )
      }
    }
      return (
      <>
      { visible()}
      </>
    );
  };

export default Display;