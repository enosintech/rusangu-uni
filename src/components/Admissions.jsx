import { admissionData } from "../constants";

const Admissions = () => {
  return (
    <div className="w-full h-[45vh] flex flex-col px-56 mt-14">
        <div className="w-full h-[30%] text-center">
          <p className="font-extrabold text-4xl">Admissions</p>
          <p className="mt-4 font-light tracking-tight text-xl">Choosing Rusangu University opens doors to self-discovery through its supportive community and diverse academic opportunities, empowering you from admission onward.</p>
        </div>
        <div className="w-full h-[70%] grid place-items-center">
          <div className="w-full h-[80%] flex items-center justify-evenly">
            {admissionData.map((item, idx) => (
              <div key={item.id} className="flex flex-col items-center gap-y-2">
                <p className="font-black text-6xl text-primary">{item.number} {idx !== 0 && <span className="text-black">+</span>}</p>
                <p className="font-light tracking-tight text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Admissions;
