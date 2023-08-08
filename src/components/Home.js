import React from 'react'

function Home() {
  return (
    <div>
    <header>
      <h1>Workout Tracker App</h1>
    </header>
    <main>
      <section>
        <h2>Track Your Workouts</h2>
        <p>Log your exercises, sets, reps, and durations to keep track of your progress.</p>
        <Link to="/exerciseentry" className="cta-button">
          Get Started
        </Link>
      </section>
      <section>
        <Link to="/progress" className="cta-button">
          View Progress
        </Link>
      </section>
      <section>
        <h2>Stay Motivated</h2>
        <p>Get personalized workout recommendations and set achievable goals.</p>
        <Link to="/goals" className="cta-button">
          Set Goals
        </Link>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Workout Tracker App. All rights reserved.</p>
    </footer>
  </div>
  )
}

export default Home