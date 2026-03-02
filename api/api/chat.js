export default async function handler(req, res) {

  const { message } = req.body;

  let reply = "Saya AI website ini 🤖";

  if(message.toLowerCase().includes("halo")){
    reply = "Halo! Saya siap membantu.";
  }
  else if(message.toLowerCase().includes("website")){
    reply = "Saya bisa membantu membuat website modern.";
  }
  else if(message.toLowerCase().includes("ai")){
    reply = "Saya berjalan di server Vercel.";
  }

  res.status(200).json({ reply });
}
