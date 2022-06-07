import React, {useState,useEffect} from "react";
import getMergeSortAnimations from "../SortingAlgorithms/mergeSort";
import './SortingVisualizer.css';

const SortingVisualizer = () => {
    const [array,setArray] = useState([]);
    useEffect(() => {
        resetArray();
    },[])
    const resetArray = () => {
        const array = [];
        for (let i = 0; i < 50; i++) {
            array.push(randomIntFromInterval(5, 430));
        }
        setArray(array);
    }
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return(
        <div className="array-container">
            {array.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{
                        backgroundColor: "blue",
                        height: `${value}px`,
                    }}>
                </div>
            ))}
            <button onClick={() => resetArray()}>Generate New Array</button>
            <button onClick={() => mergeSortAnimation()}>Merge Sort</button>
        </div>
    )
}

export default SortingVisualizer;