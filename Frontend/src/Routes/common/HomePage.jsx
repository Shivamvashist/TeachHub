import Blob1 from "../../assets/blobs homepage/blob1.svg"
import Blob2 from "../../assets/blobs homepage/blob2.svg"
import Blob3 from "../../assets/blobs homepage/blob3.svg"

export function Homepage() {
    return <div className="divide-y divide-cyan-950">
        <Element1/>
        <Element2/>
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

function Element2() {
    return <div>
        <div className=" h-[80vh] w-[100vw] font-atomic ">
            Explore our top performing courses
        </div>
        
    </div>
}

function Element3() {
    return <div>
        <div className=" h-[80vh] w-[100vw]">
            
        </div>
        
    </div>
}
