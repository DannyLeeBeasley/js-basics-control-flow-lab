function scuberGreetingForFeet(rideDistance){
  if (rideDistance < 200){
  return 'This one is on me!'}
  else if (rideDistance > 2000 && rideDistance < 2500){
  return 'I will gladly take your thirty bucks.'}
  else if (rideDistance >= 2500){
  return 'No can do.'}
}

function ternaryCheckCity(desinationCity){
  return (desinationCity === 'NYC' ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){
  switch(tip){ 
    case 'generous':
        return "Thank you so much.";
    case 'not as generous':
        return "Thank you.";
    default : 
        return "Bye.";
  }
}