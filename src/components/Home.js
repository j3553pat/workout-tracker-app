import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <header>
      <h1>Workout Tracker App</h1>
    </header>
    <center>
    <main>
      <section>
        <h2>Track Your Workouts</h2>
        <p>Log your exercises, sets, reps, and durations to keep track of your progress.</p>
        <Link to="/exerciseentry" className="cta-button">
          Get Started
        </Link>
      </section>
      <section>
        <Link to="/foodintake" className="cta-button">
          Track Your Food Intake
        </Link>
      </section>
      <section>
        <Link to="/exerciseentry" className="cta-button">
          Record Your Workouts!
        </Link>
      </section>
      <section>
        <Link to="calorieintake" className='cta-button'>
        Record Your Calorie Intake!
        </Link>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Workout Tracker App. All rights reserved.</p>
    </footer></center>
  </div>
  )
}

export default Home