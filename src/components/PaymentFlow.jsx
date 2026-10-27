// Animated payment ecosystem for the hero's left column.
// A payment dot travels from the customer to the bank, with each stop lighting up in turn.

const nodes = ["Card / UPI", "Payment app", "Gateway", "Bank"];
const architecture = ["Tokenisation", "3-D Secure", "Settlement", "Reconciliation"];

const PaymentFlow = () => {
  return (
    <div className="animate-fade-up mt-10 rounded-2xl border border-line bg-white p-5 shadow-sm [animation-delay:250ms]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">How a payment moves</p>

      <div className="relative mt-6 flex items-start justify-between px-2">
        <div className="absolute left-4 right-4 top-[7px] h-0.5 bg-line" />
        {[0, 1, 2].map((i) => (
          <span key={i} className="flow-dot" style={{ "--i": i }} />
        ))}
        {nodes.map((node, i) => (
          <div key={node} className="relative flex flex-col items-center gap-2">
            <span className="flow-node" style={{ "--i": i }} />
            <span className="text-[11px] font-medium">{node}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {architecture.map((item) => (
          <span key={item} className="rounded-full bg-paper px-2.5 py-1 text-[11px] text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PaymentFlow;
