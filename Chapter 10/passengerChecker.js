let passengers = [{name: "Jane Doloop", paid: true},
                  {name: "Dr.Evel", paid: true},
                  {name: "John Funcall", paid: true},
                  {name: "Sue Property", paid: true}];

function checkNoFlyList(passenger){
    return(passenger.name === "Dr.Evel");
}

function checkNotPaid(passenger){
    return(!passenger.paid);
}