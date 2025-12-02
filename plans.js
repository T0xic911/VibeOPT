// ============================
//  LOAD USER PLAN
// ============================
function loadUserPlan() {
  getUserData((data) => {
    if (!data) return;

    document.getElementById("current-plan").innerText = data.plan.toUpperCase();

    if (data.plan === "free") enableFree();
    if (data.plan === "pro") enablePro();
    if (data.plan === "ultra") enableUltra();
  });
}


// ============================
//  UPGRADE USER PLAN
// ============================
async function upgradePlan(newPlan) {
  const user = auth.currentUser;
  if (!user) return alert("You must login first!");

  await db.collection("users").doc(user.uid).update({
    plan: newPlan
  });

  alert("Plan Updated to: " + newPlan);
  loadUserPlan();
}


// ============================
//  FEATURES
// ============================
function enableFree() {
  document.querySelectorAll(".pro-feature").forEach(e => e.style.opacity = "0.3");
  document.querySelectorAll(".ultra-feature").forEach(e => e.style.opacity = "0.3");
}

function enablePro() {
  document.querySelectorAll(".pro-feature").forEach(e => e.style.opacity = "1");
  document.querySelectorAll(".ultra-feature").forEach(e => e.style.opacity = "0.3");
}

function enableUltra() {
  document.querySelectorAll(".pro-feature").forEach(e => e.style.opacity = "1");
  document.querySelectorAll(".ultra-feature").forEach(e => e.style.opacity = "1");
}
