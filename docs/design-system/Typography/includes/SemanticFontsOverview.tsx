export function SemanticFontsOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 my-4">
      {/* body */}
      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-body-sm</div>
        <div className="col-span-3 text-body-sm">Body SM</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-body-md</div>
        <div className="col-span-3 text-body-md">Body MD</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-body-lg</div>
        <div className="col-span-3 text-body-lg">Body LG</div>
      </div>

      {/* heading */}
      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-heading-sm</div>
        <div className="col-span-3 text-heading-sm">Heading SM</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-heading-md</div>
        <div className="col-span-3 text-heading-md">Heading MD</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-heading-lg</div>
        <div className="col-span-3 text-heading-lg">Heading LG</div>
      </div>

      <div className="grid items-center grid-cols-4">
        <div className="col-span-1">.text-heading-xl</div>
        <div className="col-span-3 text-heading-xl">Heading XL</div>
      </div>
    </div>
  );
}
