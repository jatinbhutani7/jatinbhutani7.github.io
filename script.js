console.log("JS FILE LOADED");
async function evaluateAI() {
  
async function evaluateAI() {
  alert("JS is working");
}
  const problem = document.getElementById("problem").value;
  const task = document.getElementById("task").value;
  const workflow = document.getElementById("workflow").value;
  const outputType = document.getElementById("outputType").value;
  const error = document.getElementById("error").value;
  const context = document.getElementById("context").value;

  const prompt = `
You are a strategy consultant evaluating whether AI should be applied.

Business Problem: ${problem}
Task: ${task}
Current Workflow: ${workflow}
Output Type: ${outputType}
Error Tolerance: ${error}
Context Dependency: ${context}

Evaluate using:

1. AI Fit (High / Medium / Low)
2. Where AI Adds Value (max 3)
3. Where AI Struggles / Fails
4. Key Risks (max 3)
5. Implementation Complexity
6. Recommendation

Be sharp, specific, and non-generic.
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    })
  });

  const data = await response.json();

  document.getElementById("result").innerText =
    data.choices[0].message.content;
}
