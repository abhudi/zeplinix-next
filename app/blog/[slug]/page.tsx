export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>{params.slug.replace("-", " ").toUpperCase()}</h1>
      <p>This is a dynamic blog post page.</p>
    </main>
  );
}
