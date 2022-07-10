export function LineHeightOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 my-4 font-body">
      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.leading-xs</div>
        <div className="col-span-3 leading-xs">1rem / 16px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.leading-sm</div>
        <div className="col-span-3 leading-sm">1.25rem / 20px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.leading-md</div>
        <div className="col-span-3 leading-md">1.5rem / 24px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.leading-lg</div>
        <div className="col-span-3 leading-lg">1.75rem / 28px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.leading-xl</div>
        <div className="col-span-3 leading-xl">2.25rem / 36px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.leading-2xl</div>
        <div className="col-span-3 leading-2xl">3rem / 48px</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.leading-3xl</div>
        <div className="col-span-3 leading-3xl">4rem / 64px</div>
      </div>
    </div>
  );
}
