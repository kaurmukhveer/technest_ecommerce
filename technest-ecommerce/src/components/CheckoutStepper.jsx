const steps = ["Cart", "Information", "Payment", "Review", "Confirmation"];

function CheckoutStepper({ currentStep }) {
  return (
    <div className="stepper">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const status =
          stepNumber < currentStep + 1
            ? "complete"
            : stepNumber === currentStep + 1
            ? "current"
            : "upcoming";

        return (
          <div className={`step ${status}`} key={label}>
            <span>{stepNumber < currentStep + 1 ? "✓" : stepNumber}</span>
            <p>{label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CheckoutStepper;