const Alert = ({ type, text }) => {
  return (
    <div
      role="alert"
      className={`fixed left-1/2 top-24 z-30 -translate-x-1/2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg ${
        type === "danger" ? "bg-red-600" : "bg-ink"
      }`}
    >
      {text}
    </div>
  );
};

export default Alert;
