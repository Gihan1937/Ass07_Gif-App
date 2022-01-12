import React from 'react'

function GifCard(props){
  return (
    <div className= "image" >
        <img src={props.url}  class="img-thumbnail float-center" alt='Gif Image'></img>
          
    </div>
  )
}
export default GifCard;
