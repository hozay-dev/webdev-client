import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4: Managing Client State
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link">
            Lab 5: RESTful Web APIs
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <a href="https://github.com/hozay-dev/webdev-client" id="wd-github">
            GitHub repository
          </a>
        </li>
        <li>
          <a href="https://github.com/hozay-dev/webdev-server" id="wd-github-node">
            Node.js HTTP Server GitHub
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_HTTP_SERVER} id="wd-http-server">
            HTTP Server (Render)
          </a>
        </li>
      </ul>
    </div>
  );
}
