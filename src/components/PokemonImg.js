import React, { useEffect, useState } from 'react';
import axios from 'axios';

//DEE Chat-gpt did all the heavy lifting, let's refactor and be a bit more clever
const PokemonImg = ({ pokemonId }) => {

    const [imageURL, setImage] = useState("");
    console.log("Her is the id we have received " + pokemonId);
    useEffect(() => {
        let tempValue = pokemonId;
        //Using axios, we have to covert the response to a blob 
        axios.post('http://localhost:3085/pokemon/image', { number: tempValue} , {responseType: 'blob' })
        .then(response => {
            // Use the built-in url to create a loadable url
            //const coverURL = URL.createObjectURL(response.data);
            console.log(response.data);
            const imageURL = URL.createObjectURL(response.data);
            setImage(imageURL);
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
    }, []);

    if(!imageURL){
        return <div><p>No image</p></div>
    }
    /*
        const [coverURL, setCover] = useState("");
        useEffect(() => {
        let tempValue = bookId;
        //Using axios, we have to covert the response to a blob 
        axios.post('http://localhost:3088/books/cover', { number: tempValue} , {responseType: 'blob' })
        .then(response => {
            // Use the built-in url to create a loadable url
            //const coverURL = URL.createObjectURL(response.data);
            console.log(response.data);
            const coverURL = URL.createObjectURL(response.data);
            setCover(coverURL);
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
    }, []);
    <div>
        {coverURL && <img src={coverURL} alt="No book cover"/>}
    </div>
    */
    
  return (
    <div>
        {imageURL && <img src={imageURL} alt="No image found"/>}
    </div>
  );
};

export default PokemonImg;