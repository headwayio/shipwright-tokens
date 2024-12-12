import Button from "./button";
import Card from "./card";

const Components = () => {
  return (
    <div className="flex flex-col w-3/4 pb-3 mb-5 border-b-2">
      <h4 className="text-center h4 h4-400 text-type-black-secondary">Components</h4>
      <Button className="btn-primary-active">Try Now</Button>
      <Button className="btn-primary-hover">Try Now</Button>
      <Button className="btn-primary-selected">Try Now</Button>
      <Button className="btn-primary-deactivated">Try Now</Button>
      <Button className="btn-alt-active">Try Now</Button>
      <Button className="btn-alt-hover">Try Now</Button>
      <Button className="btn-alt-selected">Try Now</Button>
    </div>
  );
};

export default Components;
