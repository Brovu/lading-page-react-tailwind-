import { BsFillCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import CheckIcon from "../../assets/mobile/checkpoint.svg";

function Content() {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 10348, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="flex flex-col mb-10 shadow-md rounded-xl text-bold  ml-[70px] mr-[54px] bg-gradient-to-b from-white/40 md:w-[20%]">
        <div className="user-content md:my-8">
          <FaUser size={"30px"} color={"#fff"} className="mt-[12px]" />
          <div className="text-26 text-[#fff] font-bold">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-[18px] font-medium">Customers</p>
          </div>
        </div>
        <div className="user-content md:my-8 mb-[50px]">
          <BsFillCreditCardFill
            size={"30px"}
            color={"#fff"}
            className="mt-[12px]"
          />
          <div className="text-26 text-[#fff] font-bold">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-[18px] font-medium">Cards Issued</p>
          </div>
        </div>
      </div>
      <div className=" flex w-[100%] flex-col text-[20px] text-[#ccc] font-bold md:w-[30%] md:ml-[20%]">
        <div className="check-content">
          <img src={CheckIcon} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={CheckIcon} alt="" />
          <p> No external fees</p>
        </div>
        <div className="check-content">
          <img src={CheckIcon} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
