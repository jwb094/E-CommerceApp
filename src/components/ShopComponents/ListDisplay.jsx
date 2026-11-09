import ProductRectangle from "./ProductCard/ProductRectangle";

function ListDisplay(props) {
  let productsToBeDisplayed = [];

  for (let index = 0; index < props.content.length; index++) {
    productsToBeDisplayed.push(
      <ProductRectangle
        data={props.content[index]}
        key={index}
      ></ProductRectangle>,
    );
  }

  return (
    <section data-template="display" data-view="List" className="c-listView">
      <div className="container">
        <div className="flex flex-col items-stretch gap-y-6">
          {productsToBeDisplayed}
        </div>
      </div>
    </section>
  );
}

export default ListDisplay;
