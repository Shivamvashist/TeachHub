export function About(){
    return <div>
        <AboutUs/>
    </div>
}



function AboutUs(){
  return (
    <div className="bg-[#111827] text-gray-300 mt-24 min-h-screen">

      <header className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Empowering educators and learners to thrive in a connected world.
        </p>
      </header>


      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Our Mission
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto">
          At TeachHub, we aim to revolutionize education by providing educators
          with the tools to share their knowledge and learners with the
          resources to grow. We believe that learning should be accessible,
          engaging, and empowering for everyone, everywhere.
        </p>
      </section>



      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Our Vision
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto">
          TeachHub envisions a future where education is not limited by borders
          or circumstances. By connecting teachers and learners globally, we
          strive to create a thriving community dedicated to lifelong learning
          and growth.
        </p>
      </section>


      <section className="bg-gray-900 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Join the TeachHub Revolution
        </h2>
        <p className="text-gray-400 mb-6">
          Become a part of our journey to make education accessible and
          impactful for all.
        </p>
        <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
          Get Started
        </button>
      </section>

    </div>
  );
};

