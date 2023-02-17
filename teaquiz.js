const handleQuizSubmit = (event) => {
    event.preventDefault();
  
    // Create an object to store the user's quiz responses
    const userResponses = {
      teaType: null,
      flavorProfile: null,
      timeOfDay: null,
      effect: null,
      favoriteFruit: null,
      favoriteHerb: null,
      caffeine: null,
    };
  
    // Iterate through each question in the quiz
    quizQuestions.forEach((question, questionIndex) => {
      const selectedAnswer = document.querySelector(`input[name="question-${questionIndex}"]:checked`).value;
  
      // Store the selected answer in the userResponses object
      switch (questionIndex) {
        case 0:
          userResponses.caffeine = (selectedAnswer === "With caffeine");
          break;
        case 1:
          switch (selectedAnswer) {
            case "Bold and robust":
              userResponses.flavorProfile = "Bold and robust";
              break;
            case "Light and refreshing":
              userResponses.flavorProfile = "Light and refreshing";
              break;
            case "Sweet and fruity":
              userResponses.flavorProfile = "Sweet and fruity";
              break;
            case "Floral and fragrant":
              userResponses.flavorProfile = "Floral and fragrant";
              break;
          }
          break;
        case 2:
          switch (selectedAnswer) {
            case "In the morning":
              userResponses.timeOfDay = "Morning";
              break;
            case "In the afternoon":
              userResponses.timeOfDay = "Afternoon";
              break;
            case "In the evening":
              userResponses.timeOfDay = "Evening";
              break;
          }
          break;
        case 3:
          switch (selectedAnswer) {
            case "Energy boost":
              userResponses.effect = "Energy boost";
              break;
            case "Relaxation":
              userResponses.effect = "Relaxation";
              break;
            case "Digestive aid":
              userResponses.effect = "Digestive aid";
              break;
            case "Immune support":
              userResponses.effect = "Immune support";
              break;
          }
          break;
        case 4:
          switch (selectedAnswer) {
            case "Green tea":
              userResponses.teaType = "Green tea";
              break;
            case "Black tea":
              userResponses.teaType = "Black tea";
              break;
            case "White tea":
              userResponses.teaType = "White tea";
              break;
            case "Herbal tea":
              userResponses.teaType = "Herbal tea";
              break;
            case "Oolong tea":
              userResponses.teaType = "Oolong tea";
              break;
          }
          break;
        case 5:
          switch (selectedAnswer) {
            case "Peach":
              userResponses.favoriteFruit = "Peach";
              break;
            case "Blueberry" :
              userResponses.favoriteFruit = "Blueberry";
              break;
            case "Coconut":
              userResponses.favoriteFruit  = "Coconut";
              break;
            case "Mango":
              userResponses.favoriteFruit  = "Mango";
              break; 
          }
          break;
          case 6:
            switch (selectedAnswer) {
              case "Chamomile":
                userResponses.favoriteHerb  = "Chamomile";
                break;
              case "Lavender" :
                userResponses.favoriteHerb = "Lavender";
                break;
              case "Peppermint":
                userResponses.favoriteHerb  = "Peppermint";
                break;
              case "Licorice":
                userResponses.favoriteHerb  = "Licorice";
                break; 
            }
            break;  
          
        }})}

        const filteredTeas = teas.filter((tea) => {
            return (
              (userResponses.teaType === null || userResponses.teaType === tea.name) &&
              (userResponses.flavorProfile === null || userResponses.flavorProfile === tea.flavorProfile) &&
              (userResponses.timeOfDay === null || userResponses.timeOfDay === tea.timeOfDay) &&
              (userResponses.effect === null || userResponses.effect === tea.effect) &&
              (userResponses.favoriteFruit === null || userResponses.favoriteFruit === tea.favoriteFruit) &&
              (userResponses.favoriteHerb === null || userResponses.favoriteHerb === tea.favoriteHerb) &&
              (userResponses.caffeine === null || userResponses.caffeine === tea.caffeine)
            );
          });

          if (filteredTeas.length === 0) {
            // If there are no recommended teas, display a message to the user
            return <p>Sorry, we couldn't find any teas that match your preferences.</p>;
          } else {
            // If there are recommended teas, display them in a list
            return (
              <ul>
                {filteredTeas.map((tea) => (
                  <li key={tea.id}>{tea.name}</li>
                ))}
              </ul>
            );
          }
      