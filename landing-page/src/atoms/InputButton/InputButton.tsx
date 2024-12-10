const InputButton = () => {
  return (
    <div className="flex gap-6 max-1040:flex-col">
      <input
        type="text"
        placeholder="Enter your Email..."
        className="text-[#C2C2C2] font-openSans tracking-[0.467px] pt-[14px] pb-[12px] p-[21px] border-[0.625px] border-[#07043B] rounded"
      />
      <button className="text-[#FFF] font-raleway font-bold bg-[#2F65F8] py-[15px] px-[61px] rounded">
        Get Started
      </button>
    </div>
  );
};

export default InputButton;
