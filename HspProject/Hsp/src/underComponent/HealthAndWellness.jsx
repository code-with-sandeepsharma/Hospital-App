import React from 'react';

function HomePage() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">UR Life</div>
          <div className="flex space-x-4">
            {/* <button onClick={handleSignIn()} className="text-blue-500">Sign In</button> */}
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://www.drmanishjain.com/wp-content/uploads/2016/08/good-diet-healthy-food.jpg"
              height={600} width={300}
              alt="Main Banner"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.herzindagi.info/image/2024/Apr/summer-drinks-for-immunity.jpg" 
                alt="Secondary Banner"
                className="w-full rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Tertiary Banner"
                className="w-full rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Tertiary Banner"
                className="w-full rounded-lg"
              />
              <img
                src="https://images.herzindagi.info/image/2024/Apr/summer-drinks-for-immunity.jpg" 
                alt="Secondary Banner"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="mb-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <button className="bg-white p-4 rounded-lg shadow-md text-center">Classes</button>
            <button className="bg-white p-4 rounded-lg shadow-md text-center">Community</button>
            <button className="bg-white p-4 rounded-lg shadow-md text-center">Profile</button>
            <button className="bg-white p-4 rounded-lg shadow-md text-center">Medical</button>
            <button className="bg-white p-4 rounded-lg shadow-md text-center">TPA</button>
            <button className="bg-white p-4 rounded-lg shadow-md text-center">Nutrition</button>
          </div>
        </section>

        {/* Recommended and Trending Articles Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Recommended for You</h2>
            <h2 className="text-2xl font-bold">Trending Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://images-cdn.ubuy.co.in/65a365d252512267bb0630d6-sleep-gummies-for-adults-kids.jpg150*150" alt="Article" className="w-full rounded-lg" />
                <h3 className="text-lg font-bold mt-2">Melatonin: The Sleeping Aid</h3>
                <p className="text-gray-600">Before incorporating melatonin in your regime, it’s wise to know the benefits and risks involved. Yes, melatonin can wreck your sleep cycle too!</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://static.tnn.in/thumb/msid-108780564,thumbsize-62486,width-1280,height-720,resizemode-75/108780564.jpg" alt="Article" className="w-full rounded-lg" />
                <h3 className="text-lg font-bold mt-2">What A Psychologist Wants New Moms to Know</h3>
                <p className="text-gray-600">As a new mother, there can be times when you’re overwhelmed, and times when you’re happier than ever. Learn what a psychologist would recommend during this important phase in...</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Embrace New Changes in 2024: Reflecting On the Lessons From 2023</h3>
                <p className="text-gray-600">Mental Health - 25 Dec 2023</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">What Do Health Insurance Plans Cover and Should You Get One?</h3>
                <p className="text-gray-600">TPA - 12 Dec 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Assess Your Health Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Assess Your Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://pbs.twimg.com/media/FfkC2Q3acAEPzj9.jpg" alt="Health Assessment" className="w-full rounded-lg" />
              <h3 className="text-lg font-bold mt-2">Test Your Knowledge of Breast Cancer With This Quiz</h3>
              <p className="text-gray-600">Medical - 18 Oct 2022</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://image3.slideserve.com/5582581/healthy-relationship-quiz-l.jpg" alt="Health Assessment" className="w-full rounded-lg" />
              <h3 className="text-lg font-bold mt-2">Is Your Relationship Healthy or Toxic? Take This Quiz to Find Out</h3>
              <p className="text-gray-600">Mental Health - 13 May 2022</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">Download the App</p>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-white text-gray-900 p-2 rounded-full">App Store</button>
            <button className="bg-white text-gray-900 p-2 rounded-full">Google Play</button>
          </div>
          <div className="text-sm space-y-2">
            <p>About Us | Collaborate | Privacy Policy | Terms & Conditions</p>
            <p>© 2024 UR Life. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;