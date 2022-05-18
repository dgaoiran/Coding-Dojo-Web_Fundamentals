counter = [0,0]

function portal(element) {
  element.innerText="Logout";
}

function remove(element) {
  element.remove();
}

function displaycount(element,idx){
  counter[idx] = counter[idx] +1;
  element.innerHTML=counter[idx]  + " Likes";
  notifyUser();
}

  function notifyUser( ) {
  alert("I am an alert box!");
}
