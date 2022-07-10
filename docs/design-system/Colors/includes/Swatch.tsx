import clsx from 'clsx';

import theme from 'theme';

export function Swatch(props: { color: string; value: string }) {
  const { color, value } = props;

  const classes = clsx('w-32 h-16 border rounded border-darkGrey border-opacity-50', `bg-${color}`);

  return (
    <div className="flex items-center">
      <div className={classes} />
      <div className="pl-4">
        <p className="font-bold">{color}</p>
        <p className="text-darkGrey">{value}</p>
      </div>
    </div>
  );
}

export function SwatchOverview() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(theme.colors).map((color) => {
        const [key, value] = color;

        return <Swatch key={key} color={key} value={value} />;
      })}
    </div>
  );
}
