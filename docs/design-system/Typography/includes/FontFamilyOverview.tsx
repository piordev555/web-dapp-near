export function FontFamilyOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 my-4">
      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.font-body</div>
        <div className="col-span-3 font-body">Body Font (Roboto)</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.font-heading</div>
        <div className="col-span-3 font-heading">Heading Font (Anton)</div>
      </div>
    </div>
  );
}
