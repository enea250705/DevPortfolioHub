// Vercel serverless function for contact form
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }
    
    if (message.length < 10) {
      return res.status(400).json({ message: 'Message must be at least 10 characters long' });
    }
    
    // In a real app, you would send an email or store in a database
    // For now, we'll just return success
    
    return res.status(201).json({ 
      name, 
      email, 
      message,
      createdAt: new Date().toISOString() 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 