export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="min-h-screen bg-green-500">{children}</section>;
}
