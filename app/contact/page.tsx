export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-gray-700 mb-6">Have questions? Get in touch with us.</p>

      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg" />

        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-lg" />

        <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border rounded-lg" />

        <button type="submit" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
          Send Message
        </button>
      </form>
    </main>
  );
}
