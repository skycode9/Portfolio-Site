export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-gray-400">Sky</span>. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <span className="text-violet-400">React</span> &{" "}
          <span className="text-violet-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
