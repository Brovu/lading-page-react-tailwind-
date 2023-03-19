import Cards from "../../assets/desktop/isocard.svg";

function Slogan() {
  return (
    <section className="text-center text-[45px] font-extrabold text-white mt-10 md:my-28 md:grid md:grid-cols-3 md:items-center md:text-35">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Earn <span className="text-purple-300">More</span>
        </p>
        <p>Pay Less</p>
        <button className="text-[30px] px-5 py-1 mt-5 bg-purple-500 rounded-[16px] hover:bg-pink-500 transition-all duration-[400]">
          Start
        </button>
      </div>
      <div>
        <img src={Cards} alt="" />
      </div>
    </section>
  );
}

export default Slogan;
