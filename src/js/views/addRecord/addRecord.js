import React, {useState} from 'react';
import styles from './addRecord.module.css';
import swal from 'sweetalert';

const AddRecord = () => {

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
            "employerId": parseInt(employerId),
            "courseNumber": parseInt(courseNumber),
            "hasRecu": hasRecu,
            "descriptionName": descriptionName,
            "dateAtten": dateAtten,
            "ceCo": ceCo,
            "trainingGroup": trainingGroup,
            "name": name,
            "hours": hours,
            "days": parseFloat(days),
            "sta": sta,
            "anp": parseInt(anp),
            "insIni": insIni,
            "recurrent": recurrent,
            "oneYearExpire": oneYearExpire,
            "twoYearExpire": twoYearExpire,
            "threeYearExpire": threeYearExpire,
            "fourYearExpire": fourYearExpire
        })
console.log("data",data)
        // console.log('hey', data)

        fetch('https://3000-aaee05d3-afa1-4c57-88c2-89535a1c0b88.ws-us02.gitpod.io/addrecord', {
            method: 'POST',
            body: data,
            cors: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
            .then(res => res.json())
            .then(response => {   
                if (response.Added === "success") {
                    swal("Successfully added", "Welcome to Aircraft Training Records", "success", {
                        button: "Okay",
                        })
                } else {
                    swal("Not Added!", "not good", "error", {
                        button: "Okay",
                        })
                }
                    
                
            })
            .catch(error => {
                swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                    button: "OK",
                  })
            });
    }


    return (
        <div className={styles.main}>
            <h1 className="text-center">Add New Record</h1>

            <div className="container">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="employerId" 
                    value={employerId}
                    onChange={(e) => setemployerId(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="courseNumber" 
                    value={courseNumber}
                    onChange={(e) => setcourseNumber(e.target.value)}
                />
                 <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="hasRecu" 
                    value={hasRecu}
                    onChange={(e) => sethasRecu(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="descriptionName" 
                    value={descriptionName}
                    onChange={(e) => setdescriptionName(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="dateAtten" 
                    value={dateAtten}
                    onChange={(e) => setdateAtten(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="ceCo" 
                    value={ceCo}
                    onChange={(e) => setceCo(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="trainingGroup" 
                    value={trainingGroup}
                    onChange={(e) => settrainingGroup(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="name" 
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="hours" 
                    value={hours}
                    onChange={(e) => sethours(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="days" 
                    value={days}
                    onChange={(e) => setdays(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="sta" 
                    value={sta}
                    onChange={(e) => setsta(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="anp" 
                    value={anp}
                    onChange={(e) => setanp(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="insIni" 
                    value={insIni}
                    onChange={(e) => setinsIni(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="recurrent" 
                    value={recurrent}
                    onChange={(e) => setrecurrent(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="oneYearExpire" 
                    value={oneYearExpire}
                    onChange={(e) => setoneYearExpire(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="twoYearExpire" 
                    value={twoYearExpire}
                    onChange={(e) => settwoYearExpire(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="threeYearExpire" 
                    value={threeYearExpire}
                    onChange={(e) => setthreeYearExpire(e.target.value)}
                />
                <br/>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="fourYearExpire" 
                    value={fourYearExpire}
                    onChange={(e) => setfourYearExpire(e.target.value)}
                />
                <br/>
                <button 
                    className="form-control btn btn-primary"
                    onClick={FormHandler}
                >
                    Submit New Record
                </button>
                <br/><br/>
            </div>
        </div>
    );
};

export default AddRecord;