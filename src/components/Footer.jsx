import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p><strong>Email:</strong> <a href="mailto:tyler.yannes@gmail.com" className="text-blue-600 hover:text-blue-800">tyler.yannes@gmail.com</a></p>
          </div>
          <div>
            <p> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tyler-yannes" className="text-blue-600 hover:text-blue-800">Tyler's LinkedIn</a> </p>
          </div>
          <div>
            <p> <strong>Github:</strong> <a href="https://github.com/tyleryannes94" className="text-blue-600 hover:text-blue-800">Tyler's Github</a> </p>
          </div>
          <div>
            <p> <strong>Employer:</strong> <a href="https://skio.com/team/" className="text-blue-600 hover:text-blue-800">Skio</a></p>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center">
        <span>© 2024 "Copyright":</span>
        <a className="font-semibold" href="https://tw-elements.com/">TW Elements</a>
      </div>
    </footer>
  );
}
