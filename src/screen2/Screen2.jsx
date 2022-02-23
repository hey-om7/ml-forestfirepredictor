import React, { useState } from 'react'
import "./screen2.scss"
import InputFields from "./InputFields"

export default function Screen2() {
    const [finalResult, setFinalResult] = useState("--");
    const [xcoor, setXcoor] = useState();
    const [ycoor, setYcoor] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [isi, setIsi] = useState();
    const [temp, setTemp] = useState();
    const [rh, setRh] = useState();
    const [wind, setWind] = useState();
    const [dmc, setDmc] = useState();
    const [dc, setDc] = useState();
    const [rain, setRain] = useState();
    const [ffmc, setFfmc] = useState();

    function BtnClicked() {
        console.log("clicked");
        var tempUrl = xcoor + "/" + ycoor + "/" + month + "/" + day + "/" + isi + "/" + temp + "/" + rh + "/" + wind + "/" + dmc + "/" + dc + "/" + rain + "/" + ffmc;

        // console.log(x.value);
        fetch('http://127.0.0.1:8000/predict/' + tempUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFinalResult(data + "mm");
            })
    }
    return (
        <div className="screen2">
            <div className="heading">
                <div className="outputScreen">
                    <h1>{finalResult}</h1>
                </div>
            </div>
            <div className="body">
                <div className="row1">
                    <InputFields text="x-coordinate" type="number" changeWord={xcoor => setXcoor(xcoor)} ></InputFields>
                    <InputFields text="ISI" type="number" changeWord={isi => setIsi(isi)}></InputFields>
                    <InputFields text="DMC" type="number" changeWord={dmc => setDmc(dmc)}></InputFields>

                </div>
                <div className="row2">
                    <InputFields text="y-coordinate" type="number" changeWord={ycoor => setYcoor(ycoor)}></InputFields>
                    <InputFields text="Temperature" type="number" changeWord={temp => setTemp(temp)}></InputFields>
                    <InputFields text="DC" type="number" changeWord={dc => setDc(dc)}></InputFields>


                </div>
                <div className="row3">

                    <InputFields text="Month" changeWord={month => setMonth(month)}></InputFields>
                    <InputFields text="RH" type="number" changeWord={rh => setRh(rh)}></InputFields>
                    <InputFields text="Rain" type="number" changeWord={rain => setRain(rain)}></InputFields>

                </div>
                <div className="row4">
                    <InputFields text="Day" changeWord={day => setDay(day)}></InputFields>
                    <InputFields text="Wind" type="number" changeWord={wind => setWind(wind)}></InputFields>
                    <InputFields text="FFMC" type="number" changeWord={ffmc => setFfmc(ffmc)}></InputFields>
                </div>


            </div>
            <div className="tail">
                <div className="subBtn" onClick={BtnClicked}>
                    <h1>Predict</h1>
                </div>
            </div>
        </div>
    )
}
