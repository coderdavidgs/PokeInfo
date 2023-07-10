import styles from './styles/App.module.css';
import getData from './services/getData';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [pokeName, setPokeName] = useState('');
  const [type, setType] = useState('');
  const [skills, setSkills] = useState([]);
  const [image, setImage] = useState('./pikachu.png');

  function handleSetName(e){
    setName(e.target.value);
  }

  async function handleSubmitName(){
    const result = await getData(name);
    console.log(result.data);
    setPokeName(result.data.name);
    setType(result.data.types[0].type.name);
    let pokeAbilities = result.data.abilities;
    setSkills(pokeAbilities);
    setImage(result.data.sprites.other.dream_world.front_default)
  }

  return (
    <div className={styles['main']}>
      <div className={styles['screen']}>
        <div className={styles['screen-part-one']}>
          <img src={image} width='150'/>
          <h2>Name: <span className={styles['result']}>{pokeName}</span> </h2>
          <h2>Type: <span className={styles['result']}>{type}</span> </h2>
        </div>
        
        <div className={styles['screen-part-two']}>
          <h2>Skills: </h2>
            <ul>
              {skills.map((item) => {
                return(
                  <li className={styles['result']}>{item.ability.name}</li>
                )
              })}
            </ul>
        </div>
      </div>

      <div className={styles['search']}>
        <h2>Type it the pokemon name</h2>
        <input type='text' onChange={handleSetName} value={name}/>
        <button onClick={handleSubmitName}>
          Search
        </button>
      </div> 
    </div>
  );
}

export default App;
