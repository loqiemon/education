type Mods = Record<string, boolean | string>;
export function classNames(classes: string, mods: Mods, additional: string[] = []): string {
  return [
    classes,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}
