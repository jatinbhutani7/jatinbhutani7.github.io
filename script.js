async function evaluateAI() {

  const problem = document.getElementById("problem").value;
  const task = document.getElementById("task").value;
  const workflow = document.getElementById("workflow").value;
  const outputType = document.getElementById("outputType").value;
  const error = document.getElementById("error").value;
  const context = document.getElementById("context").value;

  document.getElementById("result").innerText = "Evaluating...";

  try {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        problem,
        task,
        workflow,
        outputType,
        error,
        context
      })
    });

    const data = await response.json();

    document.getElementById("result").innerText = data.result;

  } catch (err) {
    console.error(err);
    document.getElementById("result").innerText = "Error occurred.";
  }
}
