// setMealTime
window.onload = function() {
    setMealTime();
    // loadmenu();
};
function setMealTime(){
    let select =document.getElementById("mealSelect")
    const currentHour = new Date().getHours(); // Get current hour
    let selectedMeal = ''; 
    if(currentHour >=6  && currentHour<11 ){
        selectedMeal="Break-fast";
    }else if(currentHour >= 11 && currentHour<16){

        selectedMeal="Lunch";
    }else if(currentHour >= 16 && currentHour < 22){
        selectedMeal="Dinner";
    }else{
        selectedMeal="Unavailable";
    }
    for(let option of select.options){
        if(option.value=== selectedMeal){
            option.selected = true;  // Select the matching option
        }
        option.disabled = true;  // Disable all options
    }


}
// =========================================================================

// loadmenu

function loadmenu(){
    const reader= new FileReader();
    console.log("hello")
}