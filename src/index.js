module.exports = function getZerosCount(number, base) {
  // your implementation 
  var current_number = number, base_count = 0, num_count = 0, num; 
    for(var i = 2; i <= base; i++){
      if(base % i == 0){
        base_count = 0;
		do{ 
			base_count++;
            base = Math.floor(base/i);
		}
        while(base % i == 0)		
      num = number;
	  num_count = 0;
		do{
			num_count+=Math.floor(num/i);		  
			num=Math.floor(num/i);	
		}
        while (num/i > 0)

     if(current_number > num_count/base_count){ 
        current_number = num_count/base_count;
      } 
    }
  }
  return Math.floor(current_number);  
}