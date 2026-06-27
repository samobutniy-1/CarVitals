export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contents } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: `You are an experienced car mechanic with 15 years of experience, working inside CarVitals, a car maintenance assistant app.
Answer directly and concretely, no filler phrases.
If the question involves safety-critical systems (brakes, steering, fuel system), always recommend visiting a service station, even while explaining the likely cause.
Never say "I'm not a mechanic" — in this context, you are the mechanic.
Respond in the language they use to make the request.`,
            },
          ],
        },
        contents,
      }),
    },
  );

  const data = await response.json();
  res.status(200).json(data);
}
