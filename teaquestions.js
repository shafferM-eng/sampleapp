import React from "react";
import Quiz from "./Quiz";

const questions = [
  {
    question: "Do you prefer your tea with or without caffeine?",
    answers: {
      A: "With caffeine",
      B: "Without caffeine"
    }
  },
  {
    question: "What is your preferred flavor profile?",
    answers: {
      A: "Bold and robust",
      B: "Light and refreshing",
      C: "Sweet and fruity",
      D: "Floral and fragrant"
    }
  },
  {
    question: "What time of day do you typically drink tea?",
    answers: {
      A: "In the morning",
      B: "In the afternoon",
      C: "In the evening"
    }
  },
  {
    question: "What is your desired effect from drinking tea?",
    answers: {
      A: "Energy boost",
      B: "Relaxation",
      C: "Digestive aid",
      D: "Immune support"
    }
  },
  {
    question: "What is your preferred tea type?",
    answers: {
      A: "Green tea",
      B: "Black tea",
      C: "White tea",
      D: "Herbal tea",
      E: "Oolong tea"
    }
  },
  {
    question: "What is your favorite fruit?",
    answers: {
      A: "Peach",
      B: "Blueberry",
      C: "Coconut",
      D: "Mango"
    }
  },
  {
    question: "What is your favorite herb?",
    answers: {
      A: "Chamomile",
      B: "Lavender",
      C: "Peppermint",
      D: "Licorice"
    }
  },]; 
  // The array of quiz questions
const teas = {
  "Dragonwell Green Tea": {
    flavor: "Light and refreshing",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Green tea",
    favoriteFruit: null,
    favoriteHerb: null,
    caffeine: true
  },
  "Earl Grey Black Tea": {
    flavor: "Bold and robust",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Black tea",
    favoriteFruit: null,
    favoriteHerb: null,
    caffeine: true
  },
  "Sencha Green Tea": {
    flavor: "Light and refreshing",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Green tea",
    favoriteFruit: null,
    favoriteHerb: null,
    caffeine: true
  },
  "Chamomile and Lavender Tea": {
    flavor: "Floral and fragrant",
    timeOfDay: ["Evening"],
    effect: ["Relaxation"],
    type: "Herbal tea",
    favoriteFruit: null,
    favoriteHerb: "Chamomile",
    caffeine: false
  },
  "Matcha Green Tea": {
    flavor: "Bold and robust",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Green tea",
    favoriteFruit: null,
    favoriteHerb: null,
    caffeine: true
  },
  "Peach and Mango Green Tea": {
    flavor: "Sweet and fruity",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Green tea",
    favoriteFruit: "Peach",
    favoriteHerb: null,
    caffeine: true
  },
  "Peppermint and Licorice Tea": {
    flavor: "Sweet and fruity",
    timeOfDay: ["Evening"],
    effect: ["Relaxation"],
    type: "Herbal tea",
    favoriteFruit: null,
    favoriteHerb: "Peppermint",
    caffeine: false
  },
  "Lemon Verbena and Mint Tea": {
    flavor: "Light and refreshing",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Herbal tea",
    favoriteFruit: null,
    favoriteHerb: "Mint",
    caffeine: false
  },
  "Assam Black Tea": {
    flavor: "Bold and robust",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Black tea",
    favoriteFruit: null,
    favoriteHerb: null,
    caffeine: true
  },
  "Vanilla Oolong Tea": {
    flavor: "Sweet and fruity",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Oolong tea",
    favoriteFruit: null,
    favoriteHerb: null,
    caffeine: true
  },
  "Chocolate Mint Black Tea": {
    flavor: "Sweet and fruity",
    timeOfDay: ["Morning", "Afternoon"],
    effect: ["Energy boost"],
    type: "Black tea",
    favoriteFruit: null,
    favoriteHerb: "Mint",
    caffeine: true
  }, 

}; // The object containing information about different types of teas


const App = () => {
  return (
    <div>
      <Quiz questions={questions} teas={teas} />
    </div>
  );
};

export default App;


