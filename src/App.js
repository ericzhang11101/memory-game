import Header from './components/Header.js'
import Card from './components/Card.js'
import NewHighScoreModal from './components/NewHighScoreModal.js';
import LoseModal from './components/LoseModal'
import DarkScreen from './components/DarkScreen'
import uniqid from 'uniqid'
import React, {useState} from 'react';
import './style.css';

let cardArr = [
  {
    img: "https://i.imgur.com/uNRj0Ju_d.webp?maxwidth=760&fidelity=grand",
    name: "Morphling",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/0K1e2Hu_d.webp?maxwidth=760&fidelity=grand",
    name: "Naga Siren",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/JDrSbeu_d.webp?maxwidth=760&fidelity=grand",
    name: "Shadow Fiend",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/9NAXwns_d.webp?maxwidth=760&fidelity=grand",
    name: "Templar Assassin",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/rZAmEyn_d.webp?maxwidth=760&fidelity=grand",
    name: "Terrorblade",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/sKA5x7n_d.webp?maxwidth=760&fidelity=grand",
    name: "Invoker",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/3ASlW4M_d.webp?maxwidth=760&fidelity=grand",
    name: "Queen of Pain",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/JiwC6QW_d.webp?maxwidth=760&fidelity=grand",
    name: "Puck",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/8Lv5o9V_d.webp?maxwidth=760&fidelity=grand",
    name: "Ursa",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/LsmYhwB_d.webp?maxwidth=760&fidelity=grand",
    name: "Chaos Knight",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/p7lG4MQ_d.webp?maxwidth=760&fidelity=grand",
    name: "Bristleback",
    id: uniqid(), 
    clicked: false
  },
  // {
  //   img: "https://i.imgur.com/GxTzGpn_d.webp?maxwidth=760&fidelity=grand",
  //   name: "Timbersaw",
  //   id: uniqid(), 
  //   clicked: false
  // },
  {
    img: "https://i.imgur.com/xWAYEop_d.webp?maxwidth=760&fidelity=grand",
    name: "Wraith King",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/SVg7q9b_d.webp?maxwidth=760&fidelity=grand",
    name: "Sven",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/IrZ9vlr_d.webp?maxwidth=760&fidelity=grand",
    name: "Phantom Assassin",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/T2R9J2a_d.webp?maxwidth=760&fidelity=grand",
    name: "Luna",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/JEXB8PQ_d.webp?maxwidth=760&fidelity=grand",
    name: "Faceless Void",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/u952Gn0_d.webp?maxwidth=760&fidelity=grand",
    name: "Storm Spirit",
    id: uniqid(), 
    clicked: false
  },
  {
    img: "https://i.imgur.com/rILDsnB_d.webp?maxwidth=760&fidelity=grand",
    name: "Monkey King",
    id: uniqid(), 
    clicked: false
  },
  // {
  //   img: "https://i.imgur.com/qVHTip3_d.webp?maxwidth=760&fidelity=grand",
  //   name: "Tiny",
  //   id: uniqid(), 
  //   clicked: false
  // }
]

function App() {
  const [cards, setCards] = useState(cardArr)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function incrementScore(){
    setScore(score+1)
  }

  function resetGame(){
    if (score> highScore) {
      setHighScore(score)
      showScoreModal()
    }
    else showLoseModal()
    // reset cards
    let arr = []
    let tempArr = [...cards]
    console.log(cards)
    for (let i = 0; i < cards.length; i++){
      let temp = tempArr[i]
      temp.clicked = false
      arr.push(temp)
    }
    randomize()
    setScore(0)
  }

  function hideModals(){
    hideLoseModal()
    hideScoreModal()
    document.getElementById('darkScreen').style.display = 'none'
  }

  function hideLoseModal(){
    document.getElementById('loseModal').style.display = "none";
    document.getElementById('darkScreen').style.display = 'none'
    setScore(0)
    randomize()
  }

  function hideScoreModal(){
    document.getElementById('scoreModal').style.display = 'none'
    document.getElementById('darkScreen').style.display = 'none'

  }

  function showLoseModal(){
    document.getElementById('darkScreen').style.display = 'block'
    document.getElementById('loseModal').style.display = "block";
  }

  function showScoreModal(){
    document.getElementById('darkScreen').style.display = 'block'
    document.getElementById('scoreModal').style.display = 'block'
  }
  
  function randomize(){
    let arr = [...cards]
    for (let i = 0; i < cards.length; i++){
      let index = Math.floor(Math.random() * cards.length)
      let temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
    setCards(arr)
  }

  function handleClick(id){
    //  Check click
    for (let i = 0; i < cards.length; i++){
      if (cards[i].id === id){
        console.log('found')
        if (cards[i].clicked){          
          resetGame()
        }
        else{
          // Set clicked
          let arr = [...cards]
          let tempCard = arr[i]
          tempCard.clicked = true
          arr.splice(i, 1, tempCard)
          setCards(arr)

          console.log(cards)
          incrementScore()
          randomize()
          break;
        }
        
      }
    }
    
  }

 
  return (
    <div className="App">
      <Header 
        score={score}
        highScore={highScore}
      />
      <div className="card-container">
        {
          cards.map((card) => {
            return (
              <Card 
                link={card.img}
                name={card.name}
                id={card.id}
                onPress={handleClick}
              />
            )
          })
        }
      <LoseModal score={score} onPress={hideLoseModal}/>
      <NewHighScoreModal score={score} onPress={hideScoreModal}/>
      <DarkScreen onPress={hideModals}/>
      </div>
    </div>
  );
}

export default App;
