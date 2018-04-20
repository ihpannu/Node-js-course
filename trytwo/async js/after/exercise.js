getCustomer(1, customer => {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    getTopMovies(movies => {
      console.log("Top movies: ", movies);
      sendEmail(customer.email, movies, () => {
        console.log("Email sent...");
      });
    });
  }
});

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email"
      }).reject(error, console.error("Error", error.message));
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000).reject(error => console.error("Error", error.message));
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve().reject(err => console.error("Error", err.message));
    }, 4000);
  });
}
