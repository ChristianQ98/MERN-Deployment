import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './PirateForm.module.css';
import { useHistory } from 'react-router-dom';

const PirateForm = (props) => {
    const [ name, setName ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ numOfTreasureChests, setNumOfTreasureChests ] = useState(0);
    const [ catchPhrase, setCatchPhrase ] = useState("");
    const [ crewPosition, setCrewPosition ] = useState("");
    const [ pegLeg, setPegLeg ] = useState(true);
    const [ eyePatch, setEyePatch ] = useState(true);
    const [ hookHand, setHookHand ] = useState(true);
    const [ errors, setErrors ] = useState([]);
    const history = useHistory();
    const [ pirates, setPirates ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates', {
        name,
        imageUrl,
        numOfTreasureChests,
        catchPhrase,
        crewPosition,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(res => {
            console.log(res.data);
            history.push('/pirates');
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
        });
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
                <h1>Add Pirate</h1>
                <button className="btn btn-primary" onClick={ () => history.push('/pirates') } style={{ height: '5.5vh' }}>Crew Board</button>
            </div>
            <form onSubmit={ handleSubmit } className={ styles }>
            { errors.map( (err, index) => <p key={ index } style={{ color: 'red', top: '-10%', position: 'relative' }}>{ err }</p> ) }
                <div>
                    <input onChange={ (e) => setName(e.target.value) } value={ name } placeholder="Name"/>
                </div>
                <div>
                    <input onChange={ (e) => setImageUrl(e.target.value) } value={ imageUrl } placeholder="Image URL"/>
                </div>
                <div>
                <input type="number" onChange={ (e) => setNumOfTreasureChests(e.target.value) } value={ numOfTreasureChests } placeholder="# of Treasure Chests"/>
                </div>
                <div>
                    <input onChange={ (e) => setCatchPhrase(e.target.value) } value={ catchPhrase } placeholder="Catch Phrase"/>
                </div>
                <div>
                    { pirates.filter( pirate => (pirate.crewPosition === 'Captain')).length > 0 ? (
                    <select onChange={ (e) => setCrewPosition(e.target.value) } defaultValue="">
                        <option value=''>Select a Crew Position:</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>) : 
                    <select onChange={ (e) => setCrewPosition(e.target.value) } defaultValue="">
                        <option value=''>Select a Crew Position:</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                </select>}
                </div>
                <div style={{ width: '30%' }}>
                    
                    <p><input style={{ marginTop: '5%' }} type="checkbox" onChange={ (e) => setPegLeg(e.target.checked) } checked={ pegLeg }/><span>Peg Leg</span></p>
                    <p><input type="checkbox" onChange={ (e) => setEyePatch(e.target.checked) } checked={ eyePatch }/><span>Eye Patch</span></p>
                    <p><input type="checkbox" onChange={ (e) => setHookHand(e.target.checked) } checked={ hookHand }/><span>Hook Hand</span></p>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}

export default PirateForm;