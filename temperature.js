   function mean(arr)  //function to find average of temperatures
   { 

    var average = 0;
    
    for(var i = 0; i < arr.length; i++) {
      
      average += arr[i];
    }
    average /= (arr.length+1);
    return(average);
    }
    
    
    function get_min(arr) //function to find minimum temperature
    {
    
        var min = arr[0];
        
        for(var i = 0; i < arr.length; i++)
        {
          
          if(arr[i] < min)
          { 
            min = arr[i];
          }
          
        }
        
        return(min);
        
    }
    
    function get_max(arr) //function to find maximum temperature
    {
    
    var max = arr[0];
    
    for(var i = 0; i < arr.length; i++) {
      
      if(arr[i] > max)
      { 
        max = arr[i];
      }
      
    }
    
    return(max);
    
    }

    function sort(arr){ // function to sort an array of temperatures
  
    
        var temp;
        for(var i = 0; i < arr.length; i++){
          for(var j = i + 1; j < arr.length; j++){
            
            if(arr[i] > arr[j]){
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
      
        return arr;
      }

      function mode(numbers) {
    
        var modes = [], count = [], i, number, maxIndex = 0;
     
        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
     
        for (i in count)
           
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
           
            }
     
        return modes;
    }




function findTemperature()
{
  
  var temperature = [-12,-20,16,5,1,12,2,16,40,40,43,16,20];
  temperature.push(50);

  var sort_temperature = sort(temperature);

  for(var i=0;i<sort_temperature.length;i++){
      console.log(sort_temperature[i]); // to display sorted temperature values
  }
  console.log("Maximum :" + get_max(temperature));// display maximum temperature
  console.log("Minimum :" + get_min(temperature));// display minimum temperature
  console.log("Mean :" + mean(temperature)); // display average of temperature
  console.log("Mode : " + mode(sort_temperature)); //display temperature with maximum frequency
  

}
findTemperature();

