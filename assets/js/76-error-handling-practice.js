document.querySelector("#frmLogin").addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!isEmail(email)) throw "Please enter a valid email address";

    if (!password) throw "Pleaser enter a valid password";
    alert("Submit yapildi");
    e.target.submit();
  } catch (error) {
    alert(error);
  }
});

const isEmail = (email) => {
  const regex = /\S+@\S+\.\S{2,5}$/;
  // reqular expression -> https://regexr.com/
  return regex.test(email);
};
