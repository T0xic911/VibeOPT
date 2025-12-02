document.addEventListener('DOMContentLoaded', () => {

    // Support 
    const supportForm = document.getElementById('support-form');
    
    if(supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
           
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';
            
           
            setTimeout(() => {
                btn.innerText = 'Message Sent! ✔';
                btn.style.background = '#0C9348'; 
                btn.style.color = '#fff';
                
               
                supportForm.reset();
                
               
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = ''; 
                    btn.style.opacity = '1';
                }, 3000);
                
            }, 1500);
        });
    }

  
    const landingPage = document.getElementById('landing-page');
    const header = document.getElementById('main-header');
    const dashboardUi = document.getElementById('dashboard-ui');
    const heroCta = document.getElementById('hero-cta');
    const headerCta = document.getElementById('header-cta');
    const backHomeBtn = document.getElementById('back-home');

    
    function showDashboard() {
        landingPage.style.display = 'none';
        header.style.display = 'none';
        dashboardUi.classList.remove('hidden');
        startLiveGraph(); 
    }

 
    function showHome() {
        dashboardUi.classList.add('hidden');
        landingPage.style.display = 'block';
        header.style.display = 'flex';
    }

    heroCta.addEventListener('click', showDashboard);
    headerCta.addEventListener('click', showDashboard);
    backHomeBtn.addEventListener('click', showHome);

    function startLiveGraph() {
        const bars = document.querySelectorAll('.bar');
        
        setInterval(() => {
            bars.forEach(bar => {
                const height = Math.floor(Math.random() * 70) + 20;
                bar.style.height = `${height}%`;
                
                if(height > 80) {
                    bar.style.backgroundColor = '#00C2FF'; 
                } else {
                    bar.style.backgroundColor = '#58FFB4'; 
                }
            });
        }, 800);
    }


    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiYr8UgMSjsvjLqjS6pIGQofD8R2UoFxg",
  authDomain: "vibeopt.firebaseapp.com",
  projectId: "vibeopt",
  storageBucket: "vibeopt.firebasestorage.app",
  messagingSenderId: "83983179886",
  appId: "1:83983179886:web:ff362ed9bbcd927c97067f",
  measurementId: "G-3MHHMQQ4QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(db, "users", uid), {
  email: user.email,
  plan: "free"
});


