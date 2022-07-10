export function FontSizeOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 my-4 font-body">
      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-xs</div>
        <div className="col-span-3 text-xs">0.75rem / 12px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-sm</div>
        <div className="col-span-3 text-sm">0.875rem / 14px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-md</div>
        <div className="col-span-3 text-md">1rem / 16px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-lg</div>
        <div className="col-span-3 text-lg">1.125rem / 18px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-xl</div>
        <div className="col-span-3 text-xl">1.5rem / 24px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-2xl</div>
        <div className="col-span-3 text-2xl">2rem / 32px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-3xl</div>
        <div className="col-span-3 text-3xl">3rem / 48px</div>
      </div>
    </div>
  );
}
