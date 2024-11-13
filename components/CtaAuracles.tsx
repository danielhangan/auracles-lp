import Link from "next/link";

export default function AuraclesCta() {
  return (
    <div className="relative flex items-center justify-center w-full gap-10">
      <div className="w-full max-w-xs mx-auto shrink-0">
        <div className="relative">
          {/* Border with dots in corners */}
          <div className="space-y-3">
            <div className="flex justify-center font-light">
              <p>Want to be part of the launch?</p>
            </div>

            <div>
              <Link
                href="https://launch.auracles.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-gray-100 bg-[var(--pink)] btn hover:bg-[var(--white)] dark:text-gray-100 dark:bg-[var(--pink)] dark:hover:bg-[var(--white)] dark:hover:text-gray-800 hover:text-gray-800 font-semibold"
              >
                Yes, sign me up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
