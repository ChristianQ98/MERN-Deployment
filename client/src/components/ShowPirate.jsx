import axios from "axios";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from './ShowPirate.module.css'

const ShowPirate = (props) => {
    const [ pirate, setPirate ] = useState("");
    const { id } = useParams();
    const history = useHistory();

    axios.get('http://localhost:8000/api/pirates/' + id)
        .then(res => setPirate(res.data))
        .catch(err => console.log(err));

    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
                <p>
                    <h1>{ pirate.name }</h1>
                    <button className="btn btn-primary" onClick={ () => history.push('/pirates') }>Crew Board</button>
                </p>
            </div>
            <div className={ styles.main }>
                <div className={ styles.box } style={{ width: '30%' }}>
                    <img src={`${pirate.imageUrl}`} alt={`${pirate.name}`} width='80%' height='80%'/>
                    <h2>{`"${pirate.catchPhrase}"`}</h2>
                </div>
                <div className={ styles.box } style={{ width: '30%' }}>
                    <h3>About</h3>
                    <p>Position: {pirate.crewPosition}</p>
                    <p>Treasures: {pirate.numOfTreasureChests}</p>
                        <p>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</p>
                        <p>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</p>
                        <p> Hook Hand: {pirate.hookHand ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowPirate;