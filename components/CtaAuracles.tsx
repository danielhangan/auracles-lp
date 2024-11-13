import Link from "next/link";

export default function AuraclesCta() {
  return (
    <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-11">
      <div className="w-full max-w-xs mx-auto shrink-0">
        <div className="relative">
          {/* Border with dots in corners */}
          <div
            className="absolute -inset-3 bg-indigo-500/15 dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
            aria-hidden="true"
          />
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
