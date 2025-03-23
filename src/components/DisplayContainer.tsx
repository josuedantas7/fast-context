import { SelfDrivenDisplay } from "./Display";

export function SelfDrivenDisplayContainer() {
  console.log(`Self Driven Display Rendering`)
  return (
    <div className="container">
      <h4>'Self Driven' Display (NO RE-RENDERS - only children re-render on field changes)</h4>
        <SelfDrivenDisplay fieldName="first" label="First Name" />
        <SelfDrivenDisplay fieldName="last" label="Last Name" />
    </div>
  );
};
