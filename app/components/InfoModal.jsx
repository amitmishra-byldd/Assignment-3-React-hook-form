const InfoModal = ({ data, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-2xl border border-neutral-500 bg-neutral-900 rounded-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-neutral-500 border-b py-3 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold ">Form Information</h1>
          <button
            onClick={onClose}
            className="border px-2.5 hover:bg-neutral-600 py-1 rounded-full cursor-pointer"
          >
            {" "}
            X
          </button>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="">Full Name: </label>
            <span>{data.fullName}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Email: </label>
            <span>{data.email}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Phone: </label>
            <span>{data.phone}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Age: </label>
            <span>{data.age}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Date of Birth: </label>
            <span>{data.dob}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Meeting: </label>
            <span>{data.meeting}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Country: </label>
            <span>{data.country}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Level: </label>
            <span>{data.level}</span>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="">Interest: </label>
            <span>{data.interests}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
