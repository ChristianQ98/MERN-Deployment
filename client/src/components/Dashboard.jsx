import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css';
import { useHistory } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Dashboard = (props) => {
    const [ pirates, setPirates ] = useState([]);
    const history = useHistory();
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = (pirateId) => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
    }   

    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
                <h1>Pirate Crew</h1>
                <button className="btn btn-primary" onClick={ () => history.push('/pirate/new') }>Add Pirate</button>
            </div>
            <div className={ styles.main }>
                { pirates.map( (pirate,idx) => {
                    return (
                        <div className={ styles.pirateBox } key={ idx }>
                            <div className={ styles.img }>
                                <img src={`${pirate.imageUrl}`} alt={`${pirate.name}`} width='20%' height='20%' style={{ border: '2px solid black' }}/>
                            </div>
                            <div className={ styles.pirateActions }>
                                <h3>{ pirate.name }</h3>
                                <div className={ styles.flexBtns }>
                                    <button className="btn btn-primary" onClick={ () => history.push(`/pirate/${pirate._id}`) }>View Pirate</button>
                                    <DeleteButton pirateId={ pirate._id } successfulCallback={ () => removeFromDom(pirate._id) }/>
                                </div>
                            </div>
                        </div>
                    )
                } ) }
            </div>
        </div>
    )
};

export default Dashboard;