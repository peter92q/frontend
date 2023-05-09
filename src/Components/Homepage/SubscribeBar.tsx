import { button } from '../../Utils/Button';

export default function SubscribeBar() {
  return (
    <div className="py-5 px-8 flex flex-col justify-center lg:ml-[50px] items-center w-[90vw] lg:w-[90vw] overflow-hidden">
        <div className='text-[14px] text-gray-800 mb-[2px] font-normal'>Receive up to -15% in discounts with our latest offers.
        </div>
   <div className='w-[90%] flex justify-center items-center'>
      <input
        className='bg-white w-2/4 h-[40px] border-[2px] border-black
            rounded-tl-[3px] rounded-bl-[3px] pl-2 pb-1 focus:outline-gray-500'
      />
      <button
      className={`${button} translate-x-[-2px] rounded-tr-[3px] rounded-br-[3px] text-[18px] font-medium z-10`}
      >
        Subscribe
      </button>
      </div>
    </div>
  );
}
