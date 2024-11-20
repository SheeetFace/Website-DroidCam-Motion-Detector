export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:py-10">
      <div className="inline-block w-full">{children}</div>
    </section>
  );
}
