import React, {useState} from 'react';
import styles from './editToUpdate.module.css';
import swal from 'sweetalert';

const EditToUpdate = () => {

     const [myEmployId, setMyEmployId] = useState('');
     const [myCourseNumber, setMyCourseNumber] = useState('');
     const [newRecord, setNewRecord] = useState();

    const [employerId,  setemployerId] = useState('');
    const [courseNumber,  setcourseNumber] = useState('');
    const [hasRecu,  sethasRecu] = useState('');
    const [descriptionName,  setdescriptionName] = useState('');
    const [dateAtten,  setdateAtten] = useState('');
    const [ceCo,  setceCo] = useState('');
    const [trainingGroup,  settrainingGroup] = useState('');
    const [name,  setname] = useState('');
    const [hours,  sethours] = useState('');
    const [days,  setdays] = useState('');
    const [sta,  setsta] = useState('');
    const [anp,  setanp] = useState('');
    const [insIni,  setinsIni] = useState('');
    const [recurrent,  setrecurrent] = useState('');
    const [oneYearExpire,  setoneYearExpire] = useState('');
    const [twoYearExpire,  settwoYearExpire] = useState('');
    const [threeYearExpire,  setthreeYearExpire] = useState('');
    const [fourYearExpire,  setfourYearExpire] = useState('');

    const FormHandler = () => { 
        let data = JSON.stringify({
            "employerId": employerId,
            "courseNumber": courseNumber,
            "hasRecu": hasRecu,
            "descriptionName": descriptionName,
            "dateAtten": dateAtten,
            "ceCo": ceCo,
            "trainingGroup": trainingGroup,
            "name": name,
            "hours": hours,
            "days": days,
            "sta": sta,
            "anp": anp,
            "insIni": insIni,
            "recurrent": recurrent,
            "oneYearExpire": oneYearExpire,
            "twoYearExpire": twoYearExpire,
            "threeYearExpire": threeYearExpire,
            "fourYearExpire": fourYearExpire
        })

    }

    const searchTheRecord = (myEmployId, myCourseNumber) => {
        console.log("dwwe", myEmployId)
        console.log("dwwe", myCourseNumber)

        fetch('https://3000-aaee05d3-afa1-4c57-88c2-89535a1c0b88.ws-us02.gitpod.io/updatetraindata'+ myEmployId + "/" + myCourseNumber, {
            method: 'PUT',
            body:JSON.stringify({

            }),
            cors: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                setNewRecord(response)
            })
            .catch(error => {
                alert("Something Went Wrong!", error)
            });
    }

    console.log(newRecord)

    return (
        <div className={styles.main}>
            <h1 className="text-center">Edit Record</h1>
            <label>Enter Employer ID:</label>
            <input type="text" placeholder="123456" onChange={(e) => setMyEmployId(e.target.value)} />
            <label>Enter Course Number:</label>
            <input type="text" placeholder="123456" onChange={(e) => setMyCourseNumber(e.target.value)} />
            <button onClick={searchTheRecord}>Search record</button>


            <div className="container">
                <input 
                    type="text" 
                    className="form-control" 
                    value={employerId}
                    onChange={(e) => setemployerId(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={courseNumber}
                    onChange={(e) => setcourseNumber(e.target.value)}
                />
                 <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={hasRecu}
                    onChange={(e) => sethasRecu(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={descriptionName}
                    onChange={(e) => setdescriptionName(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={dateAtten}
                    onChange={(e) => setdateAtten(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={ceCo}
                    onChange={(e) => setceCo(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={trainingGroup}
                    onChange={(e) => settrainingGroup(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={hours}
                    onChange={(e) => sethours(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={days}
                    onChange={(e) => setdays(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={sta}
                    onChange={(e) => setsta(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={anp}
                    onChange={(e) => setanp(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={insIni}
                    onChange={(e) => setinsIni(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={recurrent}
                    onChange={(e) => setrecurrent(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={oneYearExpire}
                    onChange={(e) => setoneYearExpire(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={twoYearExpire}
                    onChange={(e) => settwoYearExpire(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={threeYearExpire}
                    onChange={(e) => setthreeYearExpire(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    value={fourYearExpire}
                    onChange={(e) => setfourYearExpire(e.target.value)}
                />
                <br/>
                <button 
                    className="form-control btn btn-primary"
                    onClick={FormHandler}
                >
                    Submit Updated Record
                </button>
                <br/><br/>
            </div>
        </div>
    );
};

export default  EditToUpdate;