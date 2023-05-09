interface Props {
  step: number;
}

export default function StepsWidget({ step }: Props) {
  const textStyle =
    'text-[20px] text-white font-thin rounded-full p-1 w-[50px] h-[30px] flex justify-center items-center';
  return (
    <div className="w-full flex flex-col items-center justify-center mt-7 mb-4">
      <div className="flex flex-row items-center justify-center">
        <p className={`${textStyle} ${step <= 2 ? 'bg-black' : 'bg-gray-300'}`}>
          1
        </p>
        <div
          className={`h-[3px] w-[60px] ${
            step > 0 ? 'bg-black ' : 'bg-gray-300'
          }`}
        />
        <p
          className={`${textStyle} ${step >= 1 ? 'bg-black' : 'bg-gray-300'} `}
        >
          2
        </p>
        <div
          className={`h-[3px] w-[50px] ${
            step === 2 ? 'bg-black' : 'bg-gray-300'
          }`}
        />
        <p
          className={`${textStyle} ${step === 2 ? 'bg-black' : 'bg-gray-300'}`}
        >
          3
        </p>
      </div>
      <div className="flex flex-row gap-10 w-[270px] text-[15px] font-light">
        <p className="mr-5 ml-1">Address</p>
        <p>Payment</p>
        <p className="translate-x-[-7px]">Confirmation</p>
      </div>
    </div>
  );
}
