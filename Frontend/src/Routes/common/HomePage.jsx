import Blob1 from "../../assets/blobs homepage/blob1.svg"
import Blob2 from "../../assets/blobs homepage/blob2.svg"
import Blob3 from "../../assets/blobs homepage/blob3.svg"

export function Homepage() {
    return <div className=" divide-cyan-950">
        <Element1/>
        <Element3/>
    </div>
}

function Element1() {
    return <div className="my-24 flex h-[90vh] justify-center items-center">
        <div className=" relative font-atomic font-semibold text-[80px] " >
            <p className="z-30 opacity-90 glow">Learn • Grow • Achieve</p>
            <div>
                <img className=" absolute top-[-400px] -rotate-90 opacity-30 blur-2xl -translate-y-32 -translate-x-96 z-10 transition-all duration-500 hover:blur-xl" src={Blob1}/>
                <img className=" absolute top-[-400px] -rotate-450 opacity-30 blur-2xl translate-x-96 z-10 transition-all duration-500 hover:blur-xl" src={Blob2}/>
                <img className=" absolute top-[-400px] -rotate-450 opacity-30 blur-2xl z-10 transition-all duration-500 hover:blur-xl " src={Blob3}/>
            </div>
        </div>
    </div>    
}

// function Element2() {
//     return <div>
//         <div className=" h-[80vh] w-[100vw] font-atomic ">
//             Explore our top performing courses
//         </div>
        
//     </div>
// }

// function Element3() {
//     return <div>
//         <div className=" h-[80vh] w-[100vw]">
            
//         </div>
        
//     </div>
// }



function Element3(){
  return (
    <div className="bg-[#111827] text-gray-300 min-h-screen">

      <header className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Welcome to TeachHub
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Empowering educators. Enabling learners. Join the community that's transforming education.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
            Explore Courses
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
            Become a Teacher
          </button>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Technology", "Business", "Design","chetan"].map((category) => (
            <div
              key={category}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-2">{category}</h3>
              <p className="text-gray-400">Discover top courses in {category}.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Student", "Teacher", "Professional"].map((user, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl"
              >
                <p className="text-gray-400 mb-4">
                  "TeachHub has revolutionized the way I learn and teach. The platform is user-friendly and highly
                  engaging!"
                </p>
                <h4 className="text-teal-400 font-bold">{user}</h4>
              </div>
            ))}
          </div>

          
        </div>
      </section>


      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Ready to Transform Education?
        </h2>
        <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

