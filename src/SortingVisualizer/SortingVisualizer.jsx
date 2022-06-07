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
    const mergeSortAnimation = () => {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'yellow' : 'blue';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 45);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 45);
            }
        }
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