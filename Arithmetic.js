import { useState } from "react";

function Arithmetic() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Function to perform arithmetic operations
  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult(" Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "sub":
        setResult(a - b);
        break;
      case "mul":
        setResult(a * b);
        break;
      case "div":
        setResult(b !== 0 ? a / b : " Cannot divide by 0");
        break;
      default:
        setResult("Invalid Operation");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Arithmetic Operations</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button onClick={() => calculate("add")} style={styles.button}>Add</button>
        <button onClick={() => calculate("sub")} style={styles.button}>Subtract</button>
        <button onClick={() => calculate("mul")} style={styles.button}>Multiply</button>
        <button onClick={() => calculate("div")} style={styles.button}>Divide</button>
      </div>

      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

// Inline CSS
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  },
  input: {
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  buttonContainer: {
    marginTop: "20px"
  },
  button: {
    padding: "10px 15px",
    margin: "5px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer"
  }
};

export default Arithmetic;
