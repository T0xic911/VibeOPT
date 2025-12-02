// ============================
//  REGISTER USER
// ============================
async function registerUser(email, password) {
  try {
    const userCred = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCred.user;

    // Create Document for this user
    await db.collection("users").doc(user.uid).set({
      email: user.email,
      plan: "free",  // default
      createdAt: new Date()
    });

    alert("Account created successfully!");
    window.location.href = "dashboard.html";

  } catch (error) {
    alert(error.message);
  }
}


// ============================
//  LOGIN USER
// ============================
async function loginUser(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);

    alert("Logged in!");
    window.location.href = "dashboard.html";

  } catch (error) {
    alert(error.message);
  }
}


// ============================
//  LOGOUT
// ============================
function logoutUser() {
  auth.signOut();
  window.location.href = "index.html";
}


// ============================
//  GET CURRENT USER DATA
// ============================
async function getUserData(callback) {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const snap = await db.collection("users").doc(user.uid).get();
      callback(snap.data());
    } else {
      callback(null);
    }
  });
}
