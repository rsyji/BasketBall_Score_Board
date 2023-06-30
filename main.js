let display1 = document.querySelector('#display1')
let display2 = document.querySelector('#display2')
let count1 = 0
let count2 = 0

// Display 1 Score increament
document.getElementById('display1add').onclick= function(){
    count1+=1
    display1.textContent=count1
}

// Display 1 Score deduction
document.getElementById('display1deduct').onclick= function(){
    count1-=1
    display1.textContent=count1
}

// Display 1 Bonus Points
document.querySelector('.display1-bonus').onclick= function(){
    count1+=5
    display1.textContent=count1
}

// Display 1 Score increament 
document.getElementById('display2add').onclick= function(){
    count2+=1
    display2.textContent=count2
}

// Display 2 Score deduction
document.getElementById('display2deduct').onclick= function(){
    count2-=1
    display2.textContent=count2
}

// Display 2 Bonus Points
document.querySelector('.display2-bonus').onclick= function(){
    count2+=5
    display2.textContent=count2
}