function Confirmation({ setCurrentPage }) {
  return (
    <main className="section">
      <h1>Order Confirmed</h1>
      <button onClick={() => setCurrentPage("survey")}>Give Feedback</button>
    </main>
  );
}

export default Confirmation;