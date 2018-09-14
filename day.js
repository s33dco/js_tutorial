function dayName(date){
   const daysOfTheWeek = ['Sunday', "Monday", "Tuesday", "Wednesday",
    											"Thursday", "Friday", "Saturday"];
   return daysOfTheWeek[date.getDay()];
}


function greeting(date){
	if (date.getHours() < 12) {
		return "Top of the morning to yer!";
		} else if (date.getHours() < 18){
			return "Good Afternoon";
			} else {
				return "Good Evening";
			}
		}