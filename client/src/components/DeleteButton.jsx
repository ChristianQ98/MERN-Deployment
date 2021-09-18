import axios from 'axios';

const DeleteButton = (props) => {
    const { pirateId, successfulCallback } = props;

    const deletePirate = (e) => {
        if(window.confirm('Are you sure you would like to delete this pirate? \n Warning: CANNOT BE UNDONE')) {
            axios.delete('http://localhost:8000/api/pirates/' + pirateId)
            .then(res => {
                console.log(res);
                successfulCallback();
            }) 
            .catch(err => console.log(err));
        }
    }

    return (
        <button className="btn btn-danger" onClick={ deletePirate }>Walk the Plank</button>
    )
};

export default DeleteButton;