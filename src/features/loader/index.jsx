import {useState, useEffect} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Audio} from 'react-loader-spinner'

function Loading() {

    return (
            <Audio
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />

    )

}

export default Loading;


