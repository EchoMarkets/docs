import Image from "next/image";
import clsx from "clsx";

export function Logomark(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Image>,
    "src" | "alt"
  >,
) {
  return (
    <Image
      {...props}
      src="/logo-echomarkets-gradient.svg"
      alt=""
      aria-hidden
      width={36}
      height={36}
      unoptimized
    />
  );
}

export function Logo(props: React.ComponentPropsWithoutRef<"span">) {
  const { className, ...rest } = props;
  return (
    <span
      className={clsx("inline-flex flex-row items-center gap-2", className)}
      {...rest}
    >
      <Image
        src="/logo-echomarkets-gradient.svg"
        alt=""
        aria-hidden
        width={401}
        height={379}
        unoptimized
        className="h-9 w-auto shrink-0"
      />
      <span className="shrink-0 bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text font-display text-lg font-semibold leading-none tracking-tight text-transparent">
        echo markets
      </span>
    </span>
  );
}
