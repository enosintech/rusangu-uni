import { admissionData } from "../constants";

const Admissions = () => {
  return (
    <div className="w-full h-[45vh] flex flex-col common-padding mt-14">
        <div className="w-full h-[30%]">
          <p className="font-extrabold text-[2vw]">Admissions</p>
          <p className="mt-4 font-light tracking-tight text-[1.1vw]">Choosing Rusangu University opens doors to self-discovery through its supportive community and diverse academic opportunities, empowering you from admission onward.</p>
        </div>
        <div className="w-full h-[70%] grid place-items-center">
          <div className="w-full h-[80%] flex items-center justify-evenly">
            {admissionData.map((item, idx) => (
              <div key={item.id} className="flex flex-col items-center gap-y-2">
                <p className="font-black text-[3.5vw]">{item.number} {idx !== 0 && <span className="">+</span>}</p>
                <p className="font-light tracking-tight text-[1.1vw]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Admissions;
