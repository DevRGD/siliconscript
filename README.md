# SiliconScript

**SiliconScript** is a modern, high-performance tech blog built with **Next.js 16**, **MongoDB**, and **Tailwind CSS**. Designed for developers, it features a sleek dark-mode aesthetic, syntax-highlighted code blocks, and immersive animations.

![Project Banner](https://placehold.co/1200x400/0a0a0a/ffffff?text=SiliconScript)

## 🚀 Features

- **Next.js 16 App Router**: Leveraging Server Components for optimal performance and SEO.
- **MDX Support**: Render Markdown with React components, featuring custom typography and layout.
- **MacOS-Style Code Blocks**: Beautiful syntax highlighting (Atom Dark theme) with a "copy to clipboard" feature.
- **MongoDB Integration**: Robust data storage for blog posts using Mongoose.
- **Immersive UI**:
  - Dark mode aesthetic (`bg-gray-950`).
  - Custom GSAP "Glitch" animations.
  - Responsive design with Tailwind CSS.
- **SEO Optimized**: Dynamic metadata, OpenGraph tags, and semantic HTML structure.
- **API Routes**: Built-in endpoints for fetching and creating posts.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown**: `next-mdx-remote` & `remark`

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v18+ recommended) or **Bun**
- **MongoDB** instance (Local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/silicon-script.git](https://github.com/yourusername/silicon-script.git)
   cd silicon-script

2.  **Install dependencies**

    ```bash
    npm install
    # or
    bun install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your MongoDB connection string:

    ```env
    MONGO_URI=mongodb://localhost:27017/siliconscript
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    ```

4.  **Run the Development Server**

    ```bash
    npm run dev
    # or
    bun dev
    ```

    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
.
├── app/
│   ├── api/
│   ├── blog/
│   ├── components/
│   └── globals.css
├── components/
│   ├── BlogRenderer.tsx
│   ├── CodeBlock.tsx
│   └── ...
├── libs/
│   ├── db.ts
│   └── queries.ts
├── models/
└── public/
```

## 📝 Managing Content

Blog posts are stored in MongoDB. You can create new posts using the API or by seeding the database directly.

**Post Schema:**

```typescript
{
  title: String,
  slug: String,
  content: String,
  summary: String,
  createdAt: Date
}
```

To test content creation via API:

```bash
POST /api/posts/new
Content-Type: application/json

{
  "title": "Hello World",
  "slug": "hello-world",
  "content": "# Welcome\nThis is my first post.",
  "summary": "A brief introduction."
}
```

## 🤝 Contributing

Contributions are welcome\! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
