import React, { useState } from 'react';
import styles from './delCourseFromRecords.module.css';

const ShowCourseToDel = () => {

    // const {trainData} = useContext(UserContext);
    const [myValue, setMyValue] = useState('');

    const [newRecords, setNewRecords] = useState();

    const searchMyRecords = () => {
        console.log("dwwe", myValue)

        fetch('https://aircraft-record-backend.herokuapp.com/traindata', {
            method: 'POST',
            body:JSON.stringify({
                    "employerId": myValue
                }),
            cors: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                setNewRecords(response)
            })
            .catch(error => {
                alert("Something Went Wrong!", error)
            });
    }

    console.log(newRecords)

    return (
        <div className={styles.main}>  

            <label>Insert Your Employer ID</label>
            <input type="text" placeholder="Example: 123343" onChange={(e) => setMyValue(e.target.value)} />
            <button onClick={searchMyRecords}>Search records</button>

           
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employer ID</th>
                    <th scope="col">Course Number</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">STA</th>
                    <th scope="col">DateAtten</th>
                    <th scope="col">ANP</th>
                    <th scope="col">Delete:Yes</th>
                    </tr>
                </thead>
                <tbody>
                    {!newRecords ? "loading..." : newRecords.map((items,index) => {
                        return (
                                <tr key={index}>
                                    <td>{items.name}</td>
                                    <td>{items.employerId}</td>
                                    <td>{items.courseNumber}</td>
                                    <td>{items.descriptionName}</td>
                                    <td>{items.sta}</td>
                                    <td>{items.dateAtten}</td>
                                    <td>{items.anp}</td>
                                </tr>
                            
                        
                        )
                    }).sort()}
         </tbody>
                </table>
        </div>
    );
};

export default ShowCourseToDel;
