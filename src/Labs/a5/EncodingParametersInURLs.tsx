import React, { useState, useEffect } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
    const[a, setA] = useState(34);
    const[b, setB] = useState(23);
    const[result, setResult] = useState(0);

    const fetchSum = async (a:any, b:any) => {
        const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
        setResult(response.data);
    };

    const fetchSubtract = async (a:any, b:any) => {
        const response = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };

    useEffect(() => {
        fetchSum(a, b);
    }, []);

    useEffect(() => {
        fetchSubtract(a, b);
    }, []);

    return (
        <div>
            <h3>Encoding Parameters In URLs </h3>
            <h4>Calculator</h4>
            <input type = "number" value = {a}
                onChange = {(e:any) => setA(e.target.value)}/>
                <br/>
            <input type = "number" value = {b}
                onChange = {(e:any) => setB(e.target.value)}/>
            
            <h3>Path Parameters</h3>
            <div>
                <button type="button" className="btn btn-primary" onClick = {() => {
                    window.location.href = `http://localhost:4000/a5/add/${a}/${b}`;
                }}>Add {a} + {b}</button> &nbsp;
                <button type = "button" className="btn btn-danger" onClick = {()=>{
                    window.location.href = `http://localhost:4000/a5/subtract/${a}/${b}`;
                }}>Subtract {a} - {b}</button>
                
            </div>
            <br/>
            <div>
                <button type="button" className="btn btn-primary" onClick = {() => {
                    window.location.href = `http://localhost:4000/a5/multiply/${a}/${b}`;
                }}>Multiply {a} * {b}</button> &nbsp;
                <button type = "button" className="btn btn-danger" onClick = {()=>{
                    window.location.href = `http://localhost:4000/a5/divide/${a}/${b}`;
                }}>Divide {a} / {b}</button>
            </div>
            <br/>
            
            <h3>Query Parameters</h3>
            <div>
                <a className="btn btn-primary" href = {`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>Add {a} + {b}</a> &nbsp;
                <a className = "btn btn-danger" href = {`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>Subtract {a} - {b}</a>
            </div>
            <br/>
            <div>
                <a className="btn btn-primary" href = {`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>Multiply {a} * {b}</a> &nbsp;
                <a className = "btn btn-danger" href = {`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>Divide {a} / {b}</a>
            </div>
            <br/>

            {/* use Axios to fetch  */}
            <h3>Encoding Parameters In URLs(using axios) </h3>

            <h4>Fetch Results</h4>
            <input type = "number" value = {a}
                onChange = {(e:any) => setA(e.target.value)}/>
                <br/>
            <input type = "number" value = {b}
                onChange = {(e:any) => setB(e.target.value)}/>
                <br/>
            <input value = {result} type = "number" readOnly />
            <br/>
            <button className = "btn btn-primary btn-margin-top" onClick= {() => fetchSum(a,b)}> Fetch Sum of {a} + {b} </button> &nbsp;
            <button className = "btn btn-primary btn-danger btn-margin-top" onClick = {() => fetchSubtract(a, b)}> Fetch Subtraction of {a} - {b} </button>

        </div>
    );
}
export default EncodingParametersInURLs;