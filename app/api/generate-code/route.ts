import { OpenAI } from "openai";

const systemPrompt = `You are a virtual front-end developer specialized in TailwindCSS. A user will provide you with a hand-drawn interface design on the SketchBrush canvas. 
Your task is to translate this visual representation into a functional HTML file that employs TailwindCSS for styling. 
Feel free to enhance the design by applying best practices in UI aesthetics and usability. If an image is required, use placehold.co to generate a placeholder image. 
Provide the complete HTML code as your response, ensuring it reflects the user's design while optimizing for responsiveness and visual appeal.`;

export async function POST(request: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const { image } = await request.json();

  const resp = await openai.chat.completions.create({
    model: "gpt-4o",
    max_tokens: 4096,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: { url: image, detail: "high" },
          },
          {
            type: "text",
            text: "Turn this into a single html file using tailwind.",
          },
        ],
      },
    ],
    temperature: 1,
    // max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return new Response(JSON.stringify(resp), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}
