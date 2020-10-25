import React from 'react';
import { MovieItem } from './MovieItem';

export class Movies extends React.Component{
    render(){
        return this.props.movies.map((movie)=>{
            return <MovieItem movie ={movie}></MovieItem>
        });
    }
}