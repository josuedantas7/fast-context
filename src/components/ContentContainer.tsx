import { SelfDrivenDisplayContainer } from "./DisplayContainer";
import { SelfDrivenFormContainer } from "./FormContainer";

export function SelfDrivenContentContainer() {
  console.log(`Self Driven Content Rendering`)
  return (
    <div className="container">
      <h3>'Self Driven' Content Container (NO RE-RENDERS)</h3>
      <SelfDrivenFormContainer />
      <SelfDrivenDisplayContainer />
    </div>
  );
};
