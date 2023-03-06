function adopt() {
  let name = prompt("What is your name");
  let age = prompt("What is your age");
  let email = prompt("What is your email address?");
  if (age < 18) {
    alert(
      "Apologies!, " + name + " , You do not qualify for our Health-Insurance"
    );
  } else {
    alert("Thank You, " + name + ", We will be in touch");
  }
}

let applyButtonClick = document.querySelector("button");
applyButtonClick.addEventListener("click", adopt);
